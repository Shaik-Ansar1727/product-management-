TRUNCATE TABLE product;

INSERT INTO product (title, price, category, brand, description, created_at) VALUES

-- ===================== LAPTOPS =====================
('MacBook Pro 14', 1999, 'laptops', 'Apple', 'Apple M-series professional laptop', '2025-01-02 10:00:00'),
('MacBook Air M2', 1499, 'laptops', 'Apple', 'Lightweight Apple laptop', '2025-01-05 14:30:00'),
('Dell XPS 13', 1399, 'laptops', 'Dell', 'Premium ultrabook', '2025-01-08 09:15:00'),
('Dell Inspiron 15', 899, 'laptops', 'Dell', 'Everyday laptop', '2025-01-12 16:45:00'),
('HP Pavilion 14', 999, 'laptops', 'HP', 'Affordable HP laptop', '2025-01-18 11:20:00'),
('HP Spectre x360', 1699, 'laptops', 'HP', 'Convertible premium laptop', '2025-01-25 18:10:00'),
('Lenovo ThinkPad X1', 1799, 'laptops', 'Lenovo', 'Business-class laptop', '2025-02-02 10:05:00'),
('Lenovo IdeaPad 3', 699, 'laptops', 'Lenovo', 'Budget laptop', '2025-02-07 13:40:00'),
('Asus ROG Strix', 1899, 'laptops', 'Asus', 'Gaming laptop', '2025-02-15 19:00:00'),
('Acer Aspire 5', 649, 'laptops', 'Acer', 'Entry-level laptop', '2025-02-22 08:30:00'),

-- ===================== FURNITURE =====================
('Office Chair', 299, 'furniture', 'Ikea', 'Ergonomic office chair', '2025-01-03 09:00:00'),
('Gaming Chair', 399, 'furniture', 'SecretLab', 'Comfort gaming chair', '2025-01-10 15:30:00'),
('Wooden Dining Table', 899, 'furniture', NULL, 'Solid wood dining table', '2025-01-17 12:00:00'),
('Sofa Set', 1299, 'furniture', NULL, '3-seater sofa set', '2025-01-24 17:45:00'),
('Coffee Table', 199, 'furniture', NULL, 'Modern coffee table', '2025-02-01 10:20:00'),
('Bookshelf', 249, 'furniture', 'Ikea', '5-tier bookshelf', '2025-02-06 14:10:00'),
('Bed Frame Queen', 799, 'furniture', NULL, 'Queen size bed frame', '2025-02-12 11:55:00'),
('Mattress Memory Foam', 999, 'furniture', 'SleepWell', 'Memory foam mattress', '2025-02-18 16:30:00'),
('TV Stand', 349, 'furniture', NULL, 'Wooden TV stand', '2025-02-24 09:40:00'),
('Study Desk', 299, 'furniture', NULL, 'Minimal study desk', '2025-03-01 13:00:00'),

-- ===================== MEN''S SHIRTS =====================
('Men''s Casual Shirt', 39, 'mens-shirts', 'H&M', 'Cotton casual shirt', '2025-01-04 10:10:00'),
('Men''s Formal Shirt', 59, 'mens-shirts', 'Zara', 'Slim fit formal shirt', '2025-01-09 14:50:00'),
('Checked Shirt', 45, 'mens-shirts', 'Levis', 'Checked cotton shirt', '2025-01-14 09:35:00'),
('Denim Shirt', 69, 'mens-shirts', 'Levis', 'Blue denim shirt', '2025-01-19 16:15:00'),
('Linen Shirt', 79, 'mens-shirts', 'Uniqlo', 'Breathable linen shirt', '2025-01-26 11:40:00'),
('Printed Casual Shirt', 49, 'mens-shirts', 'Roadster', 'Printed casual wear', '2025-02-03 18:05:00'),
('Oxford Shirt', 65, 'mens-shirts', 'H&M', 'Classic oxford shirt', '2025-02-08 12:25:00'),
('Full Sleeve Shirt', 55, 'mens-shirts', 'Zara', 'Full sleeve shirt', '2025-02-14 15:55:00'),
('Slim Fit Shirt', 58, 'mens-shirts', 'Arrow', 'Slim fit office shirt', '2025-02-20 10:45:00'),
('Regular Fit Shirt', 52, 'mens-shirts', 'Arrow', 'Regular fit daily shirt', '2025-02-27 17:35:00'),

-- ===================== GROCERIES =====================
('Organic Apples', 5, 'groceries', NULL, 'Fresh organic apples', '2025-01-01 08:00:00'),
('Bananas 1kg', 3, 'groceries', NULL, 'Fresh bananas', '2025-01-06 07:30:00'),
('Whole Milk 1L', 2, 'groceries', 'Local Farm', 'Fresh cow milk', '2025-01-11 06:45:00'),
('Almond Milk 1L', 4, 'groceries', 'Alpro', 'Dairy-free almond milk', '2025-01-16 09:20:00'),
('Brown Bread', 2, 'groceries', 'Harvest', 'Whole wheat bread', '2025-01-21 07:10:00'),
('White Rice 5kg', 12, 'groceries', 'India Gate', 'Premium rice', '2025-01-28 13:00:00'),
('Basmati Rice 5kg', 18, 'groceries', 'Daawat', 'Long grain basmati', '2025-02-04 12:40:00'),
('Olive Oil 1L', 12, 'groceries', 'Borges', 'Extra virgin olive oil', '2025-02-09 15:30:00'),
('Sunflower Oil 1L', 6, 'groceries', 'Fortune', 'Refined sunflower oil', '2025-02-16 10:10:00'),
('Eggs Pack of 12', 4, 'groceries', NULL, 'Farm fresh eggs', '2025-02-21 08:25:00'),
('Cheddar Cheese', 6, 'groceries', 'Amul', 'Cheddar cheese block', '2025-02-26 11:50:00'),
('Butter 500g', 5, 'groceries', 'Amul', 'Salted butter', '2025-03-02 09:15:00'),
('Sugar 1kg', 2, 'groceries', NULL, 'Refined sugar', '2025-03-05 14:00:00'),
('Salt 1kg', 1, 'groceries', 'Tata', 'Iodized salt', '2025-03-08 10:30:00'),
('Tea Powder 500g', 4, 'groceries', 'Tata Tea', 'Premium tea leaves', '2025-03-10 16:45:00');
