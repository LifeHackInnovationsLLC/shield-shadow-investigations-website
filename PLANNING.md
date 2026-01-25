# Shield & Shadows Investigations Website - Strategic Plan

**Last Updated:** January 25, 2025
**Status:** Planning Phase

---

## Vision

Create a professional, trustworthy website for Shield & Shadows Investigations that:
- Establishes credibility in the insurance investigation industry
- Generates qualified leads through clear service presentation
- Provides immediate notification when prospects reach out
- Is portable and self-contained (no LHI dependencies in production)

---

## Business Context

| Attribute | Details |
|-----------|---------|
| Business Name | Shield & Shadows Investigations |
| Owner | Natasha Bilick |
| Services | SIU, General Liability, Personal/Commercial Lines, Notary, Process Server |
| Phone | 516-233-4044 |
| Email | NBilick@shieldandshadowinvestigation.com |
| Domain | shieldandshadowsinvestigations.com |
| Service Area | Long Island, NYC, surrounding areas |

---

## Competitive Positioning

### Industry Landscape

The insurance investigation industry is dominated by large national firms (CoventBridge, Ethos Risk, Delta Group) with thousands of employees and PE backing. See [research/COMPETITOR_ANALYSIS.md](research/COMPETITOR_ANALYSIS.md) for full analysis.

### Shield & Shadows Advantages

| Advantage | Why It Matters |
|-----------|----------------|
| **Personal Service** | Direct relationship with owner, not corporate bureaucracy |
| **Local Expertise** | Deep knowledge of Long Island/NYC area |
| **Responsiveness** | Small firm = faster turnaround |
| **Full Service** | SIU + GL + Notary + Process Server under one roof |
| **Flexibility** | Can adapt to unique client needs |

### Positioning Statement

> "Local expertise, personal service, professional results. Shield & Shadows provides comprehensive investigation services with the attention and responsiveness that only a dedicated, owner-operated firm can offer."

---

## Website Architecture

### Sitemap

```
shieldandshadowsinvestigations.com/
├── Home (index.html)
├── About
│   └── Natasha Bilick bio, credentials, mission
├── Services
│   ├── SIU Investigations
│   ├── General Liability
│   ├── Personal Lines
│   ├── Commercial Lines
│   ├── Process Server
│   └── Notary Public
├── Contact
│   └── Form, phone, email, service area
└── Privacy Policy
```

### Page Priority

| Phase | Pages | Priority |
|-------|-------|----------|
| MVP | Home, Contact, Privacy | P0 - Launch |
| Phase 1 | About, Services (combined) | P1 - Week 1 |
| Phase 2 | Individual service pages | P2 - Week 2 |
| Future | Blog, Testimonials, FAQ | P3 - As needed |

---

## Design Direction

### Brand Elements (from business card)

- **Logo Style:** Gothic/Old English for "Shield and Shadow"
- **Tagline Font:** Clean sans-serif for "INVESTIGATIONS"
- **Background:** Dark smoky/cloudy aesthetic
- **Colors:** Black, dark grays, white text

### Color Palette

| Use | Color | Hex |
|-----|-------|-----|
| Primary Background | Navy/Dark Blue | #1a1a2e |
| Secondary | Charcoal/Slate | #16213e |
| Accent | Subtle Gold | #c9a227 |
| Text (on dark) | White | #ffffff |
| Text (on light) | Dark Gray | #333333 |

### Typography

- **Brand Name:** Gothic/Old English (match business card)
- **Headings:** Professional serif or bold sans-serif
- **Body:** Clean sans-serif (Inter, Open Sans, or Roboto)
- **Minimum Size:** 16px for body text

### Tone

- Professional and trustworthy
- Serious, not playful
- Discreet and confidential
- Competent and experienced

---

## Technical Approach

### Stack (Current)

| Component | Technology |
|-----------|------------|
| Frontend | Static HTML/CSS/JS |
| Hosting | DigitalOcean Droplet |
| SSL | Let's Encrypt |
| Server | Nginx |
| Development | npm/launch.sh |

### Contact Form Options

**Recommended:** JotForm with Native SMS (~$39/month)
- Embed form on Contact page
- Email notification to owner
- SMS notification to owner phone
- Auto-responder to client

See [research/CONTACT_NOTIFICATION_SYSTEMS.md](research/CONTACT_NOTIFICATION_SYSTEMS.md) for alternatives.

### Performance Requirements

- Load time: Under 3 seconds on mobile
- Mobile-first responsive design
- Compressed images
- Minimal JavaScript dependencies

---

## Content Requirements

### Home Page

1. **Hero Section**
   - Brand name with gothic styling
   - Tagline: "Professional Investigation Services"
   - Primary CTA: "Request a Consultation"
   - Background: Dark/smoky aesthetic

2. **Services Overview**
   - Brief list of core services
   - Link to full services page

3. **Trust Signals**
   - Years of experience / credentials
   - Licensed in New York
   - Confidentiality commitment

4. **Contact CTA**
   - Phone number (click-to-call)
   - "Contact Us Today" button

### About Page

- Natasha's professional background
- Why she started the business
- Credentials and licensing
- Mission/values statement
- Professional photo (if available)

### Services Pages

See [research/WEBSITE_BEST_PRACTICES.md](research/WEBSITE_BEST_PRACTICES.md) for page structure:
1. Overview - What the service is
2. Benefits - What clients get
3. Process - How it works (simplified)
4. CTA - Next step

### Contact Page

- Contact form (5-7 fields max)
- Phone: 516-233-4044
- Email: NBilick@shieldandshadowinvestigation.com
- Service area description
- Response time promise
- Confidentiality statement

---

## Success Metrics

| Metric | Target |
|--------|--------|
| Load time (mobile) | < 3 seconds |
| Mobile responsive | 100% |
| Contact form functional | With dual notification |
| SEO basics | Title tags, meta descriptions |
| SSL | Active (Let's Encrypt) |

---

## Open Questions

1. **Logo:** Do we have a digital version of the logo from the business card?
2. **Photo:** Is there a professional photo of Natasha to use?
3. **Credentials:** What certifications/licenses should be displayed?
4. **Testimonials:** Are there client testimonials we can use?
5. **Service Area:** Exact geographic coverage to list?

---

## References

- [research/COMPETITOR_ANALYSIS.md](research/COMPETITOR_ANALYSIS.md) - Industry competitor analysis
- [research/WEBSITE_BEST_PRACTICES.md](research/WEBSITE_BEST_PRACTICES.md) - Website standards
- [research/CONTACT_NOTIFICATION_SYSTEMS.md](research/CONTACT_NOTIFICATION_SYSTEMS.md) - Contact options
- [references/README.md](references/README.md) - Business card reference materials
