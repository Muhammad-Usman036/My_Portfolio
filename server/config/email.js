import nodemailer from 'nodemailer';

// Create reusable transporter object using SMTP transport
const createTransporter = () => {
  // Check if email is configured
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log('Email not configured - SMTP_USER or SMTP_PASS missing');
    return null;
  }

  console.log('Creating email transporter with:', {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    hasPassword: !!process.env.SMTP_PASS,
  });

  return nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // Your email
      pass: process.env.SMTP_PASS, // Your email password or app password
    },
    connectionTimeout: 10000, // 10 seconds
    greetingTimeout: 10000, // 10 seconds
    socketTimeout: 10000, // 10 seconds
    tls: {
      rejectUnauthorized: false, // Allow self-signed certificates
    },
  });
};

// Function to send email notification
export const sendContactNotification = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    if (!transporter) {
      console.log('Email transporter not available - skipping email notification');
      return { success: false, message: 'Email not configured' };
    }

    // Email to you (notification)
    const mailOptions = {
      from: `"Portfolio Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER, // Your email where you want to receive notifications
      subject: `New Contact Form Submission: ${contactData.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #7C3AED; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${contactData.name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
            <p style="margin: 10px 0;"><strong>Subject:</strong> ${contactData.subject}</p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 4px solid #7C3AED;">
              ${contactData.message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from your portfolio contact form.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);
    console.log('Email sent to:', process.env.NOTIFICATION_EMAIL || process.env.SMTP_USER);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    });
    throw error;
  }
};

// Function to send auto-reply to the user
export const sendAutoReply = async (contactData) => {
  try {
    const transporter = createTransporter();
    
    if (!transporter) {
      console.log('Email transporter not available - skipping auto-reply');
      return { success: false, message: 'Email not configured' };
    }

    const mailOptions = {
      from: `"Muhammad Usman" <${process.env.SMTP_USER}>`,
      to: contactData.email,
      subject: `Re: ${contactData.subject} - Thank you for contacting me!`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Thank You for Your Message!</h2>
          
          <p>Hi ${contactData.name},</p>
          
          <p>Thank you for reaching out through my portfolio website. I've received your message and will get back to you as soon as possible.</p>
          
          <div style="background-color: #f9fafb; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 5px 0;"><strong>Your Message:</strong></p>
            <p style="margin: 5px 0; color: #666;">${contactData.subject}</p>
          </div>
          
          <p>I typically respond within 24-48 hours. If your inquiry is urgent, please feel free to contact me directly at <a href="mailto:developer.usmansadiq74@gmail.com">developer.usmansadiq74@gmail.com</a>.</p>
          
          <p>Best regards,<br><strong>Muhammad Usman</strong><br>Frontend Developer & Data Analytics Enthusiast</p>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 30px 0;">
          <p style="color: #666; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Auto-reply sent successfully:', info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error('Error sending auto-reply:', error);
    // Don't throw error for auto-reply, just log it
    return { success: false, error: error.message };
  }
};

