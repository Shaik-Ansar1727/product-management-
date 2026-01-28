import { Modal, Input, Select, Button, Space, message } from "antd";
import { useState } from "react";

const { Option } = Select;

const CATEGORIES = [
  "beauty",
  "fragrances",
  "womens-dresses",
  "mens-shirts",
  "furniture",
  "groceries",
  "home-decoration",
  "kitchen-accessories",
  "laptops",
  "mens-watches",
];

const AddProductModal = ({ open, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState(null);
  const [brand, setBrand] = useState("");

  const handleSubmit = () => {
    if (!title.trim()) {
      message.error("Title is required");
      return;
    }

    if (!price || Number(price) <= 0) {
      message.error("Price must be a positive number");
      return;
    }

    if (!category) {
      message.error("Category is required");
      return;
    }

    onSubmit({
      title: title.trim(),
      price: Number(price),
      category,
      brand: brand.trim(),
    });


    setTitle("");
    setPrice("");
    setCategory(null);
    setBrand("");
  };

  return (
    <Modal
      title="Add Product"
      open={open}              
      onCancel={onClose}
      footer={null}
      destroyOnHidden           
    >
      <Space orientation="vertical" className="w-full">
        <Input
          placeholder="Product Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <Input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <Select
          placeholder="Select Category"
          value={category}
          onChange={setCategory}
          className="w-full"
        >
          {CATEGORIES.map((cat) => (
            <Option key={cat} value={cat}>
              {cat}
            </Option>
          ))}
        </Select>

        <Input
          placeholder="Brand (optional)"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
        />

        <div className="flex justify-end gap-2">
          <Button onClick={onClose}>Cancel</Button>
          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Space>
    </Modal>
  );
};

export default AddProductModal;
