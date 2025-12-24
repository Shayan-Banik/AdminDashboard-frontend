# 🎯 Admin Dashboard – React + Tailwind

A modern, fully responsive admin dashboard built with **React** and **Tailwind CSS**.  
Perfect for SaaS applications, internal tools, analytics panels, and dashboards.

**[Live Demo](#) • [Documentation](#quick-start) • [Download](#-download-the-project)**

---

## 📸 Features

✨ **Fully Responsive Design**
- Desktop, tablet, and mobile optimized
- Mobile drawer/sidebar that slides in smoothly
- Adaptive header and content layout

📊 **Dashboard Components**
- Key statistics cards with trends
- Interactive charts and graphs
- Data tables with status indicators
- Activity feed and notifications

🎨 **Modern UI/UX**
- Clean, professional design
- Dark mode support (theme toggle ready) -> @custom-variant dark (&:where(.dark, .dark *));
- Smooth animations and transitions
- Accessible components with proper spacing

🛠️ **Developer-Friendly**
- Modular, reusable React components
- Tailwind CSS for easy customization
- Lucide React icons (1000+ icons)
- Recharts for data visualization
- Vite for fast development

---

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18+** | UI framework |
| **Vite** | Build tool & dev server |
| **Tailwind CSS v4** | Utility-first styling |
| **Lucide React** | Icon library |
| **Recharts** | Data visualization |

---

## 📥 Download the Project

### Option 1: Download ZIP File (Easiest)

1. **Click the green "Code" button** on the GitHub repository
2. **Select "Download ZIP"**
3. **Extract** the ZIP file to your desired location
4. **Open terminal** in the extracted folder

```bash
# Navigate to the project directory
cd Admin-Dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Option 2: Clone with Git

```bash
# Clone the repository
git clone https://github.com/YOUR-USERNAME/Admin-Dashboard.git

# Navigate to project
cd Admin-Dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

### Option 3: Fork & Clone

1. **Click "Fork"** on GitHub (top right corner)
2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/Admin-Dashboard.git
   ```
3. **Follow Option 2 steps above**

---

## ⚡ Quick Start

### Prerequisites
- **Node.js** v16+ ([Download](https://nodejs.org/))
- **npm** (comes with Node.js)

### Installation Steps

**Step 1: Extract & Navigate**
```bash
cd Admin-Dashboard
```

**Step 2: Install Dependencies**
```bash
npm install
```

This installs all required packages:
- react, react-dom
- lucide-react (icons)
- recharts (charts)
- tailwindcss (styling)

**Step 3: Start Development Server**
```bash
npm run dev
```

**Step 4: Open in Browser**
- Local: `http://localhost:5174` (or next available port)
- Network: Your machine IP (for mobile testing)

---

## 📁 Project Structure

```
Admin-Dashboard/
├── src/
│   ├── components/
│   │   ├── Layout/
│   │   │   ├── Header.jsx          # Top navigation bar
│   │   │   └── Sidebar.jsx         # Side navigation (mobile drawer)
│   │   └── Dashboard/
│   │       ├── Dashboard.jsx       # Main dashboard container
│   │       ├── GridCard.jsx        # Statistics cards
│   │       ├── Chart.jsx           # Chart components
│   │       ├── RevenueChart.jsx    # Revenue graph
│   │       ├── SalesChart.jsx      # Sales breakdown
│   │       ├── TableSection.jsx    # Data tables
│   │       └── Activity.jsx        # Activity feed
│   ├── context/
│   │   └── ThemeContext.jsx        # Dark mode context (optional)
│   ├── App.jsx                     # Main app component
│   ├── main.jsx                    # React entry point
│   ├── index.css                   # Global styles
│   └── assets/                     # Images & SVGs
├── index.html                      # HTML template
├── package.json                    # Dependencies
├── vite.config.js                  # Vite configuration
├── tailwind.config.js              # Tailwind configuration
└── README.md                       # This file
```

---

## 🎮 How to Use

### Running the Application

**Development Mode** (with hot reload):
```bash
npm run dev
```

**Production Build**:
```bash
npm run build
```

**Preview Production Build**:
```bash
npm run preview
```

### Testing Responsive Design

**Desktop Browser:**
- Open `http://localhost:5174`
- Press `F12` to open DevTools
- Click device toggle icon (top left) to switch to mobile view

**Real Mobile Device:**
1. Find your computer's local IP:
   - **Mac/Linux**: `ifconfig` or `ip addr`
   - **Windows**: `ipconfig`
2. On your phone (same WiFi): Visit `http://YOUR_IP:5174`

---

## 🎨 Customization Guide

### Change Colors & Branding

**Edit `tailwind.config.js`:**
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#your-color',
        secondary: '#your-color',
      }
    }
  }
}
```

### Modify Sidebar Menu

**Edit `src/components/Layout/Sidebar.jsx`:**
```javascript
const menuItems = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  // Add more menu items...
];
```

### Update Dashboard Content

**Edit `src/components/Dashboard/Dashboard.jsx`:**
```javascript
const Dashboard = () => {
  return (
    <div className='space-y-6'>
      {/* Add your custom components here */}
    </div>
  )
}
```

### Change Theme/Colors

The dashboard supports dark mode. Check `src/context/ThemeContext.jsx` for theme implementation.

---

## 📦 Available Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint (if configured) |

---

## 🔧 Key Components

### Header Component
- **Location**: `src/components/Layout/Header.jsx`
- **Features**: Search bar, notifications, theme toggle, user menu
- **Responsive**: Menu button on mobile, full bar on desktop

### Sidebar Component
- **Location**: `src/components/Layout/Sidebar.jsx`
- **Features**: Collapsible on desktop, drawer on mobile
- **Mobile**: Slides in from left, closes on backdrop click

### Dashboard Component
- **Location**: `src/components/Dashboard/Dashboard.jsx`
- **Features**: Grid layouts, responsive cards, charts, tables

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Usage |
|-----------|-------|-------|
| **Mobile** | < 640px | Small phones |
| **sm** | ≥ 640px | Large phones |
| **md** | ≥ 768px | Tablets |
| **lg** | ≥ 1024px | Desktops |
| **xl** | ≥ 1280px | Large desktops |
| **2xl** | ≥ 1536px | Ultra-wide screens |

The dashboard is **mobile-first** and scales beautifully across all devices.

---

## 🎯 Tips & Best Practices

✅ **Do's:**
- Keep components modular and reusable
- Use Tailwind classes for consistent styling
- Test on real devices, not just browser emulation
- Keep the color scheme consistent

❌ **Don'ts:**
- Don't mix inline styles with Tailwind
- Don't make components too large
- Don't hardcode colors (use theme)
- Don't skip responsive design checks

---

## � Troubleshooting

### Port 5174 Already in Use
```bash
# Vite will automatically try the next available port
npm run dev
# Check the terminal for the new URL
```

### Styles Not Loading
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install
npm run dev
```

### Mobile Menu Not Working
- Make sure you're on the latest version
- Check browser console for errors (`F12`)
- Clear browser cache (`Ctrl+Shift+Delete`)

### Build Errors
```bash
# Check for syntax errors
npm run build

# Try clearing cache
npm cache clean --force
npm install
npm run build
```

---

## 📚 Learn More

- **React Documentation**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com/docs
- **Vite Documentation**: https://vitejs.dev/guide/
- **Lucide Icons**: https://lucide.dev
- **Recharts**: https://recharts.org

---

## 🤝 Contributing

Found a bug or want to improve? Feel free to:
1. **Fork** the repository
2. **Create** a feature branch
3. **Make** your changes
4. **Submit** a pull request

---

## 📄 License

This project is open source and available under the **MIT License**.

---

## � Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
2. **Go to** https://vercel.com
3. **Connect** your GitHub account
4. **Import** this repository
5. **Click Deploy** ✨

### Deploy to Netlify

1. **Build the project**: `npm run build`
2. **Go to** https://netlify.com
3. **Drag & drop** the `dist` folder
4. **Done!** Your site is live

### Deploy to GitHub Pages

```bash
npm run build
# Follow GitHub Pages deployment guide
```

---

## 💬 Support & Questions

- **GitHub Issues**: Report bugs and request features
- **Discussions**: Ask questions and share ideas
- **Email**: Contact the maintainer

---

## ⭐ If you like this project, please star it on GitHub!

Your support helps others discover this dashboard template.

---

**Made with ❤️ by [Your Name/Team]**

Last Updated: December 2025
