import React from 'react';

const Address = () => {
    return (
        <div id="address-section" style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: 'var(--bg-color)' }}>
            <h2 style={{
                marginBottom: '50px',
                fontSize: '3rem',
                color: 'var(--text-color)',
                textTransform: 'uppercase',
                transform: 'rotate(-2deg)'
            }}>
                Pull Up
            </h2>

            <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '40px' }}>
                <div className="neo-box" style={{ flex: '1', minWidth: '300px', textAlign: 'left', padding: '30px', transform: 'rotate(1deg)' }}>
                    <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--accent-color)' }}>THE SPOT</h3>
                    <p style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '20px', fontWeight: 'bold' }}>
                        <strong>CHASKA HQ</strong><br />
                        KIIT Road,<br />
                        Opposite KFC,<br />
                        Bhubaneswar, Odisha.
                    </p>
                    <div style={{ fontSize: '1.1rem', borderTop: 'var(--border-width) solid black', paddingTop: '20px' }}>
                        <p>🕒 DAILY: 4:30 PM - STOCK LASTS</p>
                        <p>📞 +91 00000 00000</p>
                    </div>
                </div>

                <div className="neo-box" style={{
                    flex: '1',
                    minWidth: '300px',
                    height: '400px',
                    padding: '0',
                    overflow: 'hidden',
                    position: 'relative',
                    transform: 'rotate(-1deg)'
                }}>
                    <iframe
                        width="100%"
                        height="100%"
                        frameBorder="0"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        src="https://maps.google.com/maps?q=KFC+Patia+Bhubaneswar&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        title="Chaska Location"
                        style={{ border: 'none' }}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default Address;
