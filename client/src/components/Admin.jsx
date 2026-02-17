import React, { useEffect, useState } from 'react';

const Admin = () => {
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        fetchOrders();
        const interval = setInterval(fetchOrders, 30000); // Poll every 30 seconds
        return () => clearInterval(interval);
    }, []);

    const fetchOrders = async () => {
        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/orders`);
            if (!response.ok) {
                throw new Error('Failed to fetch orders');
            }
            const data = await response.json();
            setOrders(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) return <div style={{ color: 'white', textAlign: 'center', marginTop: '50px' }}>LOADING SECRET DATA...</div>;
    if (error) return <div style={{ color: 'red', textAlign: 'center', marginTop: '50px' }}>ERROR: {error}</div>;

    return (
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto', color: 'white' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px', fontFamily: 'Orbitron, sans-serif' }}>ADMIN PANEL</h1>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {orders.length === 0 ? (
                    <p style={{ textAlign: 'center' }}>No orders yet. Time to market harder!</p>
                ) : (
                    orders.map(order => (
                        <div key={order._id} className="neo-box" style={{ padding: '20px', backgroundColor: '#1a1a1a', border: '1px solid #333' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                                <h3 style={{ margin: 0, color: 'var(--secondary-color)' }}>{order.customerName}</h3>
                                <span style={{ fontSize: '0.9rem', color: '#888' }}>{new Date(order.createdAt).toLocaleString()}</span>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                                <div>
                                    <strong>Mobile:</strong> <a href={`tel:${order.mobileNumber}`} style={{ color: 'var(--accent-color)' }}>{order.mobileNumber}</a>
                                </div>
                                <div>
                                    <strong>Qty:</strong> {order.quantity}
                                </div>
                                <div>
                                    <strong>Total:</strong> ₹{order.totalPrice}
                                </div>
                                <div>
                                    <strong>Address:</strong> {order.address}
                                </div>
                            </div>
                        </div>
                    ))
                )}
            </div>
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
                <a href="/" className="neo-btn" style={{ textDecoration: 'none', fontSize: '1rem' }}>BACK TO SHOP</a>
            </div>
        </div>
    );
};

export default Admin;
