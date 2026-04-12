### 1. Installation

```bash
'npm install' or 'npm i'
```

### 2.Environment Setup

Create a `.env` file in the root directory and add our Supabase credentials:

```
# Supabase config
EXPO_PUBLIC_SUPABASE_URL=https://buqpumnpspsbfahzkqsu.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ1cXB1bW5wc3BzYmZhaHprcXN1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzU4NjA3NTgsImV4cCI6MjA5MTQzNjc1OH0.TmEjZKpDliVml5qkGAwEI8ABsts8skbQn69ICyTdk70
```

## 2.1 Security Note

> To minimize project setup barriers, streamline the grading process for the instructor, and ensure a seamless collaboration experience for our team members, we have intentionally provided the Supabase test environment variables directly above.
>
> **Please note: We are fully aware that in real-world, production-level development, this is a serious anti-pattern that violates security best practices.** In actual commercial projects, sensitive credentials must be strictly maintained in local `.env` files (which are ignored by Git) or managed through a CI/CD system's secret manager. They should never be publicly exposed in a code repository or README document.

### 3. Running the App

```
'npx expo start' or 'npm run start'
```

### 4. Test Accounts

- **User** : `a@a.ca`
- **Password** : `L1234567`
