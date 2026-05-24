# Blog With Ali - Frontend Only Blog Website

A complete frontend-only professional blog website built with HTML5, CSS3, and vanilla JavaScript.

## Files Included

- `index.html` - Home page
- `blogs.html` - Blog listing page with search/filter
- `article.html` - Single article page with dynamic post loading by slug
- `about.html` - About page
- `contact.html` - Contact page with validation
- `admin-login.html` - Frontend-only demo admin login
- `admin-dashboard.html` - Demo admin dashboard with localStorage CRUD
- `style.css` - Main styling file
- `script.js` - All JavaScript functionality
- `robots.txt` - Search engine crawling rules
- `sitemap.xml` - Sitemap for public pages
- `assets/images/favicon.svg` - Favicon placeholder

## How to Open the Website

Open `index.html` directly in your browser. For best results, run it through a local server such as VS Code Live Server.

## Demo Admin Login

Open `admin-login.html` manually. The admin link is intentionally not shown in the public navbar.

Demo credentials:

- Email: `admin@blogwithali.com`
- Password: `admin123`

After login, you will be redirected to `admin-dashboard.html`.

Important: This is frontend-only demo protection using `sessionStorage`. It is not real production security. A real admin panel needs backend authentication, database, secure sessions, and server-side route protection.

## Where to Change Website Name

Search for `Blog With Ali` in all HTML files and `script.js`, then replace it with your new website name.

## Where to Change Footer Social Links

Footer social labels and links are inside each HTML file in the footer section. Search for:

- `Facebook - Code Flow Ali`
- `Instagram - Code Flow Ali`
- `YouTube - Code Flow Ali`
- `LinkedIn - Code Flow Ali`
- `GitHub - Code Flow Ali`

Replace the `href="#"` values with your real social URLs.

## Where to Add New Articles Manually

Open `script.js` and add a new object inside the `BLOG_POSTS` array. Each post supports:

- title
- slug
- category
- date
- readTime
- image
- alt
- excerpt
- status
- tags
- seoTitle
- seoDescription
- seoKeywords
- content

You can also add demo posts from the admin dashboard. These will be stored in browser `localStorage`.

## SEO Features Added

Every public page includes:

- Unique meta title
- Unique meta description
- Meta keywords
- Author tag
- Robots tag
- Canonical tag
- Open Graph tags
- Twitter Card tags
- Favicon link
- Schema.org JSON-LD
- Breadcrumb schema
- Semantic HTML5 structure
- One H1 per page
- Descriptive image alt text
- Lazy loading images
- Internal linking
- `robots.txt`
- `sitemap.xml`

The article page also includes BlogPosting schema and updates article SEO data dynamically through JavaScript based on the selected slug.

## How to Deploy

Upload all files to any static hosting service, such as:

- Netlify
- Vercel static deployment
- GitHub Pages
- cPanel public_html

Before deployment, replace `https://blogwithali.example/` in canonical URLs, schema, robots.txt, and sitemap.xml with your real domain.
