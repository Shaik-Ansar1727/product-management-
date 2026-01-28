import { useLocation, useNavigate } from "react-router-dom";
import { Input, Button, Space, Card, Alert } from "antd";
import { useState } from "react";
import { createProduct } from "../services/ProductService";


const ConfirmPage = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const product = location.state?.product;

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  if (!product) {
    return (
      <div className="p-6 text-center">
        <p className="mb-4">No product data found.</p>
        <Button type="primary" onClick={() => navigate("/")}>
          Back to Products
        </Button>
      </div>
    );
  }

  const handleConfirm = async () => {
    try {
      setLoading(true);
      setError(null);

      const createdProduct = await createProduct(product);
      // console.log("Created product:", createdProduct);


      navigate("/", {
        state: { refresh: true },
      });
    } catch (err) {
      console.error(err);
      setError("Failed to create product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <Card title="Confirm Product Creation">
        <Space orientation="vertical" className="w-full">
          {error && <Alert type="error" title={error} showIcon />}

          <Input value={product.title} disabled />
          <Input value={product.price} disabled />
          <Input value={product.category} disabled />
          <Input value={product.brand || "—"} disabled />

          <div className="flex justify-end gap-2 mt-4">
            <Button onClick={() => navigate("/")}>
              Cancel
            </Button>

            <Button
              type="primary"
              loading={loading}
              disabled={loading}
              onClick={handleConfirm}
            >
              Confirm & Create
            </Button>
          </div>
        </Space>
      </Card>
    </div>
  );
};

export default ConfirmPage;
