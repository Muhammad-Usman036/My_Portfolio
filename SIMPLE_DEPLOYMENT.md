# 🚀 Simple Step-by-Step Deployment Guide

**Don't worry! I'll guide you through each step. It's easier than you think! 😊**

---

## ✅ Step 1: You've Already Done This! (MongoDB Atlas)

Great! You already have MongoDB Atlas set up. That's the hardest part! 🎉

---

## 📝 Step 2: Push Your Code to GitHub (5 minutes)

### 2.1 Create GitHub Repository
1. Go to: https://github.com/new
2. Repository name: `portfolio` (or any name you like)
3. Make it **Public** (free deployment requires public repo)
4. Click **Create repository**

### 2.2 Push Your Code
Open terminal/command prompt in your project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Ready for deployment"

# Add your GitHub repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**That's it! Your code is now on GitHub! ✅**

---

## 🌐 Step 3: Deploy Backend on Render.com (10 minutes)

### 3.1 Sign Up
1. Go to: https://render.com
2. Click **Get Started for Free**
3. Sign up with **GitHub** (click "Continue with GitHub")
4. Authorize Render to access your GitHub

### 3.2 Create Web Service
1. Click **New +** button (top right)
2. Click **Web Service**
3. Click **Connect account** next to GitHub (if not connected)
4. Find and select your `portfolio` repository
5. Click **Connect**

### 3.3 Configure Backend
Fill in these settings:

- **Name:** `portfolio-backend` (or any name)
- **Region:** Choose closest to you
- **Branch:** `main`
- **Root Directory:** `server` ⚠️ **IMPORTANT!**
- **Runtime:** `Node`
- **Build Command:** `npm install`
- **Start Command:** `npm start`
- **Instance Type:** **Free**

### 3.4 Add Environment Variables
Scroll down to **Environment Variables** section and click **Add Environment Variable** for each:

1. **MONGODB_URI**
   - Key: `MONGODB_URI`
   - Value: (Copy from your `.env` file - the MongoDB connection string)

2. **PORT**
   - Key: `PORT`
   - Value: `5000`

3. **NODE_ENV**
   - Key: `NODE_ENV`
   - Value: `production`

4. **FRONTEND_URL** (We'll add this later after deploying frontend)
   - Key: `FRONTEND_URL`
   - Value: (Leave empty for now, we'll update after Step 4)

### 3.5 Deploy!
1. Scroll down and click **Create Web Service**
2. Wait 5-10 minutes for deployment
3. **Copy your backend URL** (looks like: `https://portfolio-backend.onrender.com`)
   - You'll see it at the top after deployment completes
   - **SAVE THIS URL!** You'll need it in Step 4

**✅ Backend is now live!**

---

## 🎨 Step 4: Deploy Frontend on Vercel (5 minutes)

### 4.1 Sign Up
1. Go to: https://vercel.com
2. Click **Sign Up**
3. Sign up with **GitHub** (click "Continue with GitHub")
4. Authorize Vercel

### 4.2 Import Project
1. Click **Add New...** → **Project**
2. Find your `portfolio` repository
3. Click **Import**

### 4.3 Configure Frontend
Vercel will auto-detect Vite, but verify:

- **Framework Preset:** `Vite` (should be auto-detected)
- **Root Directory:** `./` (leave as is)
- **Build Command:** `npm run build` (should be auto-filled)
- **Output Directory:** `dist` (should be auto-filled)
- **Install Command:** `npm install` (should be auto-filled)

### 4.4 Add Environment Variable
1. Click **Environment Variables** section
2. Click **Add** button
3. Add:
   - **Key:** `VITE_API_URL`
   - **Value:** `https://portfolio-backend.onrender.com/api`
     - (Replace with YOUR backend URL from Step 3.5)

### 4.5 Deploy!
1. Click **Deploy** button
2. Wait 2-3 minutes
3. **Your portfolio is LIVE!** 🎉
4. Copy your frontend URL (looks like: `https://portfolio-xxxxx.vercel.app`)

**✅ Frontend is now live!**

---

## 🔄 Step 5: Update Backend CORS (2 minutes)

### 5.1 Go Back to Render
1. Go to your Render dashboard
2. Click on your `portfolio-backend` service
3. Go to **Environment** tab

### 5.2 Add Frontend URL
1. Click **Add Environment Variable**
2. Add:
   - **Key:** `FRONTEND_URL`
   - **Value:** `https://portfolio-xxxxx.vercel.app`
     - (Replace with YOUR frontend URL from Step 4.5)
3. Click **Save Changes**
4. Render will automatically redeploy

**✅ Everything is connected!**

---

## 🧪 Step 6: Test Your Live Portfolio

1. Visit your frontend URL (from Step 4.5)
2. Test the contact form:
   - Fill out the form
   - Submit it
   - Check MongoDB Atlas to see if data was saved
3. Test resume download
4. Test all features

**✅ Your portfolio is fully deployed and working!**

---

## 📧 Optional: Add Email Notifications

If you want email notifications when someone contacts you:

1. Go to Render dashboard → Your backend service → Environment tab
2. Add these environment variables:

```
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-gmail-app-password
NOTIFICATION_EMAIL = developer.usmansadiq74@gmail.com
```

See `server/EMAIL_SETUP.md` for Gmail App Password setup.

---

## 🆘 Troubleshooting

### Backend not working?
- Check Render logs (click on your service → Logs tab)
- Verify MongoDB_URI is correct
- Make sure Root Directory is set to `server`

### Frontend can't connect to backend?
- Verify `VITE_API_URL` in Vercel matches your Render backend URL
- Check CORS settings (should be automatic now)
- Make sure backend URL ends with `/api`

### Contact form not working?
- Check Render logs for errors
- Verify MongoDB connection string is correct
- Check MongoDB Atlas Network Access (should allow all IPs)

---

## ✅ Checklist

- [ ] Code pushed to GitHub
- [ ] Backend deployed on Render
- [ ] Environment variables added to Render
- [ ] Backend URL copied
- [ ] Frontend deployed on Vercel
- [ ] VITE_API_URL set in Vercel
- [ ] Frontend URL copied
- [ ] FRONTEND_URL added to Render
- [ ] Tested contact form
- [ ] Everything working! 🎉

---

## 🎉 You're Done!

Your portfolio is now live on the internet! Share your Vercel URL with the world!

**Frontend:** `https://your-project.vercel.app`
**Backend:** `https://portfolio-backend.onrender.com`

---

## 💡 Pro Tips

1. **Auto-Deploy:** Every time you push to GitHub, both Vercel and Render will automatically redeploy!
2. **Free Tier Limits:**
   - Render: Spins down after 15 min inactivity (first request takes ~30 sec)
   - Vercel: Unlimited requests, very fast
3. **Custom Domain:** You can add your own domain later in Vercel settings

---

**Need help?** Check the logs in Render/Vercel dashboards if something doesn't work!

