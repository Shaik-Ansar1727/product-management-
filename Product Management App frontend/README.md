# 🛒 Product Management App

A simple, modern **two-page React application** for browsing, searching, filtering, and creating products using the **DummyJSON API**.

This project demonstrates real-world product listing workflows, clean UI patterns, and a practical approach to state handling without overengineering.

---

## ✨ Features

- 📦 Browse products from DummyJSON  
- 🔍 Search products by name  
- 🗂️ Filter products by category  
- 📅 Select start & end dates (UI-level filter)  
- 📊 Display products in a custom table layout  
- ➕ Add a new product via modal  
- ✅ Review and confirm product details on a separate page  
- 🚀 Create a product using a POST request  

---

## 🧰 Tech Stack

- **React** – UI and component logic  
- **React Router** – Page navigation & state passing  
- **Ant Design** – Ready-made, polished UI components  
- **Tailwind CSS** – Layout, spacing, and responsiveness  
- **Day.js** – Date handling  
- **DummyJSON API** – Mock backend  

---

## 🎨 Why Ant Design + Tailwind CSS?

This project intentionally combines both libraries to get the best of each:

### Ant Design is used for:
- `DatePicker`
- `Modal`
- `Input`
- `Select`
- `Button`

### Tailwind CSS is used for:
- Layout and spacing
- Responsive design
- Fine-grained UI control

This combo provides **speed, consistency, and flexibility** without fighting CSS.

---

## 🔄 Application Flow

### 📄 Page 1 – Product List

- Fetches products from DummyJSON
- Users can:
  - Search by product name
  - Filter by category
  - Apply date filters (UI-only)
- Products are displayed in a custom table
- Clicking **“Add Product”** opens a modal to enter new product details

---

### 📄 Page 2 – Product Confirmation

- Displays prefilled product details entered by the user
- User reviews and confirms the information
- On confirmation:
  - A `POST` request is sent to create the product

---

## 📌 Important Notes

- 🗓️ **Date filters are UI-only**  
  DummyJSON does not support date-based filtering, so this is handled purely on the frontend.

- 🧪 **Product creation is simulated**  
  DummyJSON does not persist created data after refresh.

- 🔄 **No global state management**  
  Data is passed between pages using **React Router state** for simplicity and clarity.

---

## ▶️ How to Run the Project

```bash
npm install
npm run dev
