import { Search, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <header className="header">
            <h1 className="logo">cyber</h1>

            <div className="search-bar">
                <Search className="search-icon" size={16} />
                <input
                    type="text"
                    placeholder="Search"
                    className="search-input"
                />
            </div>

            <div className="burger-menu-container">
                <Menu size={24} className="burger-menu" onClick={toggleMobileMenu} />
            </div>

            <nav className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <ul className="mobile-menu-list">
                    <li><Link to="/home" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
                    <li><Link to="/contact" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
                    <li><Link to="/blog" className="menu-item" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link></li>
                </ul>
            </nav>

            {isMobileMenuOpen && (
                <div className="close-menu-container">
                    <X size={24} className="close-menu" onClick={toggleMobileMenu} />
                </div>
            )}

            <div className="icons">
                <button className="icon1">

                </button>
                <button className="icon2">

                </button>
                <button className="icon3">

                </button>
            </div>

        </header>
    );
}

export default Header;
