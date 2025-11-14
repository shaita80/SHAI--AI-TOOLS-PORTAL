# 🔐 Authentication & User Management Setup Guide

## Overview

Your website now includes a complete user management system with three levels of access:
- **USER** - Basic user access
- **PREMIUM** - Premium user with additional features
- **ADMIN** - Full administrative access (you!)

## 📋 Prerequisites

Before you can use the authentication system, you need to:

1. ✅ **Vercel Account** - You already have one since your site is hosted on Vercel
2. ✅ **PostgreSQL Database** - You need to set this up (instructions below)

---

## 🗄️ Step 1: Set Up Vercel Postgres Database

### Option A: Using Vercel Dashboard (Recommended)

1. Go to your Vercel Dashboard: https://vercel.com/dashboard
2. Select your project: `SHAI--AI-TOOLS-PORTAL`
3. Click on the **"Storage"** tab
4. Click **"Create Database"**
5. Select **"Postgres"**
6. Choose a name (e.g., `shai-ai-tools-db`)
7. Select a region close to you
8. Click **"Create"**

### Get Your Database Connection Strings

After creating the database:

1. Click on your newly created database
2. Go to the **".env.local"** tab
3. You'll see environment variables like:
   ```
   POSTGRES_URL="..."
   POSTGRES_PRISMA_URL="..."
   POSTGRES_URL_NON_POOLING="..."
   ```
4. Copy all these values - you'll need them in the next step

---

## 🔑 Step 2: Configure Environment Variables

### For Local Development

1. Open the file `.env.local` in your project root
2. Replace the placeholder values with your actual database URLs from Vercel:

```bash
# Database Configuration (from Vercel Postgres)
POSTGRES_PRISMA_URL="postgresql://user:password@host/database?pgbouncer=true"
POSTGRES_URL_NON_POOLING="postgresql://user:password@host/database"

# NextAuth Configuration
# Generate a secret by running: openssl rand -base64 32
NEXTAUTH_SECRET="your-secret-here"
NEXTAUTH_URL="http://localhost:3000"

# Admin Email (your email - will get ADMIN role automatically)
ADMIN_EMAIL="your-email@example.com"
```

### Generate NEXTAUTH_SECRET

Run this command in your terminal:
```bash
openssl rand -base64 32
```

Copy the output and paste it as your `NEXTAUTH_SECRET` value.

### Set Your Admin Email

Replace `your-email@example.com` with **your real email address**. When you register with this email, you'll automatically get ADMIN access!

### For Production (Vercel)

1. Go to your Vercel project settings
2. Navigate to **Environment Variables**
3. Add all the variables from your `.env.local` file:
   - `POSTGRES_PRISMA_URL`
   - `POSTGRES_URL_NON_POOLING`
   - `NEXTAUTH_SECRET` (same one you generated)
   - `NEXTAUTH_URL` - Set this to your production URL (e.g., `https://your-site.vercel.app`)
   - `ADMIN_EMAIL` (your email)

4. Make sure to select **Production**, **Preview**, and **Development** for each variable

---

## 🚀 Step 3: Initialize the Database

Run these commands in your project directory:

```bash
# Generate Prisma Client
npx prisma generate

# Create the database tables
npx prisma db push

# Optional: Open Prisma Studio to view your database
npx prisma studio
```

---

## 📦 Step 4: Deploy to Vercel

If you haven't already, push your changes and deploy:

```bash
git add .
git commit -m "Add user authentication system"
git push origin claude/add-user-management-01CrioNeDsRqdLXD2sezVKKR
```

Then merge to main and Vercel will auto-deploy!

---

## 🎯 Step 5: Create Your Admin Account

### Local Development

1. Start your development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000
3. Click **"Login"** in the navigation
4. Click **"Register here"**
5. Use the email you set as `ADMIN_EMAIL`
6. Fill in the form and click **"Create Account"**
7. Log in with your credentials

🎉 **You now have ADMIN access!**

### Production

1. Visit your live site
2. Follow the same registration process
3. Use your `ADMIN_EMAIL` to get automatic admin rights

---

## 🔐 Using the System

### For You (Admin)

After logging in, you'll see a user menu in the top-right corner with:
- **Profile** - View your profile
- **Admin** - Manage all users (change roles, delete users)
- **Logout** - Sign out

### Admin Dashboard Features

Access at `/admin` (only for ADMIN role):
- View all users
- See statistics (total users, admins, premium, regular)
- Search users
- Change user roles (USER → PREMIUM → ADMIN)
- Delete users (cannot delete yourself)

### Protected Pages

Three examples are included:

1. **`/profile`** - Any authenticated user
2. **`/premium`** - Only PREMIUM and ADMIN users
3. **`/admin`** - Only ADMIN users

---

## 🛠️ Customization

### Adding More Protected Routes

Edit `middleware.ts` to add more protected paths:

```typescript
export const config = {
  matcher: [
    "/profile/:path*",
    "/admin/:path*",
    "/premium/:path*",
    "/your-new-protected-route/:path*",  // Add here
  ],
}
```

### Using Auth in Your Pages

```typescript
// For Server Components
import { requireAuth, requireAdmin, requirePremium } from '@/lib/auth-helpers'

export default async function MyPage() {
  const user = await requireAuth()        // Any authenticated user
  // const user = await requirePremium()  // Premium or Admin only
  // const user = await requireAdmin()    // Admin only

  return <div>Hello {user.name}!</div>
}
```

```typescript
// For Client Components
'use client'
import { useSession } from 'next-auth/react'

export default function MyComponent() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <div>Loading...</div>
  if (!session) return <div>Please login</div>

  return <div>Hello {session.user.name}!</div>
}
```

---

## 🌍 Translations

All authentication text is bilingual (Hebrew/English). To customize:

Edit `content/translations.ts`:
- `nav` - Navigation items
- `auth` - Login/Register forms
- `admin` - Admin dashboard
- `protected` - Protected page messages

---

## 🔍 Troubleshooting

### "Invalid credentials" when logging in
- Make sure you registered first
- Check that your email and password are correct
- Passwords are case-sensitive

### "Database connection error"
- Verify your `POSTGRES_PRISMA_URL` is correct
- Make sure you ran `npx prisma db push`
- Check that your Vercel Postgres database is running

### "Unauthorized" when accessing admin panel
- Make sure you registered with the email set in `ADMIN_EMAIL`
- Log out and log back in
- Check your role in Prisma Studio: `npx prisma studio`

### Can't see the user menu
- Make sure you're logged in
- Clear your browser cache
- Check browser console for errors

---

## 📚 API Routes

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/signin` - Sign in
- `POST /api/auth/signout` - Sign out

### Admin (ADMIN only)
- `GET /api/admin/users` - Get all users
- `PATCH /api/admin/users` - Update user role
- `DELETE /api/admin/users?userId=xxx` - Delete user

---

## 🎨 UI Components

### Pages Created
- `/auth/login` - Login page
- `/auth/register` - Registration page
- `/profile` - User profile page
- `/admin` - Admin dashboard
- `/premium` - Example premium page

### Components Updated
- `Navigation.tsx` - Added user menu with login/logout

---

## 🔒 Security Features

✅ Passwords are hashed with bcrypt
✅ JWT-based sessions
✅ Protected API routes
✅ Server-side authentication checks
✅ Middleware-level route protection
✅ CSRF protection (built into NextAuth)
✅ SQL injection protection (Prisma ORM)

---

## 📖 Learn More

- [NextAuth.js Documentation](https://next-auth.js.org/)
- [Prisma Documentation](https://www.prisma.io/docs)
- [Vercel Postgres](https://vercel.com/docs/storage/vercel-postgres)

---

## 🆘 Need Help?

If you encounter any issues:
1. Check the browser console for errors
2. Check the server logs: `npm run dev`
3. Verify all environment variables are set correctly
4. Run `npx prisma studio` to inspect your database

---

**Enjoy your new authentication system! 🎉**
