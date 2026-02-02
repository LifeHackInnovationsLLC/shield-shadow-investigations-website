#!/bin/bash
# Shield & Shadows Investigations Website - Development Server
# Usage: ./launch.sh [start|stop|status|restart|logs]
#
# IMPORTANT: "start" always performs a clean restart to ensure fresh config.
# This prevents issues where Vite config changes (like allowedHosts) aren't
# picked up because an old process is still running.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PID_FILE="$SCRIPT_DIR/.server.pid"
LOG_FILE="$SCRIPT_DIR/.server.log"

# Ensure LHI_SCRIPTS_ROOT is set
if [ -z "$LHI_SCRIPTS_ROOT" ]; then
    echo "Error: LHI_SCRIPTS_ROOT not set"
    exit 1
fi

# Source port registry for dynamic port lookup
source "${LHI_SCRIPTS_ROOT}/lhi_modules/lhi_git_projects/LifeHackInnovationsLLC/lhi_node_modules/lhi_bash_utilities/lib/port_registry.sh"
PORT=$(get_port_by_tool "shield-shadow-website")

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

get_pid() {
    if [ -f "$PID_FILE" ]; then
        cat "$PID_FILE"
    fi
}

is_running() {
    local pid=$(get_pid)
    if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
        return 0
    fi
    return 1
}

# Kill ANY process using our port - not just the one we know about
# This ensures we always get a clean state
kill_port_processes() {
    local port_pids=$(lsof -ti :$PORT 2>/dev/null || true)
    if [ -n "$port_pids" ]; then
        echo -e "${YELLOW}Killing existing processes on port $PORT...${NC}"
        echo "$port_pids" | xargs kill -9 2>/dev/null || true
        sleep 1
    fi

    # Also kill any process from our PID file
    if [ -f "$PID_FILE" ]; then
        local saved_pid=$(cat "$PID_FILE")
        if [ -n "$saved_pid" ] && kill -0 "$saved_pid" 2>/dev/null; then
            kill -9 "$saved_pid" 2>/dev/null || true
        fi
        rm -f "$PID_FILE"
    fi
}

start_server() {
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
    echo -e "${BLUE}Shield & Shadow Investigations - Development Server${NC}"
    echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"

    # ALWAYS ensure clean state - kill any existing processes
    # This prevents stale Vite instances with old config from causing issues
    kill_port_processes

    cd "$SCRIPT_DIR"

    # Check if node_modules exists
    if [ ! -d "node_modules" ]; then
        echo -e "${YELLOW}Installing dependencies...${NC}"
        npm install
    fi

    echo -e "${GREEN}Starting Vite dev server on port $PORT...${NC}"

    # Use Vite dev server for hot reload during development
    nohup npm run dev > "$LOG_FILE" 2>&1 &
    echo $! > "$PID_FILE"

    # Wait for server to be ready (up to 10 seconds)
    echo -n "Waiting for server..."
    for i in {1..10}; do
        if curl -s http://127.0.0.1:$PORT >/dev/null 2>&1; then
            echo -e " ${GREEN}Ready!${NC}"
            break
        fi
        echo -n "."
        sleep 1
    done

    if is_running; then
        echo ""
        echo -e "${GREEN}Server started successfully${NC}"
        echo -e "  Local:  ${GREEN}http://localhost:$PORT${NC}"
        echo -e "  Proxy:  ${GREEN}https://sns.local/${NC}"
        echo -e "  PID:    $(get_pid)"
        echo -e "  Logs:   ./launch.sh logs"
    else
        echo -e "${RED}Failed to start server${NC}"
        echo -e "${YELLOW}Last 20 lines of log:${NC}"
        tail -20 "$LOG_FILE"
        return 1
    fi
}

stop_server() {
    echo -e "${YELLOW}Stopping server...${NC}"
    kill_port_processes
    echo -e "${GREEN}Server stopped${NC}"
}

show_status() {
    if is_running; then
        echo -e "${GREEN}Server is running${NC}"
        echo -e "  PID:   $(get_pid)"
        echo -e "  Port:  $PORT"
        echo -e "  Local: http://localhost:$PORT"
        echo -e "  Proxy: https://sns.local/"
    else
        echo -e "${YELLOW}Server is not running${NC}"
        # Check if something else is using the port
        if lsof -i :$PORT >/dev/null 2>&1; then
            echo -e "${RED}Warning: Port $PORT is in use by another process:${NC}"
            lsof -i :$PORT
        fi
    fi
}

show_logs() {
    if [ -f "$LOG_FILE" ]; then
        tail -f "$LOG_FILE"
    else
        echo -e "${YELLOW}No log file found${NC}"
    fi
}

case "${1:-start}" in
    start)
        start_server
        ;;
    stop)
        stop_server
        ;;
    restart)
        # restart is now identical to start (both do clean restart)
        start_server
        ;;
    status)
        show_status
        ;;
    logs)
        show_logs
        ;;
    *)
        echo "Usage: $0 {start|stop|restart|status|logs}"
        echo ""
        echo "Commands:"
        echo "  start   - Start server (always does clean restart)"
        echo "  stop    - Stop server"
        echo "  restart - Same as start (clean restart)"
        echo "  status  - Show server status"
        echo "  logs    - Tail server logs"
        exit 1
        ;;
esac
