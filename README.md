# Shield & Shadow Investigations Website

Website for [shieldandshadowinvestigations.com](https://shieldandshadowinvestigations.com)

## Quick Start

```bash
./launch.sh
```

This starts the Vite development server with hot module reload.

## Development

### Local Development Server

```bash
./launch.sh          # Start server (always does clean restart)
./launch.sh stop     # Stop server
./launch.sh status   # Check if running
./launch.sh logs     # Tail server logs
```

**Note:** The `start` command always kills any existing processes on the port before starting fresh. This ensures config changes (like `vite.config.ts`) are always picked up.

### URLs

| URL | Description |
|-----|-------------|
| http://localhost:7083 | Direct Vite server |
| https://sns.local/ | Through nginx proxy (requires local dev setup) |

### Port Assignment

This project uses port **7083** from the LHI Port Registry.

Source of truth: `lhi_modules/lhi_utility_modules/lhi_port_manager/lhi_port_registry.json`

## Configuration

### vite.config.ts

The `allowedHosts` configuration is required for the nginx proxy to work:

```typescript
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ['sns.local', 'localhost', '127.0.0.1'],
  },
})
```

**IMPORTANT:** Changes to `vite.config.ts` require a server restart. Unlike code changes that hot-reload, server configuration changes only take effect after running `./launch.sh` again.

### Vite Config Changes That Require Restart

- `server.allowedHosts`
- `server.port`
- `server.host`
- `server.proxy`
- Any `plugins` changes

## Build

```bash
npm run build    # TypeScript check + production build
npm run preview  # Preview production build
```

## Tech Stack

- React 19
- TypeScript 5.9
- Vite 7
- Tailwind CSS 3
- React Router 7

## Project Structure

```
src/
  components/     # Reusable UI components
  pages/          # Route pages
  assets/         # Images, fonts, etc.
  App.tsx         # Main app component
  main.tsx        # Entry point
public/
  vite.svg        # Favicon (TODO: replace with branding)
```
