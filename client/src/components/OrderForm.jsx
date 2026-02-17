import React, { useState } from 'react';

const OrderForm = () => {
    const [formData, setFormData] = useState({
        customerName: '',
        mobileNumber: '',
        quantity: 1
    });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    // Constants
    const BASE_PRICE = 70;
    const DISCOUNT_ON_PAIR = 20;

    const calculatePrice = (qty) => {
        let price = qty * BASE_PRICE;
        if (qty % 2 === 0) {
            price -= DISCOUNT_ON_PAIR * (qty / 2);
        }
        return price;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${API_URL}/api/orders`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (!response.ok) {
                throw new Error('Failed to place order');
            }

            setSubmitted(true);
        } catch (err) {
            setError('Something went wrong. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    if (submitted) {
        return (
            <div className="neo-box" style={{ textAlign: 'center', padding: '60px', borderRadius: '0' }}>
                <h2 style={{ color: 'var(--secondary-color)', fontSize: '3rem', marginBottom: '20px' }}>HELL YEAH!</h2>
                <p style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>Your stash is secured.</p>
                <p style={{ marginBottom: '30px' }}>We'll hit you up at {formData.mobileNumber}.</p>
                <button
                    className="neo-btn"
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({ customerName: '', mobileNumber: '', quantity: 1 });
                    }}
                >
                    AGAIN?
                </button>
            </div>
        );
    }

    // Removed time restriction logic
    // const checkTime = () => { ... }
    // const isOpen = checkTime();
    // if (!isOpen) { ... }

    return (
        <div className="neo-box" style={{
            maxWidth: '600px',
            margin: '0 auto',
            padding: '40px',
            borderRadius: '0',
            transform: 'rotate(-1deg)'
        }}>
            <h2 style={{ textAlign: 'center', marginBottom: '10px', fontSize: '2.5rem', transform: 'skewX(-10deg)' }}>
                GRAB IT
            </h2>
            <p style={{ textAlign: 'center', marginBottom: '30px', fontStyle: 'italic', fontWeight: 'bold' }}>
                (Store starts delivery at 4:30 PM till stock lasts)
            </p>

            {error && <div style={{
                backgroundColor: 'var(--accent-color)',
                color: 'white',
                padding: '10px',
                fontWeight: 'bold',
                textAlign: 'center',
                marginBottom: '20px',
                border: 'var(--border-width) solid black'
            }}>{error}</div>}

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase' }}>Label for: YOUR NAME</label>
                    <input
                        className="neo-input"
                        type="text"
                        name="customerName"
                        value={formData.customerName}
                        onChange={handleChange}
                        required
                        placeholder="WHO ARE YOU?"
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase' }}>Label for: CONTACT</label>
                    <input
                        className="neo-input"
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        pattern="[0-9]{10}"
                        title="Please enter a valid 10-digit mobile number"
                        placeholder="10 DIGIT NUMBER"
                    />
                </div>

                <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold', textTransform: 'uppercase' }}>QUANTITY (PAIRS = DEALS)</label>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <button
                            type="button"
                            className="neo-btn"
                            onClick={() => setFormData(prev => ({ ...prev, quantity: Math.max(1, prev.quantity - 1) }))}
                            style={{ padding: '5px 20px', backgroundColor: 'var(--secondary-color)' }}
                        >-</button>
                        <input
                            className="neo-input"
                            type="number"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            min="1"
                            required
                            style={{ width: '100px', textAlign: 'center' }}
                        />
                        <button
                            type="button"
                            className="neo-btn"
                            onClick={() => setFormData(prev => ({ ...prev, quantity: parseInt(prev.quantity) + 1 }))}
                            style={{ padding: '5px 20px', backgroundColor: 'var(--secondary-color)' }}
                        >+</button>
                    </div>
                </div>

                <div style={{
                    marginBottom: '30px',
                    padding: '20px',
                    backgroundColor: '#FDFCDC',
                    border: 'var(--border-width) solid black',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <span style={{ fontSize: '1.2rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Total Damage:</span>
                    <span style={{ fontSize: '2rem', color: 'var(--accent-color)', fontWeight: '900' }}>
                        ₹{calculatePrice(formData.quantity)}
                    </span>
                </div>

                <button
                    type="submit"
                    className="neo-btn"
                    disabled={loading}
                    style={{ width: '100%', opacity: loading ? 0.7 : 1, fontSize: '1.5rem' }}
                >
                    {loading ? 'PROCESSING...' : 'SECURE THE GOODS'}
                </button>
            </form>
        </div>
    );
};

export default OrderForm;
