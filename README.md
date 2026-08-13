# 📊 MongoDB Student Analytics System

## 📌 Overview
The MongoDB Student Analytics System is a data-focused project designed to demonstrate real-world usage of MongoDB for storing, querying, and analyzing structured data.

This project goes beyond basic CRUD operations by implementing:
- Data modeling
- Automated data insertion
- Advanced querying
- Aggregation pipelines
- Indexing for performance

It simulates a real-world student database system where insights can be derived from stored data.

---

## 🎯 Objectives
- Understand NoSQL database design
- Work with MongoDB using Node.js
- Perform complex queries and analytics
- Build a structured, GitHub-ready project

---

## 🚀 Features

### 📥 Data Management
- Insert bulk student data using scripts
- JSON-based dataset handling
- Automated database population

### 🔍 Query System
- Filtering by department, CGPA, age
- Sorting and limiting results
- Regex-based search
- Skill-based filtering

### 📊 Analytics (Aggregation)
- Average CGPA per department
- Student count by department
- Top-performing students
- High CGPA analysis

### ⚡ Performance Optimization
- Indexing on frequently queried fields
- Improved query performance

---

## 🛠️ Tech Stack

| Technology | Purpose |
|----------|--------|
| MongoDB | Database |
| Node.js | Scripting |
| MongoDB Native Driver | Database connection |
| Ubuntu 22.04 | Development environment |

---

## 📂 Project Structure
mongodb-student-analytics/
│
├── data/
│ students.json # Dataset (25–30 students)
│
├── scripts/
│ insertData.js # Insert data into MongoDB
│ queries.js # Query operations
│ aggregation.js # Aggregation pipeline
│ indexes.js # Index creation
│
├── docs/
│ schema.md # Schema design explanation
│ queries.md # Query explanations
│
├── screenshots/ # MongoDB Compass screenshots
│
├── README.md
├── package.json
└── .gitignore


---

## ⚙️ Setup Instructions

### 1. Start MongoDB
```bash
sudo systemctl start mongod