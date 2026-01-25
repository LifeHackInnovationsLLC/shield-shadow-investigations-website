# Agent Brief: Shield & Shadows Investigations Website

**Created:** January 25, 2025
**Purpose:** Quick reference for AI agents working on this project

---

## Project Status

| Phase | Status |
|-------|--------|
| Research & Planning | ✅ Complete |
| MVP Website | 🔄 Ready to Start |
| Content Development | ⏳ Pending |
| Contact System | ⏳ Pending |
| SEO & Launch | ⏳ Pending |

---

## Quick Reference

### Business Info

| Item | Value |
|------|-------|
| Business | Shield & Shadows Investigations |
| Owner | Natasha Bilick |
| Phone | 516-233-4044 |
| Email | NBilick@shieldandshadowinvestigation.com |
| Domain | shieldandshadowsinvestigations.com |
| Area | Long Island, NYC, surrounding areas |

### Services Offered

1. SIU Investigations
2. General Liability
3. Personal Lines
4. Commercial Lines
5. Process Server
6. Notary Public

---

## Design Requirements (from research)

### Colors

| Use | Color | Notes |
|-----|-------|-------|
| Primary | Navy/Dark Blue (#1a1a2e) | Main backgrounds |
| Secondary | Charcoal (#16213e) | Secondary elements |
| Accent | Gold (#c9a227) | Subtle highlights |
| Text | White (#ffffff) | On dark backgrounds |

### Typography

- **Brand Name:** Gothic/Old English style (match business card)
- **Body Text:** Clean sans-serif (Inter, Open Sans, Roboto)
- **Minimum Size:** 16px body text

### Aesthetic

- Dark, moody, smoky backgrounds
- Professional and trustworthy
- Serious tone, no cliches
- Mobile-first responsive

---

## Pages to Build (Priority Order)

1. **Home** - Hero, services overview, trust signals, contact CTA
2. **Contact** - Form (JotForm embed), phone, email, service area
3. **Privacy Policy** - Required legal page
4. **About** - Owner bio, credentials, mission
5. **Services** (6 pages) - One page per service

---

## Contact System Recommendation

**JotForm with Native SMS** (~$39/month)

Requirements:
- Email notification → NBilick@shieldandshadowinvestigation.com
- SMS notification → 516-233-4044
- Auto-responder → Client receives confirmation

---

## Key Documentation

| File | Purpose |
|------|---------|
| [PLANNING.md](PLANNING.md) | Strategic vision, architecture, design direction |
| [TASK.md](TASK.md) | Detailed task tracking with progress |
| [research/README.md](research/README.md) | Research summary |
| [research/COMPETITOR_ANALYSIS.md](research/COMPETITOR_ANALYSIS.md) | 10 competitor website analysis |
| [research/WEBSITE_BEST_PRACTICES.md](research/WEBSITE_BEST_PRACTICES.md) | Industry website standards |
| [research/CONTACT_NOTIFICATION_SYSTEMS.md](research/CONTACT_NOTIFICATION_SYSTEMS.md) | Contact form options |
| [references/README.md](references/README.md) | Business card reference info |

---

## Critical Rules

1. **Portability:** No LHI infrastructure dependencies in production code
2. **Branding:** Match business card aesthetic (dark, gothic, smoky)
3. **Mobile-First:** Design for phones first, desktop second
4. **Performance:** Load time under 3 seconds
5. **Trust Signals:** Display licensing/credentials prominently

---

## Current Tech Stack

| Component | Technology |
|-----------|------------|
| Frontend | Static HTML/CSS/JS |
| Hosting | DigitalOcean (nginx) |
| SSL | Let's Encrypt |
| Development | npm start or ./launch.sh |
| Local URL | http://localhost:8083 |

---

## Next Steps for Development Agent

1. Review [PLANNING.md](PLANNING.md) for full design direction
2. Check [references/README.md](references/README.md) for business card assets
3. Start with TASK.md section SSI-1: MVP Website
4. Build CSS framework first (colors, typography, responsive)
5. Then build home page structure
6. Update TASK.md as you complete items
