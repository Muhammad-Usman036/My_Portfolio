# Email Setup Guide

To receive email notifications when someone submits the contact form, you need to configure email settings in your `.env` file.

## Step 1: Create/Update `.env` file

Create a `.env` file in the `server` directory (if it doesn't exist) and add the following:

```env
# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# Email Configuration (Gmail Example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Email where you want to receive notifications (optional, defaults to SMTP_USER)
NOTIFICATION_EMAIL=developer.usmansadiq74@gmail.com
```

## Step 2: Gmail Setup (Recommended)

If you're using Gmail, you need to create an **App Password**:

1. Go to your Google Account: https://myaccount.google.com/
2. Click on **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Under **2-Step Verification**, click **App passwords**
5. Select **Mail** and **Other (Custom name)**
6. Enter "Portfolio Contact Form" as the name
7. Click **Generate**
8. Copy the 16-character password and use it as `SMTP_PASS` in your `.env` file

**Important:** Use the App Password, NOT your regular Gmail password!

## Step 3: Other Email Providers

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
```

### Yahoo
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
```

### Custom SMTP
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@domain.com
SMTP_PASS=your-password
```

## Step 4: Test the Setup

1. Restart your backend server
2. Submit a test message through your contact form
3. Check your email inbox for the notification

## How It Works

When someone submits the contact form:
1. ✅ The message is saved to MongoDB (you can see it in MongoDB Compass)
2. ✅ You receive an email notification with all the details
3. ✅ The user receives an auto-reply confirmation email (optional)

## Troubleshooting

### Email not sending?
- Check your `.env` file has all required variables
- Verify your SMTP credentials are correct
- For Gmail, make sure you're using an App Password, not your regular password
- Check server console logs for error messages

### "Invalid login" error?
- For Gmail: Make sure you're using an App Password, not your regular password
- Enable "Less secure app access" (not recommended) OR use App Password (recommended)

### Emails going to spam?
- This is normal for automated emails
- Check your spam/junk folder
- Consider using a professional email service (SendGrid, Mailgun) for production

## Security Note

⚠️ **Never commit your `.env` file to Git!** It contains sensitive credentials.

The `.env` file should already be in `.gitignore`, but double-check to make sure.

