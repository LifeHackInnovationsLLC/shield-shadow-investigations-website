# Website Handoff Instructions

This document explains how to transfer ownership and hosting of the Shield & Shadows Investigations website.

## What's Included

This repository contains **everything** needed to run the website:
- All HTML, CSS, and JavaScript files
- All images and assets
- Configuration files

There are **no external dependencies** on any other systems.

## Current Hosting Setup

| Item | Current Value |
|------|---------------|
| Domain Registrar | Namecheap |
| Domain | shieldandshadowsinvestigations.com |
| Hosting Server | DigitalOcean (134.199.198.58) |
| SSL Certificate | Let's Encrypt |

## Transfer Steps

### 1. Get the Code

The current owner will:
- Transfer ownership of this GitHub repository, OR
- Provide a complete ZIP download of all files

### 2. Choose New Hosting

Options for hosting (from easiest to most control):

**Option A: Netlify (Free, Easiest)**
1. Create account at netlify.com
2. Drag and drop website folder to deploy
3. Get free SSL automatically

**Option B: Vercel (Free, Easy)**
1. Create account at vercel.com
2. Connect GitHub repo or upload files
3. Get free SSL automatically

**Option C: Your Own Server**
1. Get a VPS from DigitalOcean, Linode, etc.
2. Install nginx
3. Copy files to server
4. Set up SSL with Let's Encrypt

### 3. Update DNS

In Namecheap (or your domain registrar):

1. Log in to your account
2. Go to Domain List → Manage → Advanced DNS
3. Update or add A Records:
   - Host: `@` → Value: `[new server IP]`
   - Host: `www` → Value: `[new server IP]`
4. Wait 1-24 hours for DNS to propagate

If using Netlify/Vercel, they'll provide the exact DNS settings to use.

### 4. Domain Transfer (Optional)

If you want to transfer the domain registration to your own Namecheap account:
1. Current owner initiates transfer in Namecheap
2. You'll receive an authorization code via email
3. Accept the transfer in your Namecheap account
4. Domain moves to your control

## Local Development

To run the website locally:

```bash
# Using the included script
./launch.sh start

# Or using Python
python3 -m http.server 8083

# Or using Node.js
npx serve -p 8083
```

Then open http://localhost:8083

## Support

For questions about this website's code or structure, refer to the README.md file or review the source code directly - it's straightforward HTML/CSS/JS.

## Files You Can Safely Remove After Transfer

These files are only used for organization within the development team:
- `lhi_module.json` (not needed for hosting)
- `CLAUDE.md` (AI assistant configuration)

The essential files are:
- `index.html` (and any other HTML pages)
- `css/` folder
- `js/` folder
- `assets/` folder
- Any images in the root directory
