import React from 'react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-center text-white py-3">
            <div className="container">
                <p className="mb-0">&copy; {currentYear} Tu Empresa. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
