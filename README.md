# Abahoni Club - Durgotsov 2026

A static, fully responsive single-page website for **Abahoni Club** featuring the upcoming event **Durgotsov 2026**. This website is built with pure HTML, CSS, and JavaScript (no build step required) and is ready to deploy to GitHub Pages.

## 📁 Project Structure

```
abahoni/
├── index.html          # Main HTML file
├── styles.css          # Custom stylesheet
├── script.js           # JavaScript for interactivity
├── assets/             # Images and static assets
│   ├── logo.png        # Club logo (replace with your logo)
│   ├── logo.svg        # SVG logo placeholder (alternative format)
│   └── hero.jpg        # Hero background image (optional, replace if needed)
├── README.md           # This file
└── CNAME               # Custom domain configuration (optional)
```

## 🚀 Quick Start

1. **Clone or download** this repository
2. **Replace placeholder content** in `index.html`:
   - Update logo path in the navigation
   - Update event date badge text
   - Update headline and description text
   - Update address information
3. **Replace placeholder images** in the `assets/` folder:
   - `logo.png` or `logo.svg` - Your club logo (recommended: 200x60px or similar)
     - A simple SVG placeholder is included (`logo.svg`)
     - If logo image fails to load, the site will display a text logo
   - `hero.jpg` - Hero background image (optional, recommended: 1920x1080px)
     - The hero section uses CSS gradients by default, so this is optional
4. **Test locally** by opening `index.html` in a web browser
5. **Deploy to GitHub Pages** (see deployment instructions below)

## 📝 Content to Replace

### In `index.html`:

1. **Logo** (line ~45):
   ```html
   <img src="assets/logo.png" alt="Abahoni Club Logo" ...>
   ```
   Replace `assets/logo.png` with your logo path or remove the image tag if using text logo.

2. **Event Date Badge** (line ~95):
   ```html
   <span>Durgotsov — 2026</span>
   ```
   Update the date or event name as needed.

3. **Headline** (line ~100):
   ```html
   <h1 class="hero-title">
       Abahoni Club Presents — <span class="highlight">Durgotsov 2026</span>
   </h1>
   ```
   Update the headline text.

4. **Description** (line ~106):
   ```html
   <p class="hero-description">
       Join us in celebrating culture, community, and service at <strong>Surjo Nogor, Alipurdurar, West Bengal, India</strong>.
   </p>
   ```
   Update the description and address.

5. **Structured Data** (line ~32):
   Update the JSON-LD structured data with your actual event dates:
   ```json
   "startDate": "2026-10-01",
   "endDate": "2026-10-10",
   ```

6. **Open Graph Meta Tags** (lines ~18-26):
   Update the Open Graph image URL with your actual image URL after deployment.

### In `styles.css`:

- Update colors in CSS variables (lines ~10-25) if you want to change the color scheme
- Update font families if you prefer different fonts

### In `script.js`:

- No changes needed unless you want to customize functionality

## 🎨 Features

- ✅ **Fully Responsive** - Mobile-first design that works on all devices
- ✅ **Dark/Light Theme Toggle** - Theme preference saved in localStorage
- ✅ **Smooth Scrolling** - Smooth scroll animations for anchor links
- ✅ **Accessible** - Semantic HTML, ARIA attributes, keyboard navigation
- ✅ **SEO Optimized** - Meta tags, Open Graph tags, JSON-LD structured data
- ✅ **No Build Step** - Pure HTML, CSS, and JavaScript
- ✅ **CDN Libraries Only** - Google Fonts, Font Awesome icons
- ✅ **Fast Loading** - Lightweight and optimized

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (hamburger menu)
- **Tablet**: 768px - 1023px
- **Desktop**: ≥ 1024px

## 🌐 Deployment to GitHub Pages

### Method 1: Using GitHub Web Interface

1. **Create a new repository** on GitHub (e.g., `abahoni-club`)
2. **Upload all files** to the repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `assets/` folder (with your images)
   - `README.md`
3. **Go to Repository Settings** → **Pages**
4. **Select source branch** (usually `main` or `master`)
5. **Select folder** (`/root` or `/docs` if using docs folder)
6. **Click Save**
7. **Your site will be available at**: `https://[username].github.io/[repository-name]/`

### Method 2: Using Git Command Line

1. **Initialize git repository**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Abahoni Club website"
   ```

2. **Create repository on GitHub** and get the repository URL

3. **Add remote and push**:
   ```bash
   git remote add origin https://github.com/[username]/[repository-name].git
   git branch -M main
   git push -u origin main
   ```

4. **Enable GitHub Pages** in repository settings (Settings → Pages)

5. **Your site will be live** at: `https://[username].github.io/[repository-name]/`

## 🔧 Custom Domain Setup

To use a custom domain (e.g., `abahoniclub.com`):

1. **Create a `CNAME` file** in the root of your repository:
   ```
   abahoniclub.com
   www.abahoniclub.com
   ```

2. **Configure DNS** with your domain provider:
   - Add a `CNAME` record:
     - Name: `@` (or `www`)
     - Value: `[username].github.io`
   - Or add `A` records pointing to GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

3. **Enable custom domain** in GitHub Pages settings:
   - Go to Repository Settings → Pages
   - Enter your custom domain in the "Custom domain" field
   - Check "Enforce HTTPS" (after DNS propagates)

4. **Wait for DNS propagation** (can take up to 48 hours)

## 📦 Dependencies

This project uses the following CDN resources:

- **Google Fonts**: Inter and Poppins fonts
- **Font Awesome**: Icons (version 6.4.0)
- No other dependencies required

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📧 Contact

For questions or support, please contact Abahoni Club.

---

**Built with ❤️ for Abahoni Club - Durgotsov 2026**
