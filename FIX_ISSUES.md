# 🔧 Fix Your Issues - Step by Step

## Issue 1: Backend "Cannot GET /" ✅

**This is NORMAL!** The backend doesn't have a root route.

**Test if backend is working:**
- Go to: http://localhost:5000/api/health
- You should see: `{"success":true,"message":"Server is running"}`
- If you see this, backend is working perfectly! ✅

---

## Issue 2: Frontend "Connection Refused" ❌

**This means frontend server is NOT running.**

### Fix: Start the Frontend Server

**Open a NEW terminal window** (keep backend running) and run:

```bash
npm run dev
```

**Wait for this message:**
```
VITE v5.x.x  ready in xxx ms

➜  Local:   http://localhost:8080/
```

**Then open:** http://localhost:8080

---

## ✅ Complete Setup Checklist

### Terminal 1 - Backend (Should already be running)
```bash
cd server
npm run dev
```
✅ Should show: `Server running on port 5000`

### Terminal 2 - Frontend (You need to start this!)
```bash
npm run dev
```
✅ Should show: `Local: http://localhost:8080/`

### Test URLs:
- ✅ Backend API: http://localhost:5000/api/health
- ✅ Frontend: http://localhost:8080

---

## 🚨 Still Not Working?

### Check if ports are in use:
```bash
# Windows
netstat -ano | findstr :5000
netstat -ano | findstr :8080

# Mac/Linux
lsof -i :5000
lsof -i :8080
```

### Kill processes if needed:
```bash
# Windows - Replace PID with number from netstat
taskkill /PID <PID> /F

# Mac/Linux - Replace PID with number from lsof
kill -9 <PID>
```

### Check if dependencies are installed:
```bash
# In root folder
npm install

# In server folder
cd server
npm install
```

---

## 📝 Quick Test Commands

**Test Backend:**
```bash
curl http://localhost:5000/api/health
```

**Test Frontend:**
- Just open http://localhost:8080 in browser
- Should see your portfolio

---

**Need more help?** Make sure both terminals are running!


