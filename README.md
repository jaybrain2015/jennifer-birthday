# 🎉 Birthday Web Page for Jennifer

A beautiful, modern birthday celebration website with confetti animations, music toggle, and interactive surprise modal.

## ✨ Features

- **Stunning Design**: Modern glassmorphism effects with vibrant gradients
- **Confetti Animation**: Particle system that triggers on page load and surprise button
- **Background Music Toggle**: Interactive music player with on/off control
- **Surprise Modal**: Special message revealed with button click
- **Responsive Design**: Works perfectly on all devices
- **Premium Aesthetics**: Smooth animations and micro-interactions

## 🚀 Quick Start

### Local Testing

1. Open `index.html` in your browser, or
2. Run a local server:
   ```bash
   python3 -m http.server 8090
   ```
   Then visit: `http://localhost:8090`

### Add Background Music (Optional)

1. Download a birthday music MP3 file
2. Rename it to `birthday-music.mp3`
3. Place it in the same directory as `index.html`
4. The music toggle will work automatically!

## 🌐 Deployment Options

### Option 1: GitHub Pages (Recommended)

1. Create a new repository on GitHub
2. Upload all files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at: `https://[username].github.io/[repo-name]`

**Custom domain example**: `happy-bday-jenifer.github.io`

### Option 2: Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```
2. Deploy:
   ```bash
   cd /home/john/jenifer
   vercel
   ```
3. Follow the prompts
4. Your site will be live at: `https://[project-name].vercel.app`

### Option 3: Netlify

1. Install Netlify CLI:
   ```bash
   npm i -g netlify-cli
   ```
2. Deploy:
   ```bash
   cd /home/john/jenifer
   netlify deploy --prod
   ```
3. Your site will be live at: `https://[project-name].netlify.app`

## 📁 Project Structure

```
jenifer/
├── index.html          # Main HTML structure
├── style.css           # Design system and styles
├── script.js           # Interactive functionality
├── birthday-photo-1.jpg # Birthday celebration photo
├── birthday-photo-2.jpg # Birthday cake photo
├── birthday-music.mp3  # Background music (add your own)
├── README.md           # This file
└── MUSIC_README.md     # Music setup instructions
```

## 🎨 Customization

### Change the Name

Edit `index.html` line 29:
```html
<span class="name-highlight">Jennifer</span>
```

### Update the Message

Edit `index.html` lines 35-39 to customize the birthday message.

### Change Colors

Edit `style.css` color variables (lines 8-13) in the `:root` section.

### Add More Photos

1. Add images to the project folder
2. Update `index.html` in the photo gallery section (lines 42-50)

## 🎭 Features Breakdown

### Confetti Animation
- Canvas-based particle system
- Triggers on page load and surprise button
- Customizable particle count and colors

### Music Player
- Toggle on/off with visual feedback
- Smooth fade in/out
- Works with any MP3 file

### Surprise Modal
- Smooth animations
- Keyboard accessible (ESC to close)
- Click outside to dismiss

## 🖥️ Browser Compatibility

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 📱 Mobile Responsive

The website is fully responsive and looks great on:
- 📱 Phones
- 📱 Tablets  
- 💻 Laptops
- 🖥️ Desktops

## 🎁 Perfect For

- Birthday celebrations
- Special occasions
- Personalized messages
- Online greetings

---

Made with ❤️ for Jennifer's special day! 🎂✨
