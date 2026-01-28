const BASE_URL = "http://localhost:8080/api/products";

export const fetchProducts = async ({
  search = "",
  category = "",
  startDate,
  endDate,
  limit = 10,
  skip = 0,
} = {}) => {

  let params = new URLSearchParams({ limit, skip });

  if (search) params.append("name", search);
  if (category) params.append("category", category);

  if (startDate) {
    params.append("startDate", startDate.toISOString());
  }

  if (endDate) {
    params.append("endDate", endDate.toISOString());
  }

  const url = `${BASE_URL}?${params}`;

  console.log("FINAL API URL:", url);

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
};


export const createProduct = async (productData) => {
  const response = await fetch("http://localhost:8080/api/products", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(productData),
  });

  if (!response.ok) {
    throw new Error("Failed to create product");
  }

  return response.json();
};
