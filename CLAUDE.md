# AI Agent Configuration - Shield & Shadows Investigations Website

## Project Overview

Website for **shieldandshadowsinvestigations.com** - a professional investigations business.

## Important: Portability

This website is designed to be **completely portable and self-contained**. It must have:
- No dependencies on LHI infrastructure in the actual website code
- No LHI branding or references in user-facing content
- All assets self-contained (no external URLs to LHI domains)
- Clear handoff documentation (see HANDOFF.md)

## Domain & Hosting

- **Domain**: shieldandshadowsinvestigations.com
- **Hosting**: DigitalOcean droplet (temporary, can be moved)
- **Nginx config**: `/etc/nginx/sites-available/shieldandshadowsinvestigations.com`
- **SSL**: Let's Encrypt

## Development Guidelines

1. **Keep it professional** - This is a business site for investigations services
2. **Color scheme** - Dark, trustworthy colors (navy, slate, subtle accents)
3. **No playful elements** - Serious, credible aesthetic
4. **Mobile-first** - Many clients may visit from phones
5. **Fast loading** - Minimize dependencies, optimize images

## Branding

- Business name: Shield & Shadows Investigations
- Tone: Professional, trustworthy, discreet
- Avoid: Overly dramatic PI cliches, anything that looks unprofessional

## Current State

- **Phase**: Research Complete, MVP Development Ready
- **Next steps**: Build out full site with services, contact, about pages

## Documentation Structure

| File | Purpose |
|------|---------|
| [AGENT_BRIEF.md](AGENT_BRIEF.md) | Quick reference for AI agents |
| [PLANNING.md](PLANNING.md) | Strategic vision and architecture |
| [TASK.md](TASK.md) | Detailed task tracking |
| [research/](research/) | Competitor analysis, best practices, contact systems |
| [references/](references/) | Business card and branding assets |

**Start Here:** Read [AGENT_BRIEF.md](AGENT_BRIEF.md) for quick orientation, then [PLANNING.md](PLANNING.md) for full context.
