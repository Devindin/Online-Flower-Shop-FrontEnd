import React, { useState, useEffect } from "react";
import axios from "axios";
import admin from "../Images/admin.jpg";
import { Link, Navigate, useNavigate } from "react-router-dom";

const AdminPanel = () => {
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]); // State to store unique categories
  const [selectedCategory, setSelectedCategory] = useState(""); // State for selected category
  const [deliveryDate, setDeliveryDate] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(""); // State for success message
  const [activeSection, setActiveSection] = useState("");
  const [editProductId, setEditProductId] = useState("");
  const [users, setUsers] = useState([]);
  const [editFormData, setEditFormData] = useState({
    title: "",
    price: "",
    category: "",
    description: "",
  });

  const navigate = useNavigate();

  const handleLogout = () => {
   
    localStorage.removeItem('token');
 
    navigate('/');
  };

  const initialProductState = {
    title: "",
    price: "",
    category: "",
    description: "",
    image: null,
  };

  const [newProduct, setNewProduct] = useState(initialProductState);

  // Function to handle input changes in the new product form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  // Function to handle image file selection
  const handleImageChange = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  // Function to handle form submission for adding new product
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("title", newProduct.title);
      formData.append("price", newProduct.price);
      formData.append("category", newProduct.category);
      formData.append("description", newProduct.description);
      formData.append("image", newProduct.image);

      const response = await axios.post(
        "http://localhost:5000/addFlower",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      setSuccess("Product added successfully"); // Set success message
      setError("");
      setNewProduct(initialProductState);
      
    } catch (error) {
      console.error("Error adding product", error);
      setError("Failed to add product");
      setSuccess(""); // Clear success message
    }
  };

  const fetchOrders = async () => {
    try {
      const response = await axios.get("http://localhost:5000/orders");
      setOrders(response.data);
    } catch (error) {
      setError("Failed to fetch orders");
      console.error(error);
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/flowers");
      setProducts(response.data);

      // Extract unique categories from the products
      const uniqueCategories = [
        ...new Set(response.data.map((product) => product.category)),
      ];
      setCategories(uniqueCategories);
    } catch (error) {
      setError("Failed to fetch products");
      console.error(error);
    }
  };

  const fetchProductsByCategory = async (category) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/flowers/category/${category}`
      );
      setProducts(response.data);
    } catch (error) {
      setError("Failed to fetch products by category");
      console.error(error);
    }
  };

  const fetchOrdersByDate = async (date) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/orders/date/${date}`
      );
      setOrders(response.data);
    } catch (error) {
      setError("Failed to fetch orders by date");
      console.error(error);
    }
  };

  const updateOrderStatus = async (id, delivered) => {
    try {
      const response = await axios.put(`http://localhost:5000/orders/${id}`, {
        delivered,
      });
      setOrders(
        orders.map((order) => (order._id === id ? response.data : order))
      );
    } catch (error) {
      setError("Failed to update order status");
      console.error(error);
    }
  };

  // Function to handle edit product
  const handleEditProduct = async (productId) => {
    try {
      // Fetch the product data based on the productId
      const response = await axios.get(
        `http://localhost:5000/products/${productId}`
      );
      const productToEdit = response.data; // Assuming the backend returns the product data

      // Set the editFormData state with the product data
      setEditFormData({
        title: productToEdit.title,
        price: productToEdit.price,
        category: productToEdit.category,
        description: productToEdit.description,
      });

      // Set the editProductId state to the productId
      setEditProductId(productId);
    } catch (error) {
      console.error("Error fetching product for editing", error);
      setError("Failed to fetch product for editing");
    }
  };

  // Function to handle submit edit product form
  const handleSubmitEditForm = async (e) => {
    e.preventDefault();
    try {
      // Send a PUT request to update the product data
      await axios.put(
        `http://localhost:5000/products/${editProductId}`,
        editFormData
      );
      setSuccess("Product updated successfully");
      setError("");
    } catch (error) {
      console.error("Error updating product", error);
      setError("Failed to update product");
      setSuccess("");
    }
  };

  // Function to handle delete product
  const handleDeleteProduct = async (productId) => {
    try {
      // Send a DELETE request to the backend to delete the product
      await axios.delete(`http://localhost:5000/products/${productId}`);
      setProducts(products.filter((product) => product._id !== productId)); // Remove the deleted product from the state
      setSuccess("Product deleted successfully");
      setError("");
    } catch (error) {
      console.error("Error deleting product", error);
      setError("Failed to delete product");
      setSuccess("");
    }
  };

  // Function to fetch all users
  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users"); // Fetch users from the server
      setUsers(response.data); // Set the users state with the fetched data
    } catch (error) {
      console.error("Failed to fetch users", error);
    }
  };


  const handleDateChange = (e) => {
    setDeliveryDate(e.target.value);
    fetchOrdersByDate(e.target.value);
  };

  const handleSectionChange = (section) => {
    setActiveSection(section);
    if (section === "orders") {
      fetchOrders();
    } else if (section === "products") {
      fetchProducts();
    }
  };

  useEffect(() => {
    if (activeSection === "products" && selectedCategory) {
      fetchProductsByCategory(selectedCategory);
    } else if (activeSection === "products") {
      fetchProducts();
    }
  }, [activeSection, selectedCategory]);

  useEffect(() => {
    fetchUsers();
  }, []);





  return (
    <div className="min-h-screen flex flex-col">
     <div className="flex items-center justify-between h-24 bg-gradient-to-r from-red-500 via-red-400 to-[#91BD3A] px-4">
            {/* Home link */}
            <Link to="/" className="text-1xl font-bold text-[#ffffff]">Home</Link>
            {/* Admin Panel */}
            <h2 className="text-4xl font-bold text-[#ffffff]">Admin Panel</h2>
            {/* Logout button */}
            <button onClick={handleLogout} className="text-white text-1xl font-bold">Logout</button>
        </div>

      <div className="flex flex-1">
        <aside className="w-64 bg-white border-r p-4">
          <nav className="space-y-2">
            <a
              href="#"
              className="flex items-center p-2 text-indigo-600"
              onClick={() => handleSectionChange("")}
            >
              <span className="ml-3">Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-indigo-600"
              onClick={() => handleSectionChange("products")}
            >
              <span className="ml-3">Products</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-indigo-600"
              onClick={() => handleSectionChange("orders")}
            >
              <span className="ml-3">Orders</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-indigo-600"
              onClick={() => handleSectionChange("customers")}
            >
              <span className="ml-3">Customers</span>
            </a>
            <a
              href="#"
              className="flex items-center p-2 text-indigo-600"
              onClick={() => handleSectionChange("addProduct")}
            >
              <span className="ml-3">Add Product</span>
            </a>
          </nav>
        </aside>

        <main
          className="flex-1 bg-gray-100 p-6 className min-h-screen flex flex-col bg-cover bg-center"
          style={{
            backgroundImage: `url(${admin})`,
            backgroundRepeat: "no-repeat", // Set background image
          }}
        >
          {editProductId && (
            <div>
              <h2>Edit Product</h2>
              <form onSubmit={handleSubmitEditForm}>
                {/* Edit form inputs */}
                {/* Assuming you have input fields for title, price, category, and description */}
                <input
                  type="text"
                  value={editFormData.title}
                  onChange={(e) =>
                    setEditFormData({ ...editFormData, title: e.target.value })
                  }
                />
                {/* Repeat for other fields */}
                <button type="submit">Update Product</button>
              </form>
            </div>
          )}
          {activeSection === "addProduct" ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Add New Product</h2>
              {success && <p className="text-green-500">{success}</p>}
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="title"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    value={newProduct.title}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Description
                  </label>
                  <input
                    type="text"
                    id="description"
                    name="description"
                    value={newProduct.description}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Price
                  </label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    value={newProduct.price}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="category"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    value={newProduct.category}
                    onChange={handleInputChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="image"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Image
                  </label>
                  <input
                    type="file"
                    id="image"
                    name="image"
                    onChange={handleImageChange}
                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Add Product
                </button>
              </form>
              {error && <p className="text-red-500">{error}</p>}
            </div>
          ) : activeSection === "products" ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Products</h2>
              <label
                htmlFor="categoryFilter"
                className="block text-sm font-medium text-gray-700"
              >
                Filter by Category
              </label>
              <select
                id="categoryFilter"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="mb-4 block w-full p-2 border border-gray-300 rounded-md"
              >
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              {products.map((product) => (
                <div
                  key={product._id}
                  className="bg-white shadow-md rounded p-4 mb-4"
                >
                  <h3 className="text-lg font-semibold">{product.title}</h3>
                  <p>{product.description}</p>
                  <p>Rs.{product.price}</p>
                  <p>Category: {product.category}</p>
                  <img
                    src={`http://localhost:5000/uploads/${product.image}`}
                    alt={product.title}
                    className="w-28 h-28"
                  />
                  <div className="mt-4">
                    <button
                      onClick={() => handleEditProduct(product._id)}
                      className="mr-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteProduct(product._id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : activeSection === 'orders' ? (
            <>
              <div className="mb-4">
                <label htmlFor="deliveryDate" className="block text-sm font-medium text-gray-700">
                  Select Delivery Date
                </label>
                <input
                  type="date"
                  id="deliveryDate"
                  value={deliveryDate}
                  onChange={handleDateChange}
                  className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
                />
              </div>

              {error && <p className="text-red-500">{error}</p>}

              <table className="min-w-full bg-white">
                <thead>
                  <tr>
                    <th className="py-2 px-4 border-b">Name</th>
                    <th className="py-2 px-4 border-b">Address</th>
                    <th className="py-2 px-4 border-b">Email</th>
                    <th className="py-2 px-4 border-b">Contact</th>
                    <th className="py-2 px-4 border-b">Delivery Date</th>
                    <th className="py-2 px-4 border-b">Status</th>
                    <th className="py-2 px-4 border-b">Items</th>
                    <th className="py-2 px-4 border-b">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {orders.map((order) => (
                    <tr key={order._id}>
                      <td className="py-2 px-4 border-b">{order.name}</td>
                      <td className="py-2 px-4 border-b">{order.address}</td>
                      <td className="py-2 px-4 border-b">{order.email}</td>
                      <td className="py-2 px-4 border-b">{order.contact}</td>
                      <td className="py-2 px-4 border-b">{order.deliveryDate}</td>
                      <td className="py-2 px-4 border-b">
                        {order.delivered ? 'Delivered' : 'Pending'}
                      </td>
                      <td className="py-2 px-4 border-b">
                        <ul>
                          {order.cart.map((item, index) => (
                            <li key={index}>
                              {item.title} - {item.quantity}
                            </li>
                          ))}
                        </ul>
                      </td>
                      <td className="py-2 px-4 border-b">
                        <button
                          onClick={() => updateOrderStatus(order._id, !order.delivered)}
                          className="bg-blue-500 text-white px-3 py-1 rounded"
                        >
                          {order.delivered ? 'Mark as Pending' : 'Mark as Delivered'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
          ) : activeSection === "customers" ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Customers</h2>
              <div className="grid grid-cols-3 gap-4">
                {/* Display customer information */}
                {users.map((user) => (
                  <div key={user._id} className="bg-white shadow-md rounded p-4 mb-4">
                    <p><strong>Email:</strong> {user.email}</p>
                    {/* You can display more information about the customer here */}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              {/* You can adjust the margin and size of the image as needed */}
              <img
                src={admin}
                alt=""
                className="absolute bottom-0 right-0 mb-4 mr-10 w-100 h-auto "
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
