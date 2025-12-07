import React from 'react';

const Footer = () => {
    return (
        <footer style={{ textAlign: 'center', marginTop: '3rem', padding: '2rem', borderTop: '1px solid #eee', color: '#888' }}>
            <p>© {new Date().getFullYear()} Strategic Investment Summary. Confidential.</p>
        </footer>
    );
};

export default Footer;
