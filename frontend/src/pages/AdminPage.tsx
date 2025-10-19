import { useState } from "react";
import SidebarComponent from "../components/adminPanel/SidebarComponent";
import TopBarComponent from "../components/adminPanel/TopBarComponent";
import DashboardPage from "../components/adminPanel/DashboardPage";
import ProductsPage from "../components/adminPanel/ProductsPage";
import OrdersPage from "../components/adminPanel/OrdersPage";
import CustomersPage from "../components/adminPanel/CustomersPage";
import MessagesPage from "../components/adminPanel/MessagesPage";
import SettingsPage from "../components/adminPanel/SettingsPage";
import AddProductModal from "../components/adminPanel/modals/AddProductModal";
import EditProductModal from "../components/adminPanel/modals/EditProductModal";
import OrderDetailModal from "../components/adminPanel/modals/OrderDetailModal";
import LogoutModal from "../components/adminPanel/modals/LogoutModal";
import { useNavigate } from "react-router";

// Types
export interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  stock: number;
  status: string;
  image: string;
  sales: number;
}

export interface Order {
  id: string;
  customer: string;
  date: string;
  status: string;
  total: number;
  items: number;
  email: string;
}

export interface Customer {
  id: number;
  name: string;
  email: string;
  orders: number;
  spent: number;
  joined: string;
  status: string;
}

export interface Message {
  id: number;
  name: string;
  email: string;
  subject: string;
  date: string;
  status: string;
  message: string;
}

export default function AdminPage() {
  const [currentPage, setCurrentPage] = useState("dashboard");

  // Modal & Selection State
  const [modalState, setModalState] = useState<{
    addProduct: boolean;
    editProduct: Product | null;
    orderDetail: Order | null;
  }>({
    addProduct: false,
    editProduct: null,
    orderDetail: null,
  });

  // Logout Modal State
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const navigate = useNavigate();

  // Mock Data
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Silk Minimal Dress",
      price: 289,
      category: "Dresses",
      stock: 45,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=100&h=150&fit=crop",
      sales: 127,
    },
    {
      id: 2,
      name: "Leather Jacket",
      price: 459,
      category: "Outerwear",
      stock: 23,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=100&h=150&fit=crop",
      sales: 89,
    },
    {
      id: 3,
      name: "Cashmere Sweater",
      price: 189,
      category: "Knitwear",
      stock: 67,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=100&h=150&fit=crop",
      sales: 203,
    },
    {
      id: 4,
      name: "Wide Leg Trousers",
      price: 149,
      category: "Bottoms",
      stock: 0,
      status: "Out of Stock",
      image:
        "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=100&h=150&fit=crop",
      sales: 156,
    },
    {
      id: 5,
      name: "Blazer Set",
      price: 349,
      category: "Outerwear",
      stock: 34,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1591369822096-ffd140ec948f?w=100&h=150&fit=crop",
      sales: 92,
    },
  ]);

  const [orders, setOrders] = useState<Order[]>([
    {
      id: "#12345",
      customer: "Emma Wilson",
      date: "2025-10-18",
      status: "Processing",
      total: 748,
      items: 3,
      email: "emma@email.com",
    },
    {
      id: "#12344",
      customer: "James Smith",
      date: "2025-10-17",
      status: "Shipped",
      total: 289,
      items: 1,
      email: "james@email.com",
    },
  ]);

  const [customers, setCustomers] = useState<Customer[]>([
    {
      id: 1,
      name: "Emma Wilson",
      email: "emma@email.com",
      orders: 12,
      spent: 3450,
      joined: "2024-03-15",
      status: "Active",
    },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@email.com",
      subject: "Question about sizing",
      date: "2 hours ago",
      status: "Unread",
      message:
        "Hi, I would like to know more about the sizing for the silk dress...",
    },
  ]);

  // CRUD Functions
  const deleteProduct = (id: number) =>
    setProducts(products.filter((p) => p.id !== id));

  const updateOrderStatus = (orderId: string, newStatus: string) =>
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );

  // Dynamic page rendering
  const pages: Record<string, JSX.Element> = {
    dashboard: <DashboardPage products={products} orders={orders} />,
    products: (
      <ProductsPage
        products={products}
        setShowAddProduct={() =>
          setModalState((prev) => ({ ...prev, addProduct: true }))
        }
        setSelectedProduct={(product: Product) =>
          setModalState((prev) => ({ ...prev, editProduct: product }))
        }
        setShowEditProduct={() => {}}
        deleteProduct={deleteProduct}
      />
    ),
    orders: (
      <OrdersPage
        orders={orders}
        updateOrderStatus={updateOrderStatus}
        setSelectedOrder={(order: Order) =>
          setModalState((prev) => ({ ...prev, orderDetail: order }))
        }
        setShowOrderDetail={() => {}}
      />
    ),
    customers: <CustomersPage customers={customers} />,
    messages: <MessagesPage messages={messages} />,
    settings: <SettingsPage />,
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SidebarComponent
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        onLogoutClick={() => setShowLogoutModal(true)}
      />
      <TopBarComponent />
      <div className="ml-64 pt-20 p-8">{pages[currentPage]}</div>

      {/* Modals */}
      {modalState.addProduct && (
        <AddProductModal
          setShowAddProduct={() =>
            setModalState((prev) => ({ ...prev, addProduct: false }))
          }
        />
      )}
      {modalState.editProduct && (
        <EditProductModal
          product={modalState.editProduct}
          setShowEditProduct={() =>
            setModalState((prev) => ({ ...prev, editProduct: null }))
          }
        />
      )}
      {modalState.orderDetail && (
        <OrderDetailModal
          order={modalState.orderDetail}
          setShowOrderDetail={() =>
            setModalState((prev) => ({ ...prev, orderDetail: null }))
          }
        />
      )}

      {/* Logout Modal */}
      {showLogoutModal && (
        <LogoutModal
          isOpen={showLogoutModal}
          onClose={() => setShowLogoutModal(false)}
          onConfirm={() => {
            setShowLogoutModal(false);
            navigate("/login");
          }}
        />
      )}
    </div>
  );
}
