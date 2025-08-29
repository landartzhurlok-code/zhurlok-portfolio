
# Zhurunova & Lokatyr — Portfolio (GitHub Pages)

Minimal static portfolio template.

## How to deploy (quick)
1. Create a new public GitHub repository (e.g., `zhurlok-portfolio`).
2. Upload `index.html` to the root of the repo (drag & drop in GitHub → Commit).
3. Settings → Pages → Build and deployment → Source: **Deploy from a branch**; Branch: **main**; Folder: **/** (root).
4. Wait for the green check → Your site lives at `https://<your-username>.github.io/zhurlok-portfolio/`.

## Custom domain
- Settings → Pages → Custom domain: type `zhurlok.com`, Save.
- Add DNS:
  - A records for `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - CNAME for `www` → `<your-username>.github.io`
- Toggle **Enforce HTTPS** once the certificate is issued.
