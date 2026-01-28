
import { useState } from 'react'
import { DatePicker, Input, Select, Button, Space, Row, Col } from 'antd'
import dayjs from "dayjs";
import { fetchProducts } from '../services/ProductService';
import AddProductModal from "../components/AddProductModal";
import { useNavigate } from "react-router-dom";





const Page1 = () => {
  const [startDate, setStartDate] = useState(dayjs().subtract(7, "day"))
  const [endDate, setEndDate] = useState(dayjs())
  const handleStartDateChange = (date) => {
    setStartDate(date);

    if (endDate && date && date.isAfter(endDate)) {
      setEndDate(date);
    }
  };

  const [searchText, setSearchText] = useState("")
  const [category, setCategory] = useState(null)

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null)


  const [isAddModalOpen, setIsAddModalOpen] = useState(false);


  const navigate = useNavigate();



  const disableEndDate = (current) => {
    return current && current.isBefore(startDate, "day");
  };

  // demo only
  const handleProductSubmit = (productData) => {
    // console.log("Draft product:", productData);

    setIsAddModalOpen(false);

    navigate("/confirm", {
      state: {
        product: productData,
      },
    });
  };





const handleSearch = async () => {
  try {
    setLoading(true);
    setError(null);

    const data = await fetchProducts({
      search: searchText.trim(),
      category,
      startDate,
      endDate,
      limit: 100,
      skip: 0,
    });

    setProducts(data);
  } catch (err) {
    console.error("Error fetching products:", err);
    setError("Failed to load products. Please try again.");
    setProducts([]);
  } finally {
    setLoading(false);
  }
};





  return (
    <div className="p-6 space-y-6">

      <div className="bg-white p-4 rounded shadow">
        <Row gutter={16}>
          <Col span={12}>
            <Space orientation="vertical" className="w-full">
              <label className="font-medium">Start Date</label>
              <DatePicker
                className="w-full"
                value={startDate}
                onChange={handleStartDateChange}
              />
            </Space>
          </Col>

          <Col span={12}>
            <Space orientation="vertical" className="w-full">
              <label className="font-medium">End Date</label>
              <DatePicker
                className="w-full"
                value={endDate}
                onChange={(date) => setEndDate(date)}
                disabledDate={disableEndDate}
              />
            </Space>
          </Col>
        </Row>
      </div>


      <div className="bg-white p-4 rounded shadow">
        <Row gutter={16}>
          <Col span={12}>
            <Space orientation="vertical" className="w-full">
              <label className="font-medium">Search</label>
              <Input
                placeholder="Search products..."
                value={searchText}
                onChange={(e) => {
                  setSearchText(e.target.value);
                  if (category) {
                    setCategory(null);
                  }
                }}
              />
            </Space>
          </Col>

          <Col span={12}>
            <Space orientation="vertical" className="w-full">
              <label className="font-medium">Category</label>
              <Select
                placeholder="Select category"
                value={category}
                onChange={(value) => setCategory(value)}
                allowClear
                className="w-full"
                options={[
                  { value: "beauty", label: "Beauty" },
                  { value: "fragrances", label: "Fragrances" },
                  { value: "womens-dresses", label: "Women Dresses" },
                  { value: "mens-shirts", label: "Men Shirts" },
                  { value: "furniture", label: "Furniture" },
                  { value: "groceries", label: "Groceries" },
                  { value: "home-decoration", label: "Home-Decoration" },
                  { value: "kitchen-accessories", label: "Kitchen-Accessories" },
                  { value: "laptops", label: "Laptops" },
                  { value: "mens-watches", label: "Mens-Watches" },


                ]}
              />
            </Space>
          </Col>
        </Row>
      </div>


      <div className="bg-white p-6 rounded shadow text-center text-gray-500 space-y-4">

        <div className="flex justify-end">
          <Button
            type="primary"
            onClick={
              () => {
                // setSearchText("")
                handleSearch();
              }
            }
            loading={loading}

          >
            Search
          </Button>





        </div>

        <div className="bg-white p-6 rounded shadow">

          {loading && (
            <p className="text-center text-gray-500">Loading products...</p>
          )}


          {error && (
            <p className="text-center text-red-500">{error}</p>
          )}

          {/* {console.log("products:", products)} */}

          {!loading && !error && products.length === 0 && (
            <p className="text-gray-500 text-center">
              No data. Click Search to load products.
            </p>
          )}



          {!loading && !error && products.length > 0 && (
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 text-sm">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="border px-4 py-2 text-left">ID</th>
                    <th className="border px-4 py-2 text-left">Title</th>
                    <th className="border px-4 py-2 text-left">Category</th>
                    <th className="border px-4 py-2 text-left">Price</th>
                    <th className="border px-4 py-2 text-left">Brand</th>
                  </tr>
                </thead>

                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="hover:bg-gray-50">
                      <td className="border px-4 py-2">{product.id}</td>
                      <td className="border px-4 py-2">{product.title}</td>
                      <td className="border px-4 py-2 capitalize">
                        {product.category}
                      </td>
                      <td className="border px-4 py-2">
                        ${product.price}
                      </td>
                      <td className="border px-4 py-2">
                        {product.brand || "—"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

        </div>


      </div>


      <div className="flex justify-end">
        <Button type="primary" onClick={() => {
          setIsAddModalOpen(true)
        }
        }>
          Add Product
        </Button>
      </div>


      <AddProductModal
        open={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        onSubmit={handleProductSubmit}
      />

    </div>
  );
};
export default Page1
