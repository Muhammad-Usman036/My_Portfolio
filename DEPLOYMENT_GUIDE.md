# 🚀 Complete Deployment Guide - MERN Portfolio

This guide will help you deploy your portfolio online for FREE using:
- **MongoDB Atlas** (Database) - Free tier
- **Render.com** (Backend) - Free tier
- **Vercel** (Frontend) - Free tier

---

## 📋 Prerequisites

1. GitHub account (free)
2. MongoDB Atlas account (free)
3. Render.com account (free)
4. Vercel account (free)

---

## Step 1: Setup MongoDB Atlas (Database)

### 1.1 Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up for free
3. Choose **FREE (M0) Shared** cluster

### 1.2 Create Database Cluster
1. Choose a cloud provider (AWS recommended)
2. Select a region closest to you
3. Click **Create Cluster** (takes 3-5 minutes)

### 1.3 Setup Database Access
1. Go to **Database Access** (left sidebar)
2. Click **Add New Database User**
3. Choose **Password** authentication
4. Create username and password (SAVE THESE!)
5. Set user privileges to **Read and write to any database**
6. Click **Add User**

### 1.4 Setup Network Access
1. Go to **Network Access** (left sidebar)
2. Click **Add IP Address**
3. Click **Allow Access from Anywhere** (for development)
   - Or add specific IPs for production
4. Click **Confirm**

### 1.5 Get Connection String
1. Go to **Database** (left sidebar)
2. Click **Connect** on your cluster
3. Choose **Connect your application**
4. Copy the connection string (looks like: `mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority`)
5. Replace `<password>` with your actual password
6. Replace `<dbname>` with `portfolio` (or your preferred database name)

**Example:**
```
mongodb+srv://myuser:mypassword123@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
```

---

## Step 2: Prepare Your Code for Deployment

### 2.1 Create Environment Variables File

Create `server/.env.example` (template):
```env
# MongoDB
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority

# Server
PORT=5000
NODE_ENV=production

# Email (Optional - for contact form notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
NOTIFICATION_EMAIL=developer.usmansadiq74@gmail.com
```

### 2.2 Update Frontend API URL

Check `src/lib/api.js` - it should use environment variable:
```javascript
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
```

### 2.3 Create `.env` for Frontend (local development)

Create `.env.local` in root:
```env
VITE_API_URL=http://localhost:5000/api
```

For production, we'll set this in Vercel.

---

## Step 3: Deploy Backend to Render.com

### 3.1 Push Code to GitHub
1. Create a new repository on GitHub
2. Push your code:
```bash
git init
git add .
git commit -m "Initial commit - MERN Portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/portfolio.git
git push -u origin main
```

### 3.2 Deploy on Render
1. Go to: https://render.com
2. Sign up/login with GitHub
3. Click **New +** → **Web Service**
4. Connect your GitHub repository
5. Select your repository

### 3.3 Configure Backend Service
- **Name:** `portfolio-backend` (or any name)
- **Environment:** `Node`
- **Build Command:** `cd server && npm install`
- **Start Command:** `cd server && npm start`
- **Root Directory:** Leave empty (or set to `server` if you want)

### 3.4 Add Environment Variables
Click **Environment** tab and add:
```
MONGODB_URI = mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
PORT = 5000
NODE_ENV = production
SMTP_HOST = smtp.gmail.com
SMTP_PORT = 587
SMTP_SECURE = false
SMTP_USER = your-email@gmail.com
SMTP_PASS = your-app-password
NOTIFICATION_EMAIL = developer.usmansadiq74@gmail.com
```

### 3.5 Deploy
1. Click **Create Web Service**
2. Wait for deployment (5-10 minutes)
3. Copy your backend URL (e.g., `https://portfolio-backend.onrender.com`)

**Note:** Free tier on Render spins down after 15 minutes of inactivity. First request after spin-down takes ~30 seconds.

---

## Step 4: Deploy Frontend to Vercel

### 4.1 Install Vercel CLI (Optional)
```bash
npm install -g vercel
```

### 4.2 Deploy via Vercel Dashboard
1. Go to: https://vercel.com
2. Sign up/login with GitHub
3. Click **Add New Project**
4. Import your GitHub repository
5. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (root of your project)
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### 4.3 Add Environment Variables
Click **Environment Variables** and add:
```
VITE_API_URL = https://portfolio-backend.onrender.com/api
```

### 4.4 Deploy
1. Click **Deploy**
2. Wait for deployment (2-3 minutes)
3. Your site will be live at: `https://your-project.vercel.app`

---

## Step 5: Update CORS Settings (Important!)

### 5.1 Update Backend CORS
In `server/server.js`, make sure CORS allows your frontend domain:

```javascript
app.use(cors({
  origin: [
    'http://localhost:8080',
    'https://your-project.vercel.app',
    'https://your-custom-domain.com'
  ],
  credentials: true
}));
```

Or for development, allow all origins:
```javascript
app.use(cors());
```

### 5.2 Redeploy Backend
After updating CORS, redeploy your backend on Render.

---

## Step 6: Test Your Deployment

1. **Frontend:** Visit your Vercel URL
2. **Test Contact Form:** Submit a test message
3. **Check MongoDB Atlas:** Verify data is saved
4. **Check Email:** Verify you received notification (if email is configured)

---

## Step 7: Custom Domain (Optional)

### 7.1 Add Custom Domain to Vercel
1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Add your domain (e.g., `www.yourname.com`)
4. Follow DNS configuration instructions

### 7.2 Update Environment Variables
Update `VITE_API_URL` in Vercel to use your backend URL.

---

## 🔧 Troubleshooting

### Backend not connecting to MongoDB?
- Check MongoDB Atlas Network Access (allow all IPs)
- Verify connection string is correct
- Check environment variables in Render

### Frontend can't reach backend?
- Verify `VITE_API_URL` is set correctly in Vercel
- Check CORS settings in backend
- Verify backend URL is accessible

### Contact form not working?
- Check backend logs in Render dashboard
- Verify MongoDB connection
- Check email configuration (if using email)

### Build errors?
- Check build logs in Vercel/Render
- Ensure all dependencies are in `package.json`
- Verify Node.js version compatibility

---

## 📝 Quick Checklist

- [ ] MongoDB Atlas cluster created
- [ ] Database user created
- [ ] Network access configured
- [ ] Code pushed to GitHub
- [ ] Backend deployed on Render
- [ ] Environment variables set in Render
- [ ] Frontend deployed on Vercel
- [ ] Environment variables set in Vercel
- [ ] CORS updated in backend
- [ ] Tested contact form
- [ ] Tested all features

---

## 🎉 You're Live!

Your portfolio is now online! Share your Vercel URL with the world.

**Frontend:** `https://your-project.vercel.app`
**Backend:** `https://portfolio-backend.onrender.com`

---

## 💡 Pro Tips

1. **Monitor Backend:** Render free tier spins down after inactivity. Consider upgrading for production.
2. **Email Service:** For production, consider using SendGrid or Mailgun instead of Gmail SMTP.
3. **CDN:** Vercel automatically provides CDN for fast global access.
4. **SSL:** Both Render and Vercel provide free SSL certificates.
5. **Analytics:** Add Google Analytics or Vercel Analytics to track visitors.

---

## 🔄 Updating Your Site

1. Make changes locally
2. Test locally
3. Commit and push to GitHub
4. Vercel and Render will automatically redeploy!

---

**Need Help?** Check the logs in Render/Vercel dashboards for detailed error messages.

