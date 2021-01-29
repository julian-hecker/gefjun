import React from 'react';
import { Link } from 'react-router-dom';

import s from './Navbar.scss';

function Navbar() {
    return (
        <header className={s.header}>
            <div className={s.container}>
                <Link to="/" className={s.branding}>
                    <p>Super Generic Company Branding</p>
                </Link>
                <nav className={s.navlinks}>
                    <Link to="/menu">Menu</Link>
                    {/* Search */}
                    <Link to="/cart">Cart</Link>
                    <Link to="/account">Account</Link>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;
