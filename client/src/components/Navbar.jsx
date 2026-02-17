import React from 'react';

const Navbar = () => {
    return (
        <nav style={{
            padding: '20px 40px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: '#fff',
            position: 'sticky',
            top: 0,
            zIndex: 100,
            borderBottom: 'var(--border-width) solid var(--border-color)'
        }}>
            <div style={{
                height: '60px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', color: 'var(--accent-color)', margin: 0, letterSpacing: '-1px' }}>CHASKA</h1>
            </div>
            <div>
                <a href="#address-section" style={{
                    marginRight: '30px',
                    textDecoration: 'none',
                    color: 'var(--text-color)',
                    fontWeight: 'bold',
                    fontSize: '1.2rem'
                }}>Address</a>
                <a href="#order-section" className="neo-btn" style={{ textDecoration: 'none' }}>Order Now</a>
            </div>
        </nav >
    );
};

export default Navbar;
