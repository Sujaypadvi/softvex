@echo off
REM Production build script for Windows

echo 🔨 Building Softvex for production...
echo.

REM Build Backend
echo 📦 Backend setup...
cd backend
call npm install --production
cd ..

REM Build Frontend
echo 📦 Frontend build...
cd frontend
call npm install
call npm run build
cd ..

echo.
echo ✅ Production build complete!
echo.
echo Output locations:
echo   • Frontend: frontend\dist\
echo   • Backend: backend\
echo.
echo Next steps:
echo   1. Docker Compose: docker-compose up -d
echo   2. Deploy frontend\dist\ to your hosting
echo   3. Deploy backend\ to your server
echo.
pause
