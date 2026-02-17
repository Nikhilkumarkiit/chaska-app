import React from 'react';
import logo from '../assets/logo.png';

const Hero = () => {
    return (
        <div style={{
            textAlign: 'center',
            padding: '80px 20px',
            backgroundColor: 'var(--secondary-color)',
            borderBottom: 'var(--border-width) solid var(--border-color)',
            backgroundImage: 'linear-gradient(45deg, #4ECDC4 25%, #45B7AF 25%, #45B7AF 50%, #4ECDC4 50%, #4ECDC4 75%, #45B7AF 75%, #45B7AF 100%)',
            backgroundSize: '40px 40px'
        }}>
            <div style={{ marginBottom: '40px' }}>
                <div style={{ marginBottom: '20px' }}>
                    <img src={logo} alt="CHASKA" style={{
                        width: '250px',
                        maxWidth: '100%',
                        filter: 'drop-shadow(8px 8px 0px #000)',
                        transform: 'rotate(-5deg)',
                        borderRadius: '50%',
                        border: 'var(--border-width) solid black'
                    }} />
                </div>
            </div>
            <div className="neo-box" style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', transform: 'rotate(2deg)' }}>
                <h1 style={{
                    fontSize: '5rem',
                    marginBottom: '10px',
                    color: 'var(--accent-color)',
                    lineHeight: '0.9',
                    fontFamily: 'var(--font-heading)',
                    textShadow: '4px 4px 0px #000',
                    letterSpacing: '-2px'
                }}>
                    CHASKA
                </h1>
                <h2 style={{
                    fontSize: '1.8rem',
                    marginBottom: '20px',
                    color: 'var(--text-color)',
                    fontFamily: 'monospace',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    Handmade Compulsion
                </h2>
                <p style={{ fontSize: '1.4rem', marginBottom: '30px', fontWeight: 'bold' }}>
                    Dripping with chocolate. Stuffed with joy.
                </p>
                <div style={{
                    display: 'inline-block',
                    backgroundColor: '#F7D794',
                    border: 'var(--border-width) solid var(--border-color)',
                    padding: '15px 30px',
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    boxShadow: '4px 4px 0px black'
                }}>
                    ₹70 EACH <span style={{ fontSize: '1rem', display: 'block' }}>GET ₹20 OFF PER PAIR!</span>
                </div>
            </div>
        </div>
    );
};

export default Hero;
