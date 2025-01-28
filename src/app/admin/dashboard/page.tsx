'use client';
import { useState, useEffect } from 'react';
import { client } from '../../../sanity/lib/client';
import { FiPackage, FiDollarSign, FiUsers, FiShoppingCart, FiEdit2, FiTrash2 } from 'react-icons/fi';

interface Product {
    _id: string;
    name: string;
    price: number;
    stockLevel: number;
    image: {
        asset: {
            url: string;
        };
    };
}
interface Order {
  _id: string;
  orderdata: string;
  total: number;
  status: string;
}
const colorClasses = {
    blue: 'bg-blue-500 text-white',
    green: 'bg-green-500 text-white',
    yellow: 'bg-yellow-500 text-white',
    purple: 'bg-purple-500 text-white',
};

export default function AdminDashboard() {
    const [stats, setStats] = useState({
        totalProducts: 0,
        totalRevenue: 0,
        lowStock: 0,
        recentOrders: 0
    });
    const [products, setProducts] = useState<Product[]>([]);
    const [activeView, setActiveView] = useState('all');
   const [orders, setOrders] = useState<Order[]>([]); 
const filteredProducts = activeView === 'low' 
    ? products.filter(p => (p.stockLevel || 0) < 10)
    : products;

    useEffect(() => {
      async function fetchData() {
          const [products, orders] = await Promise.all([
              client.fetch(`*[_type == "product"]{
                  _id,
                  name,
                  price,
                  stockLevel,
                  image {
                      asset-> {
                          url
                      }
                  }
              }`),
              client.fetch(`*[_type == "order"] | order(orderdata desc)[0...5]`)
          ]);
  
          setProducts(products);
          setOrders(orders);
          setStats({
              totalProducts: products.length,
              totalRevenue: Number(products.reduce((acc: number, curr: any) => acc + (Number(curr.price) || 0), 0)),
              lowStock: products.filter((p: Product) => (p.stockLevel || 0) < 10).length,
              recentOrders: orders.length
          });
      }
      fetchData();
  }, []);
  

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>
                
                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
    <StatCard
        title="Total Products"
        value={stats.totalProducts}
        icon={<FiPackage className="w-6 h-6 text-white" />}
        color="blue"
        onClick={() => setActiveView('all')}
    />
                    <StatCard 
                        title="Total Revenue" 
                        value={`$${stats.totalRevenue.toFixed(2)}`}
                        icon={<FiDollarSign className="w-6 h-6" />}
                        color="green"
                    />
                   <StatCard
        title="Low Stock Items"
        value={stats.lowStock}
        icon={<FiShoppingCart className="w-6 h-6 text-white" />}
        color="yellow"
        onClick={() => setActiveView('low')}
    />
                    <StatCard 
                        title="Recent Orders" 
                        value={stats.recentOrders}
                        icon={<FiUsers className="w-6 h-6" />}
                        color="purple"
                    />
                </div>

{/* Recent Activity Section */}
<div className="bg-white rounded-lg shadow p-6">
    <h2 className="text-xl font-semibold mb-4">Recent Orders</h2>
    <div className="space-y-4">
        {orders.length > 0 ? (
            orders.map(order => (
                <div key={order._id} className="flex justify-between items-center p-4 bg-gray-50 rounded">
                    <div>
                        <p className="font-medium">Order #{order._id.slice(-5)}</p>
                        <p className="text-sm text-gray-500">Total: ${order.total}</p>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                        order.status === 'completed' ? 'bg-green-100 text-green-800' : 
                        'bg-yellow-100 text-yellow-800'
                    }`}>
                        {order.status}
                    </span>
                </div>
            ))
        ) : (
            <p className="text-gray-600">No recent orders to display</p>
        )}
    </div>
</div>

                {/* Products Table */}
<div className="bg-white rounded-lg shadow mt-8">
    <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Products Management</h2>
    </div>
    <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stock</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
            {filteredProducts.map((product) => (
                    <tr key={product._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                                <div className="h-10 w-10 flex-shrink-0">
                                    <img 
                                        className="h-10 w-10 rounded-full object-cover" 
                                        src={product.image?.asset?.url || '/placeholder.png'} 
                                        alt={product.name} 
                                    />
                                </div>
                                <div className="ml-4">
                                    <div className="text-sm font-medium text-gray-900">{product.name}</div>
                                </div>
                            </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">${product.price}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-900">{product.stockLevel || 'N/A'}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                                (product.stockLevel || 0) > 10 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-red-100 text-red-800'
                            }`}>
                                {(product.stockLevel || 0) > 10 ? 'In Stock' : 'Low Stock'}
                            </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button className="text-indigo-600 hover:text-indigo-900 mr-3">
                                <FiEdit2 className="w-5 h-5" />
                            </button>
                            <button className="text-red-600 hover:text-red-900">
                                <FiTrash2 className="w-5 h-5" />
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
</div>

            </div>
        </div>
    );
}

function StatCard({ 
  title, 
  value, 
  icon, 
  color,
  onClick 
}: { 
  title: string; 
  value: string | number; 
  icon: React.ReactNode; 
  color: string;
  onClick?: () => void;
}) {
  return (
      <div 
          className="bg-white rounded-lg shadow p-6 cursor-pointer hover:shadow-lg transition-shadow"
          onClick={onClick}
      >
          <div className="flex items-center">
              <div className={`${colorClasses[color as keyof typeof colorClasses]} p-3 rounded-lg`}>
                  {icon}
              </div>
              <div className="ml-4">
                  <h3 className="text-sm font-medium text-gray-500">{title}</h3>
                  <p className="text-2xl font-semibold text-gray-900">{value}</p>
              </div>
          </div>
      </div>
  );
}