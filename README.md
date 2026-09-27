# Chamcha Restaurant — Demo Website

A custom-coded, static demo website for Chamcha Restaurant (G-9 Markaz / Karachi Company, Islamabad). Plain HTML5, CSS3 and vanilla JavaScript — no frameworks, no WordPress, no build step required.

## Structure

```
chamcha-restaurant/
├── index.html        Home
├── menu.html          Full menu with category filtering
├── about.html         About
├── gallery.html        Gallery + lightbox
├── contact.html        Contact & location
├── css/style.css       All styling
├── js/data.js          Editable content: menu items, gallery photos, contact info
├── js/script.js        Interactions (nav, filters, lightbox, animations)
├── favicon/favicon.svg
└── README.md
```

## Deploying (GitHub → Vercel)

1. Push this folder to a new GitHub repository.
2. In Vercel: **New Project → Import** the repository.
3. Framework preset: **Other** (static site). No build command, no output directory override needed — it will serve the files as-is.
4. Deploy. Done.

You can also drag-and-drop the folder into Vercel's dashboard for a one-off preview deploy.

## Replacing demo content

Everything an owner is likely to change lives in **`js/data.js`**:

- `menuData` — menu items, categories, descriptions, images, and (optional) demo prices.
- `galleryData` — gallery photos and captions.
- `contactData` — phone, WhatsApp, Instagram, hours, address detail, Google Maps link.

Update the values there and the change appears everywhere it's used across the site — no HTML editing required.

### Images

All photography right now is temporary stock photography for demo purposes only (see inline `alt` text noting "Demo photo"). To go live:

1. Add real photos to `assets/images/`.
2. Update the `img` URLs in `js/data.js` (and the hero image in `index.html`) to point to the new local files, e.g. `assets/images/chicken-karahi.jpg`.
3. Replace the logo files in `assets/logo/` if a refined/vector version of the wordmark is produced later — the current logo is inline SVG within each page's `<nav>` and `<footer>`.

### Location

Add the real address, Google Maps embed/link, and coordinates in `contactData.mapsUrl` and `contactData.addressDetail` in `js/data.js`.

### Prices

Prices are hidden by default (`showPrice: false` on each menu item) per the demo brief. To show demo prices, set `showPrice: true` and fill in `price` for an item — it will render as a clearly labeled "Demo price" tag.

## Notes

- No backend, database or CMS — fully static, fast, and free to host.
- Built mobile-first; test the mobile menu, filters and lightbox on a phone before presenting.
- All demo facts (history, awards, exact address) were intentionally left as clearly-labeled placeholders rather than invented.
