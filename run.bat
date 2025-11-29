@echo off
echo ========================================
echo   Starting MERN Portfolio Project
echo ========================================
echo.

echo [1/2] Starting Backend Server...
start "Backend Server" cmd /k "cd server && npm run dev"

timeout /t 3 /nobreak >nul

echo [2/2] Starting Frontend...
start "Frontend" cmd /k "npm run dev"

echo.
echo ========================================
echo   Both servers are starting!
echo   Backend: http://localhost:5000
echo   Frontend: http://localhost:8080
echo ========================================
echo.
echo Press any key to exit this window (servers will keep running)...
pause >nul


