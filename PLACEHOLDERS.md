# Shield & Shadow Investigations Website - Placeholders

This document lists all placeholders in the website that need to be populated with Natasha's actual information.

## Priority 1: Essential Information

### About Page (`src/pages/About.tsx`)

| Placeholder | Current Value | What's Needed |
|-------------|---------------|---------------|
| Owner Photo | Gray placeholder box | Professional headshot of Natasha Bilick |
| Owner Bio | Generic placeholder text | Natasha's actual professional biography (2-3 paragraphs) |
| Years of Experience | "XX+ Years Experience" | Actual number of years in investigations |
| Total Cases | "X,XXX+ Cases Investigated" | Approximate total cases handled |
| Client Satisfaction | "XX% Client Satisfaction" | Actual satisfaction rate if tracked |

### Credentials & Licenses

| Placeholder | Location | What's Needed |
|-------------|----------|---------------|
| NY PI License # | About page, Footer | New York Private Investigator license number |
| Notary Public Commission | About page | NY Notary Public commission details/number |
| Additional Certifications | About page | Any industry certifications (NICA, etc.) |

### Footer (`src/components/Footer.tsx`)

| Placeholder | Current Value | What's Needed |
|-------------|---------------|---------------|
| License Number | "NY Licensed Private Investigator #XXXXXX" | Actual PI license number |

---

## Priority 2: Business Details

### Home Page (`src/pages/Home.tsx`)

| Placeholder | Section | What's Needed |
|-------------|---------|---------------|
| Years in Business | Trust Signals | Number to replace "Over XX years" |
| PI License # | Credentials | Actual license number |
| Notary Commission | Credentials | Actual commission number |
| Tagline | Hero | Review/approve or provide alternative tagline |

### Service Area Details

The following locations are listed as the service area - confirm these are accurate:
- Nassau County
- Suffolk County
- Queens
- Brooklyn
- Manhattan
- Bronx
- Staten Island
- Westchester County

---

## Priority 3: Content Review

### Service Descriptions

All service pages have been populated with industry-standard content. Natasha should review for:

1. **SIU Page** (`src/pages/services/SIU.tsx`)
   - Verify all investigation types listed are offered
   - Add any specialty areas unique to Shield & Shadow

2. **General Liability** (`src/pages/services/GeneralLiability.tsx`)
   - Confirm types of liability claims handled
   - Add specific expertise areas

3. **Personal Lines** (`src/pages/services/PersonalLines.tsx`)
   - Confirm all claim types are accurate
   - Add any additional services

4. **Commercial Lines** (`src/pages/services/CommercialLines.tsx`)
   - Verify industries served list
   - Add any specialized commercial experience

5. **Process Server** (`src/pages/services/ProcessServer.tsx`)
   - Confirm service area matches actual coverage
   - Add any travel fee information

6. **Notary Public** (`src/pages/services/NotaryPublic.tsx`)
   - Verify scheduling availability
   - Add pricing if desired

---

## Priority 4: Contact Form Implementation

### Contact Page (`src/pages/Contact.tsx`)

The contact form currently captures data but needs backend implementation:

**Options:**
1. **JotForm** (Recommended) - Easy embed, email notifications, SMS capable
2. **Formspree** - Simple form backend
3. **Custom backend** - More control but requires hosting

**Fields captured:**
- Name
- Email
- Phone
- Company (optional)
- Service Type (dropdown)
- Message

---

## Priority 5: Optional Enhancements

### Future Content Additions

| Enhancement | Description | Priority |
|-------------|-------------|----------|
| Testimonials | Client quotes (anonymized for privacy) | Medium |
| Case Studies | Example investigations (sanitized) | Low |
| Insurance Partners | Logos of carriers worked with | Low |
| Blog/Resources | Industry insights, legal updates | Low |
| FAQ Page | Common questions from clients | Medium |

---

## Quick Reference: Files with Placeholders

```
src/
├── components/
│   └── Footer.tsx          # License number
├── pages/
│   ├── Home.tsx            # Years, credentials
│   ├── About.tsx           # Photo, bio, all credentials
│   └── Contact.tsx         # Form submission handler
```

---

## Notes

- Phone number confirmed: 516-233-4044
- Email confirmed: NBilick@shieldandshadowinvestigation.com
- Domain noted: shieldandshadowsinvestigations.com (with 's')
- All placeholder comments in code are marked with `{/* PLACEHOLDER: ... */}`
