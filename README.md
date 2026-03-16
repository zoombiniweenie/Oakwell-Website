# Oakwell Workforce Limited — Website

## Before Going Live — Things to Replace

Search for `[INSERT` throughout all files and replace:
- `[INSERT PHONE]` → Your business phone number
- `[INSERT ADDRESS]` → Your registered office address  
- `[INSERT]` (Company No.) → Your Companies House number
- `[INSERT]` (ICO Reg) → Your ICO registration number
- `[INSERT DATE]` → Privacy policy date
- `hello@oakwellworkforce.co.uk` → Your actual email
- `[INSERT TAGLINE]` → Whatever you replace "Forged in the Black Country" with

Also update the `nav-logo-sub` text in `js/components.js` with your chosen tagline.

---

## Deploying to Netlify (Free)

1. Push this folder to a GitHub repository
2. Go to netlify.com → "Add new site" → "Import an existing project"
3. Connect your GitHub account and select the repo
4. Build command: leave empty
5. Publish directory: `.` (the root)
6. Click Deploy

**Forms:** Netlify form handling is already configured. Submissions arrive in your Netlify dashboard and can be forwarded to your email in Netlify → Forms → Notifications.

**Custom domain:** When you buy your domain, go to Netlify → Domain Settings → Add custom domain. Follow their instructions — it takes about 10 minutes.

---

## File Structure

```
oakwell-site/
├── index.html          ← Homepage
├── netlify.toml        ← Netlify config
├── css/
│   └── style.css       ← All styles
├── js/
│   ├── main.js         ← Interactions, animations, form handling
│   └── components.js   ← Shared nav + footer (injected into every page)
└── pages/
    ├── clients.html    ← For Clients page (with enquiry form)
    ├── workers.html    ← For Workers page (with registration form)
    ├── about.html      ← About Us page
    ├── contact.html    ← Contact page (with contact form)
    └── privacy.html    ← Privacy Policy + Cookie Policy + Terms of Use
```

---

## Forms (Netlify)

Three forms are configured:
- `client-enquiry` — client enquiry form on clients.html
- `worker-registration` — worker registration form on workers.html  
- `contact` — general contact form on contact.html

Submissions appear in your Netlify dashboard under Forms. Set up email notifications in Netlify → Site Settings → Forms → Notifications.

---

## Upgrading Later

When you're making money and want a more professional setup:
- **Domain:** Buy at Namecheap, GoDaddy, or 123-reg (oakwellworkforce.co.uk)
- **Email hosting:** Google Workspace (£5/month) or Zoho Mail (free tier)
- **Analytics:** Add Google Analytics 4 or Plausible (privacy-focused)
- **CRM:** HubSpot free tier or Pipedrive to manage client pipeline
- **Upgrade host:** Netlify Pro (£15/month) for unlimited forms and more
