// Simple email test script
// Run this to test if email configuration works: node server/test-email.js

import dotenv from 'dotenv';
import { sendContactNotification } from './config/email.js';

dotenv.config();

console.log('🧪 Testing email configuration...\n');

// Test data
const testContact = {
  name: 'Test User',
  email: 'test@example.com',
  subject: 'Test Message from Portfolio',
  message: 'This is a test message to verify email functionality is working correctly!'
};

console.log('📧 Attempting to send test email...');
console.log('To:', process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER);
console.log('From:', process.env.SMTP_USER);
console.log('');

try {
  const result = await sendContactNotification(testContact);
  console.log('✅ SUCCESS! Email sent successfully!');
  console.log('Message ID:', result.messageId);
  console.log('\n📬 Check your inbox at:', process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER);
} catch (error) {
  console.error('❌ ERROR: Failed to send email');
  console.error('Error:', error.message);
  console.error('\n💡 Common issues:');
  console.error('1. Check your .env file has all email settings');
  console.error('2. For Gmail, use App Password (not regular password)');
  console.error('3. Verify SMTP credentials are correct');
  console.error('4. Check server logs for detailed error');
  process.exit(1);
}

