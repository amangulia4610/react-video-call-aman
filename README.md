# React Video Calling App

A simple, modern video meeting app built with React, Vite, and [ZEGOCLOUD UIKit](https://www.zegocloud.com/uikit). Instantly create or join video rooms and connect with your friends or team!

## Features

- 🚀 Start a new video meeting with one click
- 🔗 Join an existing meeting using a Room ID
- ⚡ Fast, responsive UI with Vite and React
- 📦 Deployable to GitHub Pages

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

### 2. Install dependencies

```bash
npm install
```

### 3. Run locally

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Deployment (GitHub Pages)

1. **Set the `base` in `vite.config.js`**  
   Make sure your `vite.config.js` contains:
   ```js
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

2. **Add deploy scripts to `package.json`:**
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. **Deploy:**
   ```bash
   npm run deploy
   ```

Your app will be live at:  
`https://your-username.github.io/your-repo-name/`

---

## How It Works

- **Home Page:**  
  - Click "✨ Start a New Meeting" to generate a unique room and join instantly.
  - Enter a Room ID and click "🚀 Join Meeting" to join an existing room.

- **Room Page:**  
  - Video meeting is powered by ZEGOCLOUD UIKit.
  - Share the meeting link with others to join the same room.
  - Click "Back to Home" to return to the main page.

---

## Customization

- To use your own ZEGOCLOUD credentials, update `appId` and `serverSecret` in `src/components/Room.jsx`.
- You can further style the app by editing `src/index.css`.

---

## License

MIT

---

**Made with ❤️ using React, Vite, and