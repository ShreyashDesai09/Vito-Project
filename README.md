# VITTO

> Lightweight loan-decision demo: backend (Express + MySQL) and frontend (Vite + React).

## Table of Contents
- [Setup](#setup)
- [API Documentation](#api-documentation)
- [Decision Logic Explanation](#decision-logic-explanation)
- [Assumptions Made](#assumptions-made)

## Setup

Prerequisites
- Node.js (v14+)
- React (vite - v9.0.4)
- MySQL server (mysql2 - 3.20.0)

Backend (server)
1. Open a terminal and navigate to the `server` folder:

```bash
cd server
npm install
```
2. Configure the database connection in `server/db/db.js` (default credentials in the repo are example values):

- host: `localhost`
- user: `root`
- password: `root`
- database: `vitto_data`

3. Create the database and necessary tables (example SQL):

```sql
CREATE DATABASE IF NOT EXISTS vitto_data;
USE vitto_data;

-- Example tables (simple schema)
CREATE TABLE IF NOT EXISTS User (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  pan VARCHAR(50),
  business_type VARCHAR(100),
  monthly_revenue DECIMAL(15,2)
);

CREATE TABLE IF NOT EXISTS Loans (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  amount DECIMAL(15,2),
  tenure INT,
  purpose VARCHAR(255),
  status VARCHAR(50),
  credit_score INT,
  FOREIGN KEY (user_id) REFERENCES User(id)
);
```

4. Start the backend server:

```bash
nodemon server.js
```

The server listens on port `4000` by default.

Frontend (vitto-project)
1. Open a new terminal and navigate to `vitto-project`:

```bash
cd vitto-project
npm install
npm run dev
```

The frontend is built with Vite and React. By default Vite serves on `http://localhost:5173` (or another free port it chooses).

## API Documentation

All backend endpoints are exposed by the Express server in the `server` folder. Responses follow the helper `createResult(error, data)` shape:

- Success: `{ status: 'success', data: ... }`
- Error: `{ status: 'error', error: ... }`

Base URL: `http://localhost:4000`

Main backend APIs: `/user`, `/decision`, `/loan`

Endpoints

- POST `/user`
  - Description: Register a new user.
  - Request body (JSON):
    - `name` (string)
    - `pan` (string)
    - `businessType` (string)
    - `monthlyRevenue` (number)
  - Example request:

```json
{
  "name": "Alice",
  "pan": "ABCDE1234F",
  "businessType": "Retail",
  "monthlyRevenue": 50000
}
```

  - Example success response:

```json
{ "status": "success", "data": { "userId": 1 } }
```

- POST `/loan/apply`
  - Description: Submit a loan application record to the database.
  - Request body (JSON):
    - `userId` (int) — foreign key to the `User` table
    - `amount` (number)
    - `tenure` (int, months or years as used by app)
    - `purpose` (string)
    - `status` (string)
    - `score` (int) — credit score assigned by the decision logic
  - Example request:

```json
{
  "userId": 1,
  "amount": 120000,
  "tenure": 24,
  "purpose": "Working capital",
  "status": "Pending",
  "score": 750
}
```

- POST `/decision`
  - Description: Evaluate a loan decision using a simple heuristic.
  - Request body (JSON):
    - `monthlyRevenue` (number)
    - `loanAmount` (number)
  - Decision response shape (inside `data`):
    - `decision` (string) — `Approved` or `Rejected`
    - `score` (int) — numeric score assigned (750 or 350 in current logic)
    - `reasons` (array of strings) — explanation for the decision

  - Example request:

```json
{ "monthlyRevenue": 50000, "loanAmount": 120000 }
```

  - Example success response:

```json
{
  "status": "success",
  "data": {
    "decision": "Approved",
    "score": 750,
    "reasons": ["Loan amount is within 30% of annual income"]
  }
}
```

## Decision Logic Explanation

The decision algorithm (implemented in `server/route/decision.js`) is intentionally simple and deterministic. Steps:

1. Compute annual income from provided `monthlyRevenue`:

   annualIncome = monthlyRevenue * 12

2. Compute the maximum allowed loan limit as 30% of annual income:

   maxLoanLimit = annualIncome * 0.30

3. Default outcome is `Approved` with `score = 750` and a single reason indicating the loan is within limits.

4. If the requested `loanAmount` is greater than `maxLoanLimit`, mark the application `Rejected`, set `score = 350`, and return a reason describing the exceeded limit (value included).

Example calculation
- monthlyRevenue = 50,000 → annualIncome = 600,000
- maxLoanLimit = 600,000 * 0.30 = 180,000
- If loanAmount <= 180,000 → Approved (score 750)
- If loanAmount > 180,000 → Rejected (score 350)

This deterministic rule is easy to test and reason about; it is suitable for a demo but not for production credit decisions.

## Assumptions Made

- No authentication: endpoints are open and do not require auth tokens.
- Input validation is minimal; the API expects numeric values for revenue and amounts.
- The database schema is simple and not normalized for complex production needs.
- The `decision` heuristic is intentionally simple (30% of annual income) — replace or extend for real-world use.
- Error responses follow the `createResult` helper: `{ status: 'error', error: <error> }`.
- Default server port is `4000` and frontend default port is `5173` (Vite).

# Vito-Project
