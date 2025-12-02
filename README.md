# Baramulla Runners Club - Website Setup Guide

## 📁 Project Structure

```
Baramulla Runners Club/
├── index.html          # Main HTML file
├── css/
│   └── style.css      # All styles with custom color theme
├── js/
│   └── script.js      # Interactive functionality
├── images/
│   ├── logo.png                    # Club logo (NEEDED)
│   ├── hero-bg.jpg                 # Hero section background (NEEDED)
│   ├── about-placeholder.jpg       # About section image (NEEDED)
│   ├── join-placeholder.jpg        # Join section image (NEEDED)
│   ├── gallery/
│   │   ├── placeholder1.jpg        # Gallery images (NEEDED)
│   │   ├── placeholder2.jpg
│   │   ├── placeholder3.jpg
│   │   ├── placeholder4.jpg
│   │   ├── placeholder5.jpg
│   │   └── placeholder6.jpg
│   └── testimonials/
│       ├── member1.jpg             # Testimonial photos (NEEDED)
│       ├── member2.jpg
│       └── member3.jpg
└── README.md          # This file
```

## 🎨 Color Theme Applied

Your custom color palette has been implemented:

- **Mountain Greens**: `#1a4d2e`, `#2d6a4f`, `#52b788`, `#74c69d`
- **River Blues**: `#023e8a`, `#0077b6`, `#48cae4`, `#90e0ef`, `#06d6a0`
- **Warm Energy**: `#fb8500`, `#ffb703`, `#ffd60a`, `#ffc300`
- **Dark Navy**: `#03045e`, `#1a1a2e`, `#0f0f0f`

## ✅ What's Already Done

1. ✓ Full HTML structure with all sections
2. ✓ Professional CSS with your color theme
3. ✓ Responsive design (mobile, tablet, desktop)
4. ✓ Interactive JavaScript features
5. ✓ Instagram link integrated: https://www.instagram.com/baramulla_runnersclub/
6. ✓ Club tagline: "Run. Connect. Inspire."
7. ✓ Founded: 2025
8. ✓ Professional mission statement

## 📋 What You Need to Provide

### 1. **WhatsApp Group Link**
Replace `YOUR_GROUP_LINK` in `index.html` (appears twice):
- Line ~390: Join Us section
- Line ~444: Contact section

Search for: `https://chat.whatsapp.com/YOUR_GROUP_LINK`

### 2. **Images Required**

#### **Priority 1 - Essential:**
- `logo.png` - Your club logo (transparent PNG recommended)
- `hero-bg.jpg` - Main banner/hero image (1920x1080px recommended)

#### **Priority 2 - Important:**
- `about-placeholder.jpg` - Group photo or club activity (800x600px)
- `join-placeholder.jpg` - Motivational running image (800x600px)

#### **Priority 3 - Gallery:**
- `gallery/placeholder1.jpg` through `placeholder6.jpg` 
  - Running events, group runs, trail photos, etc.
  - Square format recommended (1000x1000px)

#### **Priority 4 - Testimonials:**
- `testimonials/member1.jpg`, `member2.jpg`, `member3.jpg`
  - Member photos (can be circular cropped)
  - 400x400px minimum

### 3. **Testimonials Content**
Update in `index.html` around lines 338-398:
- Member names
- Their testimonial quotes
- Role/description

### 4. **Events Information** (Optional)
Update event details around lines 231-285 in `index.html`:
- Event dates
- Event times
- Specific locations

## 🚀 How to Launch the Website

### **Option 1: Simple Local Testing**
1. Double-click `index.html` to open in your browser

### **Option 2: Live Server (Recommended for Testing)**
1. Open folder in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server" (install extension if needed)

### **Option 3: Deploy Online**
Upload to:
- **GitHub Pages** (free, easy)
- **Netlify** (free, drag & drop)
- **Vercel** (free, professional)
- **Shared hosting** (your domain)

## 📱 Features Included

### Navigation
- Sticky header that shrinks on scroll
- Mobile hamburger menu
- Smooth scrolling to sections
- Active link highlighting

### Sections
1. **Hero** - Eye-catching intro with tagline
2. **About** - Mission, values, stats
3. **Events** - Upcoming runs and activities
4. **Gallery** - Photo showcase with lightbox
5. **Testimonials** - Member stories (auto-sliding carousel)
6. **Join Us** - WhatsApp integration
7. **Contact** - Social media links
8. **Footer** - Quick links and info

### Interactive Features
- Image lightbox with keyboard navigation
- Testimonial carousel (auto-play + manual)
- Scroll animations
- Back-to-top button
- Mobile touch gestures
- Fully responsive

## 🎯 Next Steps - In Order

### **Step 1: Add WhatsApp Link**
1. Get your WhatsApp group invite link
2. Replace `YOUR_GROUP_LINK` in `index.html`

### **Step 2: Add Essential Images**
1. Add `logo.png` to `images/` folder
2. Add `hero-bg.jpg` to `images/` folder
3. Test the website - it should look much better!

### **Step 3: Add Content Images**
1. Add about and join section images
2. Add gallery photos (at least 6)
3. Add testimonial member photos

### **Step 4: Update Testimonials**
1. Replace placeholder names with real members
2. Add their actual testimonials
3. Update their roles/descriptions

### **Step 5: Update Events** (Optional)
1. Add real event dates and times
2. Add specific locations
3. Add event descriptions

### **Step 6: Test Everything**
1. Test on desktop browser
2. Test on mobile device
3. Check all links work
4. Verify WhatsApp link works
5. Test image lightbox
6. Test testimonial slider

### **Step 7: Launch!**
1. Choose hosting platform
2. Upload all files
3. Test live website
4. Share with community!

## 🔧 Easy Customization Tips

### Change Colors
Edit `css/style.css` lines 8-30 (CSS Variables section)

### Add More Gallery Images
1. Add images to `images/gallery/`
2. Copy a gallery-item div in `index.html` (around line 305)
3. Update the image src

### Add More Testimonials
1. Copy a testimonial-card div (around line 343)
2. Update image, text, name

### Update Social Links
Currently configured:
- Instagram: https://www.instagram.com/baramulla_runnersclub/
- WhatsApp: (you need to add)

## 📧 Contact Information

Update the email in `index.html` line 465:
Currently: `info@baramullarunnersclub.com`

## 🎨 Image Specifications

For best results:

| Image Type | Size | Format |
|------------|------|--------|
| Logo | 200x200px | PNG (transparent) |
| Hero Background | 1920x1080px | JPG |
| About/Join Images | 800x600px | JPG |
| Gallery Images | 1000x1000px | JPG |
| Testimonial Photos | 400x400px | JPG |

## ✨ Professional Tips

1. Use high-quality, action-oriented running photos
2. Include diverse group shots showing community
3. Capture Baramulla's beautiful landscapes
4. Show authentic, candid moments
5. Optimize images before uploading (compress for web)

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Verify images are in correct folders
- Check image file extensions (.jpg, .png)

**WhatsApp link not working?**
- Ensure it's a valid invite link
- Test the link separately first

**Layout looks broken?**
- Clear browser cache (Ctrl+F5)
- Check all files are uploaded
- Verify CSS file is loading

## 📞 Ready to Proceed?

Once you provide:
1. WhatsApp group link
2. Essential images (logo, hero)

I can help you:
- Update the HTML with your links
- Optimize images
- Test the website
- Deploy it online
- Add any additional features

Just share what you have, and we'll take it step by step!

---

**Built with ❤️ for Baramulla Runners Club**
*Run. Connect. Inspire.*
