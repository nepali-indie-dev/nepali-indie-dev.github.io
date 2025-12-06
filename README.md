# Nepali Indie Dev - App Showcase

A static website for showcasing indie app products with individual privacy policies and terms of service pages.

## Project Structure

```
nepali-indie-dev/
├── index.html              # Main showcase page
├── styles.css              # Shared stylesheet
├── app-example/            # Example app directory
│   ├── index.html          # App details page (optional)
│   ├── privacy-policy.html # Privacy policy
│   └── terms-of-service.html # Terms of service
└── README.md
```

## URL Structure

The website follows this URL structure for each app:
- Main site: `https://nepali-indie-dev.github.io/`
- App details: `https://nepali-indie-dev.github.io/app-name/`
- Privacy Policy: `https://nepali-indie-dev.github.io/app-name/privacy-policy.html`
- Terms of Service: `https://nepali-indie-dev.github.io/app-name/terms-of-service.html`

## Adding a New App

Follow these steps to add a new app to your showcase:

### 1. Create App Directory

Create a new directory with your app's name (use lowercase and hyphens):

```bash
mkdir your-app-name
```

### 2. Copy Template Files

Copy the template files from `app-example` to your new app directory:

```bash
cp app-example/privacy-policy.html your-app-name/
cp app-example/terms-of-service.html your-app-name/
cp app-example/index.html your-app-name/  # Optional
```

### 3. Customize the Files

Edit each file in your new app directory:

- Update the `<title>` tags
- Replace "App Example" with your app's name
- Update the content in privacy policy and terms of service
- Add your contact email
- Update the "Last updated" date

### 4. Add App to Main Page

Edit `index.html` and add a new app card in the `apps-grid` section:

```html
<article class="app-card">
    <div class="app-icon">
        <img src="your-app-name/icon.png" alt="Your App Name Icon" onerror="this.style.display='none'">
    </div>
    <h3>Your App Name</h3>
    <p class="app-description">A brief description of what your app does.</p>
    <div class="app-links">
        <a href="your-app-name/" class="btn btn-primary">Learn More</a>
        <a href="your-app-name/privacy-policy.html" class="btn btn-secondary">Privacy Policy</a>
        <a href="your-app-name/terms-of-service.html" class="btn btn-secondary">Terms of Service</a>
    </div>
</article>
```

### 5. Add App Icon (Optional)

Place an 80x80 icon image in your app directory:

```
your-app-name/icon.png
```

## Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub named `nepali-indie-dev.github.io`
2. Push your code to the repository:

```bash
git add .
git commit -m "Initial commit: App showcase website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/nepali-indie-dev.github.io.git
git push -u origin main
```

### Enable GitHub Pages

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select "main" branch
4. Click "Save"
5. Your site will be published at `https://nepali-indie-dev.github.io/`

### Updates

After making changes, push to GitHub:

```bash
git add .
git commit -m "Add new app / Update content"
git push
```

GitHub Pages will automatically rebuild and deploy your changes.

## Customization

### Colors and Branding

Edit [styles.css](styles.css) to customize:
- Header gradient colors (line 20)
- Button colors (lines 139-163)
- App icon background (line 91)

### Layout

The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## Legal Templates

The privacy policy and terms of service templates provided are generic examples. You should:

1. Review them with a legal professional
2. Customize them for your specific app and jurisdiction
3. Add your contact information
4. Update the "Last updated" date when you make changes

## Support

For issues or questions about this website template, please open an issue in the repository.

## License

This template is free to use for your indie app showcase.
