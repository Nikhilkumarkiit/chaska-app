import React from 'react';

const Footer = () => {
    return (
        <footer style={{
            backgroundColor: 'var(--text-color)',
            color: '#fff',
            padding: '40px 20px',
            textAlign: 'center',
            marginTop: '0px',
            borderTop: 'var(--border-width) solid var(--text-color)'
        }}>
            <h2 style={{ fontFamily: 'var(--font-heading)', marginBottom: '20px', fontSize: '3rem', color: 'var(--accent-color)' }}>CHASKA</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '10px', fontFamily: 'monospace' }}>
                📍 KIIT Road, In front of KFC
            </p>
            <p style={{ opacity: 0.6, fontSize: '0.9rem', fontFamily: 'monospace' }}>
                &copy; {new Date().getFullYear()} Chaska. NO RIGHTS RESERVED. JUST VIBES.
            </p>
        </footer>
    );
};

export default Footer;
