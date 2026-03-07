# RegenAI Solutions Website

Landing page and dashboard for RegenAI Solutions.

**Live:** https://regenaisolutions.com

## Structure

```
/
├── index.html          # Landing page
├── partner.html        # Partner page
├── investor.html       # Investor page
├── pilot.html          # Pilot page
├── tech.html           # Tech page
├── img/                # Images
├── src/                # Dashboard React source
│   ├── src/            # React components
│   ├── package.json
│   └── vite.config.ts
├── app/                # Built dashboard (auto-generated)
└── CNAME               # Custom domain
```

## Development

### Landing Page
Edit HTML files directly. No build required.

### Dashboard (React App)

```bash
cd src
npm install
npm run dev      # Dev server: http://localhost:5173/app/
npm run build    # Build to ../app/
```

### Local Preview

```bash
# Serve entire site locally
npx serve -s . -l 8080
# Open http://localhost:8080
```

## Deployment

Push to `landing_page` branch → GitHub Pages auto-deploys.

## URLs

- Landing: https://regenaisolutions.com
- Dashboard: https://regenaisolutions.com/app/
- Login: https://regenaisolutions.com/app/#/login
- API Keys: https://regenaisolutions.com/app/#/api-keys
- Admin: https://regenaisolutions.com/app/#/admin/users
