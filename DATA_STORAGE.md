# 📊 Where is Backend Data Stored?

## 🗄️ Database: MongoDB

All backend data is stored in **MongoDB** database.

### Database Details:

**Database Name:** `portfolio`

**Collections (Tables):**
1. **`contacts`** - Stores all contact form submissions
2. **`projects`** - Stores project data (if you add projects via API)

---

## 📍 Where is MongoDB?

### Option 1: Local MongoDB (If installed locally)

**Location:**
- **Windows:** Usually at `C:\Program Files\MongoDB\Server\[version]\data\db\`
- **Mac/Linux:** Usually at `/data/db/` or `/usr/local/var/mongodb/`

**Connection String in your `.env`:**
```
MONGODB_URI=mongodb://localhost:27017/portfolio
```

**What this means:**
- `localhost:27017` = Your local MongoDB server
- `portfolio` = Database name

---

### Option 2: MongoDB Atlas (Cloud - Free)

**Location:** Cloud servers (managed by MongoDB)

**Connection String in your `.env`:**
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

**What this means:**
- Data is stored on MongoDB's cloud servers
- `portfolio` = Database name
- Accessible from anywhere with internet

---

## 👀 How to View Your Data

### Method 1: MongoDB Compass (Recommended - GUI Tool)

1. **Download MongoDB Compass:**
   - https://www.mongodb.com/try/download/compass
   - Free GUI tool to view/edit MongoDB data

2. **Connect:**
   - **Local:** `mongodb://localhost:27017`
   - **Atlas:** Use your connection string from `.env`

3. **View Data:**
   - Select `portfolio` database
   - Click on `contacts` collection
   - See all contact form submissions!

---

### Method 2: MongoDB Shell (Command Line)

**Open terminal and run:**
```bash
# Connect to local MongoDB
mongosh

# Or connect to specific database
mongosh mongodb://localhost:27017/portfolio
```

**Commands:**
```javascript
// Show databases
show dbs

// Use portfolio database
use portfolio

// Show collections
show collections

// View all contacts
db.contacts.find().pretty()

// Count contacts
db.contacts.countDocuments()

// View specific contact
db.contacts.findOne()
```

---

### Method 3: Via API (Programmatic)

**Get all contacts:**
```bash
curl http://localhost:5000/api/contact
```

**Or in browser:**
```
http://localhost:5000/api/contact
```

---

## 📝 What Data is Stored?

### Contact Form Data Structure:

```json
{
  "_id": "507f1f77bcf86cd799439011",
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Project Inquiry",
  "message": "I'd like to discuss a project...",
  "read": false,
  "createdAt": "2024-01-15T10:30:00.000Z"
}
```

**Fields:**
- `_id` - Unique ID (auto-generated)
- `name` - Contact's name
- `email` - Contact's email
- `subject` - Message subject
- `message` - Message content
- `read` - Whether message was read (default: false)
- `createdAt` - Timestamp when submitted

---

## 🔍 Check Your Data Right Now

### Quick Test:

1. **Submit contact form** on your website (http://localhost:8080)

2. **Check backend terminal** - You should see:
   ```
   Contact saved to database
   ```

3. **View data via API:**
   - Open: http://localhost:5000/api/contact
   - You'll see JSON with all contacts

4. **Or use MongoDB Compass:**
   - Connect to your MongoDB
   - Open `portfolio` database
   - View `contacts` collection

---

## 📂 File Structure

```
portfolio-architect-pro/
├── server/
│   ├── models/
│   │   ├── Contact.js    ← Defines contact data structure
│   │   └── Project.js    ← Defines project data structure
│   ├── config/
│   │   └── db.js         ← MongoDB connection
│   └── .env              ← MongoDB connection string
```

**Note:** The actual data is NOT stored in files - it's in MongoDB database!

---

## 🛠️ Backup Your Data

### Export Data:
```bash
# Export contacts collection
mongoexport --db=portfolio --collection=contacts --out=contacts.json
```

### Import Data:
```bash
# Import contacts collection
mongoimport --db=portfolio --collection=contacts --file=contacts.json
```

---

## 🗑️ Delete Data (If Needed)

### Via MongoDB Shell:
```javascript
use portfolio

// Delete all contacts
db.contacts.deleteMany({})

// Delete specific contact
db.contacts.deleteOne({ email: "john@example.com" })
```

### Via API:
- Currently no delete endpoint (you can add one if needed)

---

## ✅ Summary

- **Database:** MongoDB
- **Database Name:** `portfolio`
- **Collections:** `contacts`, `projects`
- **Location:** Local MongoDB OR MongoDB Atlas (cloud)
- **View Data:** MongoDB Compass, mongo shell, or API
- **Connection:** Set in `server/.env` file

---

**Need to see your data?** Download MongoDB Compass - it's the easiest way! 🎯


