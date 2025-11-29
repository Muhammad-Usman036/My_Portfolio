# Quick Start Guide

## 🚀 Getting Started in 5 Minutes

### Step 1: Install Dependencies

**Frontend:**
```bash
npm install
```

**Backend:**
```bash
cd server
npm install
cd ..
```

### Step 2: Set Up MongoDB

**Option A: Local MongoDB**
- Install MongoDB locally
- Make sure MongoDB service is running
- Default connection: `mongodb://localhost:27017/portfolio`

**Option B: MongoDB Atlas (Cloud)**
- Create a free account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Create a cluster and get your connection string
- Update `MONGODB_URI` in `server/.env`

### Step 3: Configure Environment

Create `server/.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

### Step 4: Run the Application

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

### Step 5: Open Your Browser

- Frontend: http://localhost:8080
- Backend API: http://localhost:5000/api

## 🎨 Using Color Schemes

1. Look for the **palette icon** button in the bottom-right corner
2. Click it to see all available color schemes
3. Select any theme to instantly change the entire portfolio
4. Your preference is saved automatically

## 📝 Testing the Contact Form

1. Scroll to the Contact section
2. Fill out the form
3. Submit - the message will be saved to MongoDB
4. Check the backend console for confirmation

## 🛠️ Troubleshooting

**MongoDB Connection Error:**
- Ensure MongoDB is running
- Check your connection string in `.env`
- For Atlas, whitelist your IP address

**Port Already in Use:**
- Change port in `vite.config.ts` (frontend) or `server.js` (backend)
- Update `VITE_API_URL` if you change backend port

**CORS Errors:**
- Make sure backend is running before frontend
- Check that `VITE_API_URL` matches your backend URL

## 📚 Next Steps

- Customize content in component files
- Add your projects via API or directly in `Projects.tsx`
- Modify color schemes in `src/index.css`
- Deploy to production (Vercel, Netlify, Heroku, etc.)

---

Need help? Check the main [README.md](./README.md) for detailed documentation.



