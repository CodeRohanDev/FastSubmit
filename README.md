# FastSubmit

A free, fully hosted form backend service. Create forms, receive submissions, and manage data without building a backend.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Features

- User authentication (Email/Password + Google)
- Create unlimited forms with custom fields
- Auto-generated API endpoints
- Dashboard to view/manage submissions
- CSV export
- REST API for developers
- Honeypot spam protection

## API Usage

### Submit Form Data
```
POST /api/submit/{formId}
Content-Type: application/json

{ "name": "John", "email": "john@example.com" }
```

### Fetch Submissions
```
GET /api/forms/data/{formId}?apiKey=YOUR_API_KEY
```

## Tech Stack

- Next.js 14
- Firebase (Auth, Firestore)
- Tailwind CSS
- TypeScript
