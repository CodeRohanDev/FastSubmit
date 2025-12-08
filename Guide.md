🚀 HOSTSPICA Form Backend – Build Guide & Project Timeline

Software Name: - FastSubmit

A free, fully hosted form backend service where website owners can create customizable forms, receive submissions, and view them through a clean dashboard or API.

🧩 1. Project Overview

This project provides developers with a simple API endpoint to handle form submissions without building a backend. Users can:

Create customizable forms

Add fields dynamically

Receive submissions via hosted API

View/manage submissions on the Hostspica dashboard

Fetch data via REST API or Webhooks

This is a lightweight alternative to Formspree, Basin, or Getform — built with Firebase + Next.js + Serverless Functions.

⭐ 2. Core Features
🔥 MVP Features

User Authentication (Firebase Auth)

Create unlimited forms/projects

Customizable form fields (text, email, textarea, number, date, etc.)

Auto-generated Form Endpoint URL

Accept submissions via POST request

Store submissions in Firestore

Dashboard to view submissions

Search + Filters

CSV Export

Basic spam protection (Honeypot)

REST API for fetching submissions

Form preview UI

🌟 Advanced Features (Post-MVP)

Webhooks (send submission to user server)

Email notifications (SendGrid/Resend)

JavaScript SDK / Copy-paste widget

Form templates

Rate limiting

WordPress plugin

Team access

Analytics dashboard (views, submissions, conversion rate)

🛠️ 3. Tech Stack
Component	Technology
Frontend Dashboard	Next.js
Backend API	Firebase Cloud Functions
Database	Firestore
Auth	Firebase Auth
Hosting	Vercel / Firebase Hosting
Storage	Firestore
API Docs (optional)	Swagger/OpenAPI
🏗️ 4. System Architecture
Website Form → Hostspica API → Firestore → Dashboard UI → User


Serverless Cloud Functions handle submissions and data APIs.

🧱 5. Firestore Structure
Collections
users/{userId}
  └── forms/{formId}
        ├── config
        │     fields: [
        │       { id: "name", label: "Name", type: "text", required: true },
        │       { id: "email", label: "Email", type: "email", required: true },
        │       ...
        │     ]
        │     createdAt, updatedAt
        └── submissions/{submissionId}
              { fieldData, userIP, userAgent, submittedAt }

🧩 6. Building the Project (Step-by-Step)
✔ Step 1 — Initialize Firebase Project

Enable Auth, Firestore, Functions, Hosting

Add Firebase Web SDK keys to your Next.js environment

firebase init
firebase init functions
firebase init firestore

✔ Step 2 — Build Authentication (Next.js)

Pages:

/login

/signup

/dashboard

Use Firebase Auth with:

Email/password

Continue with google

✔ Step 3 — Dashboard Layout

Pages:

/dashboard

/dashboard/forms

/dashboard/forms/[formId]

/dashboard/forms/[formId]/settings

Include sections:

Sidebar navigation

Form creation modal

Form list table

✔ Step 4 — Create Form with Custom Fields

Form creation UI:

Form Name

Add Fields dynamically

Field Types: text, email, textarea, number, select, checkbox

Required toggle

Placeholder

Store field configs inside Firestore /users/{uid}/forms/{formId}/config.

✔ Step 5 — Generate API Endpoint

Example API:

POST https://api.hostspica.com/forms/submit/:formId


On form creation, show:

Endpoint URL

Example HTML code

Example JS code

Preview embed code

✔ Step 6 — Accept Submissions (Cloud Functions)

Endpoint receives:

JSON OR form-urlencoded data

Validate against the form's custom fields

Save to Firestore under /submissions

Store:

Field data

Timestamp

IP

UserAgent

✔ Step 7 — Display Submissions in Dashboard

Table:

Field	Value
Name	John Doe
Email	john@example.com

Message	Hello!

Features:

Search

Pagination

Filters

Export CSV

✔ Step 8 — REST API for Developers

Endpoint:

GET /forms/data/:formId?apiKey=xxxx


Return:

[
  {
    "name": "John",
    "email": "john@test.com",
    "message": "Hi!",
    "submittedAt": 1733222932
  }
]

✔ Step 9 — Form Preview + Embed Code

Users can preview their dynamic form generated from field configuration.

Generate embed code:

<script src="https://cdn.hostspica.com/form.js" form-id="8fd23js9"></script>

✔ Step 10 — Deploy to Production

Deploy Functions

Deploy Firestore Rules

Deploy Next.js dashboard

Connect subdomain: forms.hostspica.com

📅 7. Project Timeline (2-Week MVP Roadmap)
Week 1 — Backend + Dashboard Core
Day	Tasks
1	Project setup, Firebase init, Next.js init
2	Authentication (Signup/Login)
3	Dashboard layout (Sidebar + Home)
4	Create Form page + Custom fields builder
5	Save form config to Firestore
6	Generate endpoint URL + docs
7	Build Cloud Function: Accept submissions
Week 2 — Submissions + API + Enhancements
Day	Tasks
8	Display submissions list in dashboard
9	Submission detail page + filters
10	CSV Export + Search
11	REST API for users (data fetching)
12	Form preview UI
13	Public example code snippets + docs
14	Final testing & full deployment
🚀 8. Future Upgrades

Webhooks

Zapier / Make integration

Analytics dashboard

Team accounts

Form templates library

Custom domain per form

Advanced spam protection (Akismet + ReCaptcha)

🎯 9. Notes for Customizable Fields

The main feature is dynamic fields.
Ensure:

✔ Field types are validated
✔ Required fields enforced
✔ XSS protection on string fields
✔ Field definitions stored in Firestore
✔ Submission body matches config

Example field definition:

{
  "type": "text",
  "label": "Your Name",
  "id": "name",
  "required": true,
  "placeholder": "Enter your full name"
}

🏁 10. Final Output of MVP

By the end of this build, you will have:

✔ A working hosted form backend
✔ Custom form builder
✔ Auto-generated API endpoint
✔ Firestore-powered submissions
✔ Dashboard to view/manage entries
✔ Public REST API for developers