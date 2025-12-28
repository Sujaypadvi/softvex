# Deployment Guide for Softvex

## 📦 Production Build

### Frontend Build
```bash
cd frontend
npm install
npm run build
```
Output: `frontend/dist/` (Ready for deployment)

### Backend Preparation
```bash
cd backend
npm install --production
```

---

## 🐳 Docker Deployment (Recommended)

### Build Docker Images
```bash
# Build backend
docker build -t softvex-backend:latest ./backend

# Build frontend
docker build -t softvex-frontend:latest ./frontend
```

### Run with Docker Compose
```bash
docker-compose up -d
```

### Individual Container Run
```bash
# Backend
docker run -d \
  -p 5000:5000 \
  -e NODE_ENV=production \
  -e FRONTEND_URL=https://your-domain.com \
  --name softvex-backend \
  softvex-backend:latest

# Frontend
docker run -d \
  -p 3000:80 \
  --name softvex-frontend \
  softvex-frontend:latest
```

---

## ☁️ Cloud Deployment Options

### 1. **Heroku Deployment**

#### Backend:
```bash
# Install Heroku CLI
heroku login
heroku create your-app-name
git push heroku main
```

#### Frontend:
```bash
# Configure for Heroku
cd frontend
npm run build
# Deploy to Vercel or Netlify instead (easier)
```

### 2. **Vercel (Frontend) + Heroku (Backend)**

#### Frontend on Vercel:
```bash
npm i -g vercel
cd frontend
vercel
```

#### Backend on Heroku:
```bash
cd backend
heroku create your-backend-name
git push heroku main
```

Update frontend `.env.production`:
```
VITE_API_URL=https://your-backend-name.herokuapp.com
```

### 3. **AWS (EC2 + S3)**

#### EC2 Instance Setup:
```bash
# SSH into your instance
ssh -i your-key.pem ec2-user@your-instance-ip

# Install Node.js
curl -fsSL https://rpm.nodesource.com/setup_18.x | sudo bash -
sudo yum install -y nodejs

# Clone project
git clone your-repo
cd softvex

# Setup backend
cd backend
npm install --production
npm start

# Setup frontend in another terminal
cd frontend
npm install
npm run build
# Serve with nginx
```

### 4. **Docker on AWS ECS**

```bash
# Push to ECR
aws ecr get-login-password --region us-east-1 | docker login --username AWS --password-stdin YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com

docker build -t softvex-backend ./backend
docker tag softvex-backend:latest YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/softvex-backend:latest
docker push YOUR_ACCOUNT_ID.dkr.ecr.us-east-1.amazonaws.com/softvex-backend:latest
```

### 5. **Railway.app (Easiest)**

1. Connect your GitHub repo
2. Set environment variables
3. Auto-deploys on git push

### 6. **Render.com**

1. Go to https://render.com
2. Create new Web Service
3. Connect GitHub repo
4. Set build & start commands
5. Deploy

---

## 🔧 Configuration Checklist

Before deploying, ensure:

- [ ] Update `FRONTEND_URL` in `backend/.env.production` with your domain
- [ ] Update `VITE_API_URL` in `frontend/.env.production` with your API domain
- [ ] Enable HTTPS/SSL certificates
- [ ] Configure email service (SMTP) in backend `.env`
- [ ] Set up database if needed
- [ ] Test CORS settings
- [ ] Enable rate limiting for API
- [ ] Set up monitoring & logs

---

## 📋 Environment Variables

### Backend (.env.production)
```env
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
EMAIL_FROM=noreply@yourdomain.com
EMAIL_TO=info@yourdomain.com
```

### Frontend (.env.production)
```env
VITE_API_URL=https://api.your-domain.com
```

---

## 🚀 Quick Deployment Commands

### Development
```bash
npm run dev  # From root (requires concurrently)
```

### Production Build
```bash
cd frontend && npm run build
cd backend && npm install --production
```

### Docker Deployment
```bash
docker-compose up -d
```

---

## 🔍 Verification

After deployment:

1. **Test Backend**:
   ```bash
   curl https://api.your-domain.com/api/health
   ```

2. **Test Frontend**: Visit https://your-domain.com

3. **Test API Integration**: Submit contact form, check responses

4. **Check Logs**:
   ```bash
   docker logs softvex-backend
   docker logs softvex-frontend
   ```

---

## 📝 Notes

- Always use HTTPS in production
- Keep `node_modules` out of Docker images (use `.dockerignore`)
- Set up proper error logging
- Monitor performance metrics
- Regular backups if using database
- Keep dependencies updated

---

**For detailed setup: See [SETUP.md](./SETUP.md)**
