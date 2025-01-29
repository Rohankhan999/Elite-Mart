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
    const [isLoading, setIsLoading] = useState(true);

    const filteredProducts = activeView === 'low' 
        ? products.filter(p => (p.stockLevel || 0) < 10)
        : products;

    useEffect(() => {
        async function fetchData() {
            try {
                setIsLoading(true);
                const fetchedProducts = await client.fetch(`*[_type == "product"]{
                    _id,
                    name,
                    price,
                    stockLevel,
                    image {
                        asset-> {
                            url
                        }
                    }
                }`);

                const safeProducts = Array.isArray(fetchedProducts) ? fetchedProducts : [];
                
                // Calculate total revenue with proper type checking
                const revenue = safeProducts.reduce((acc, curr) => {
                    const price = typeof curr.price === 'number' ? curr.price : 0;
                    return acc + price;
                }, 0);

                setProducts(safeProducts);
                setStats({
                    totalProducts: safeProducts.length,
                    totalRevenue: Number(revenue), // Ensure it's a number
                    lowStock: safeProducts.filter(p => (p.stockLevel || 0) < 10).length,
                    recentOrders: 0
                });
            } catch (error) {
                console.error('Error fetching data:', error);
                setProducts([]);
                setStats({
                    totalProducts: 0,
                    totalRevenue: 0,
                    lowStock: 0,
                    recentOrders: 0
                });
            } finally {
                setIsLoading(false);
            }
        }
        fetchData();
    }, []);

    // Format the revenue with proper error handling
    const formattedRevenue = typeof stats.totalRevenue === 'number' 
        ? `$${stats.totalRevenue.toFixed(2)}` 
        : '$0.00';

    if (isLoading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-xl font-semibold text-gray-600">Loading...</div>
            </div>
        );
    }

  // ... previous imports and interfaces remain the same ...

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
                    value={formattedRevenue}
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
                    value="0"
                    icon={<FiUsers className="w-6 h-6" />}
                    color="purple"
                />
            </div>

            {/* Recent Orders Section - Made smaller */}
            <div className="bg-white rounded-lg shadow mb-8">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
                </div>
                <div className="p-4 h-[100px] flex items-center justify-center">
                    <p className="text-gray-500">New orders will be added here</p>
                </div>
            </div>

            {/* Products Table - Full width below orders */}
            <div className="bg-white rounded-lg shadow">
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
                                        <div className="text-sm text-gray-900">
                                            ${typeof product.price === 'number' ? product.price.toFixed(2) : '0.00'}
                                        </div>
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
);}

// ... StatCard component remains the same ...

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
