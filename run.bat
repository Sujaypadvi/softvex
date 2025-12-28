@echo off
echo Starting Softvex Development Environment...
echo.
echo Opening Backend Terminal...
start cmd /k "cd backend && npm run dev"
echo.
echo Opening Frontend Terminal...
timeout /t 2 /nobreak
start cmd /k "cd frontend && npm run dev"
echo.
echo Waiting for servers to start...
timeout /t 5 /nobreak
echo.
echo ✓ Backend should be running on http://localhost:5000
echo ✓ Frontend should be running on http://localhost:3000
echo.
pause
