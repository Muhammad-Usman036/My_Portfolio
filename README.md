# Professional Portfolio - MERN Stack

A modern, professional portfolio website built with the MERN stack (MongoDB, Express, React, Node.js) featuring multiple color schemes and a fully functional contact form.

## 🚀 Features

- **Full MERN Stack**: Complete backend with Express.js and MongoDB
- **Multiple Color Schemes**: 5 beautiful themes to choose from:
  - Default (Purple) - Original theme
  - Blue - Clean, professional, bright
  - Purple & Gold - Rich, vibrant, dark mode
  - Green & Earth - Natural, calm, light mode
  - Dark Gray - Sleek, sophisticated, monochromatic
- **Contact Form**: Fully functional with backend API integration
- **Responsive Design**: Mobile-first, works on all devices
- **Modern UI**: Built with React, TypeScript, Tailwind CSS, and shadcn/ui
- **Professional Animations**: Smooth transitions and fade-in effects
- **Theme Switcher**: Easy color scheme selection with persistent storage

## 📋 Prerequisites

- Node.js (v18 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd portfolio-architect-pro
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd server
npm install
cd ..
```

### 4. Environment Setup

Create a `.env` file in the `server` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/portfolio
NODE_ENV=development
```

Create a `.env` file in the root directory (optional, for custom API URL):

```env
VITE_API_URL=http://localhost:5000/api
```

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Start Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Start Frontend:**
```bash
npm run dev
```

The frontend will be available at `http://localhost:8080`
The backend API will be available at `http://localhost:5000`

### Production Build

**Build Frontend:**
```bash
npm run build
```

**Start Backend:**
```bash
cd server
npm start
```

## 📁 Project Structure

```
portfolio-architect-pro/
├── server/                 # Backend (Express + MongoDB)
│   ├── config/            # Database configuration
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   └── server.js          # Express server entry point
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # shadcn/ui components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   └── ThemeSwitcher.tsx
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.tsx
│   ├── lib/              # Utilities
│   │   ├── api.ts        # API client
│   │   └── utils.ts
│   ├── pages/            # Page components
│   └── App.tsx           # Main app component
├── public/               # Static assets
└── package.json
```

## 🎨 Color Schemes

The portfolio supports 5 different color schemes that can be switched using the theme switcher button (bottom-right corner):

1. **Default (Purple)**: Original purple gradient theme
2. **Blue**: Professional blue theme with light mode
3. **Purple & Gold**: Rich dark mode theme with vibrant colors
4. **Green & Earth**: Natural, calming green theme
5. **Dark Gray**: Sophisticated monochromatic dark theme

Color scheme preference is saved in localStorage and persists across sessions.

## 🔌 API Endpoints

### Contact Form
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

### Projects
- `GET /api/projects` - Get all projects
- `GET /api/projects?featured=true` - Get featured projects
- `GET /api/projects/:id` - Get single project
- `POST /api/projects` - Create project (admin)

### Health Check
- `GET /api/health` - Server health check

## 🛠️ Technologies Used

### Frontend
- React 18
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui
- React Router
- Framer Motion
- Lucide React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- Express Validator
- CORS

## 📝 Customization

### Adding Projects
Projects can be added via the API or directly in the `Projects.tsx` component.

### Modifying Color Schemes
Color schemes are defined in `src/index.css`. Each theme uses CSS custom properties (variables) for easy customization.

### Updating Content
Edit the respective component files:
- `Hero.tsx` - Hero section
- `About.tsx` - About section
- `Skills.tsx` - Skills section
- `Projects.tsx` - Projects section
- `Contact.tsx` - Contact form

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or update `MONGODB_URI` in `.env`
- For MongoDB Atlas, use the connection string provided

### CORS Errors
- Ensure backend is running on port 5000
- Check `VITE_API_URL` in frontend `.env` matches backend URL

### Port Already in Use
- Change ports in `vite.config.ts` (frontend) or `server.js` (backend)
- Update `VITE_API_URL` accordingly

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

Muhammad Usman
- LinkedIn: [m-usman-sadiq-a55943248](https://www.linkedin.com/in/m-usman-sadiq-a55943248)
- GitHub: [m-usman-sadiq](https://github.com/m-usman-sadiq)
- Email: developer.usmansadiq74@gmail.com

---

Made with ❤️ using React, TypeScript, and Tailwind CSS
