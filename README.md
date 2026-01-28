# 🛒 Product Management App (Full-Stack)

A full-stack **Product Management Application** built using **React** for the frontend and **Spring Boot + Hibernate + MySQL** for the backend.

The application supports **searching, filtering, date-based filtering**, and **creating products** with real database persistence.

---

## 🚀 Features

- View products stored in a MySQL database  
- Search products by title  
- Filter products by category  
- Filter products by date range (Start Date & End Date)  
- Add a new product using a modal  
- Confirm product details before creation  
- Persist products in the database  
- REST-based frontend–backend communication  

---

## 🧰 Tech Stack

### Frontend
- React  
- React Router  
- Ant Design (DatePicker, Modal, Inputs)  
- Tailwind CSS  
- Day.js  

### Backend
- Spring Boot  
- Spring Data JPA (Hibernate)  
- MySQL  
- REST APIs  

---

## 🧱 Architecture

- Frontend (React)
        ↓
- REST API (Spring Boot Controller)
        ↓
- Service Layer
        ↓
- Repository (Hibernate / JPA)
        ↓
- MySQL Database


---

## 🔁 Application Flow

1. Products are fetched from the database and displayed on the main page  
2. Users can:
   - Search by product title  
   - Filter by category  
   - Filter by date range  
3. Clicking **"Add Product"** opens a modal to enter product details  
4. User is redirected to a **confirmation page**  
5. On confirmation, the product is saved to MySQL  
6. Newly added product appears in the product list after refresh  

---

## 📌 Notes

- Date filtering works using the `createdAt` field stored in the database  
- Product creation is **persistent** (not mock data)  
- Frontend and backend communicate via **REST APIs**  
- **CORS** is enabled to allow frontend-backend integration  

---

## ▶️ Run Instructions

### Frontend
```bash
npm install
npm run dev
