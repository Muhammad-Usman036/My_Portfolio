# 🚀 Quick Start Deployment Guide

## Step-by-Step (15 minutes)

### 1️⃣ Setup MongoDB Atlas (5 min)
1. Go to https://www.mongodb.com/cloud/atlas/register
2. Create free cluster
3. Create database user (save password!)
4. Network Access → Allow from anywhere
5. Get connection string → Replace `<password>` and add `/portfolio` at end

### 2️⃣ Push to GitHub (2 min)
```bash
git init
git add .
git commit -m "Ready for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

### 3️⃣ Deploy Backend on Render (5 min)
1. Go to https://render.com → Sign up with GitHub
2. New → Web Service → Connect your repo
3. Settings:
   - **Name:** `portfolio-backend`
   - **Root Directory:** `server`
   - **Build:** `npm install`
   - **Start:** `npm start`
4. Environment Variables:
   ```
   MONGODB_URI = (your MongoDB connection string)
   PORT = 5000
   NODE_ENV = production
   ```
5. Deploy → Copy backend URL (e.g., `https://portfolio-backend.onrender.com`)

### 4️⃣ Deploy Frontend on Vercel (3 min)
1. Go to https://vercel.com → Sign up with GitHub
2. Add New Project → Import your repo
3. Environment Variable:
   ```
   VITE_API_URL = https://portfolio-backend.onrender.com/api
   ```
4. Deploy → Your site is live!

### 5️⃣ Update CORS (1 min)
1. In Render dashboard → Environment Variables
2. Add: `FRONTEND_URL = https://your-project.vercel.app`
3. Redeploy backend

## ✅ Done! Your portfolio is live!

**Frontend:** `https://your-project.vercel.app`
**Backend:** `https://portfolio-backend.onrender.com`

---

## 📧 Optional: Email Notifications

Add to Render environment variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
NOTIFICATION_EMAIL=developer.usmansadiq74@gmail.com
```

See `server/EMAIL_SETUP.md` for Gmail App Password setup.

---

## 🔄 Updating Your Site

Just push to GitHub:
```bash
git add .
git commit -m "Update portfolio"
git push
```

Vercel and Render auto-deploy! 🎉

