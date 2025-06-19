# 💸 Expenzo - Smart Expense Tracker

Expenzo is a full-featured MERN stack application designed to help individuals and groups track, manage, and split expenses seamlessly. Whether it's a trip, household budget, or monthly spending, Expenzo keeps your finances clear and transparent.

---

## 🚀 Features

- ✅ **User Authentication** (JWT based)
- 💰 **Add & Track Expenses** by category and date
- 📊 **Visual Dashboards** for expense insights
- 👥 **Group Expense Splitting** (Equal, Exact, Percentage)
- 🔁 **Real-time Balances** – who owes whom
- 🔍 **Search & Filter** expenses easily
- 📱 Responsive UI (mobile-friendly)

---

## 🛠️ Tech Stack

**Frontend**:  
- React.js (with Hooks & Context API)  
- Axios, Chart.js  
- Tailwind CSS / Bootstrap for styling

**Backend**:  
- Node.js + Express.js  
- MongoDB (with Mongoose)  
- JSON Web Tokens (JWT) for auth

**DevOps & Tools**:  
- Postman for API testing  
- MongoDB Atlas  
- Git & GitHub  
- Render / Vercel / Netlify for deployment

---

## 📂 Project Structure

```bash
expzenzo/
├── client/          # React frontend
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── context/
│       ├── services/
│       └── App.js
├── server/          # Node.js + Express backend
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   └── index.js
├── .env
├── package.json
└── README.md
