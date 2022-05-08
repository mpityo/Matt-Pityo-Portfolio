import React, { useState } from 'react';

function Nav () {
    const categories = ['About me', 'Projects', 'Contact', 'Resume'];

    const [currentCategory, setCurrentCategory] = useState(categories[0]);
    const [navbarShowing, setNavbarShowing] = useState(false);

    return (
        <header className="d-flex navbar">
                <button className='hamburger' onClick={() => setNavbarShowing(!navbarShowing)}>
                    <div></div><div></div><div></div>
                </button>
                {navbarShowing ? (
                    <div>
                    <ul className='navbar-nav flex-row'>
                    {categories.map((category) => (
                        <li className={`mx-2 nav-item ${
                            currentCategory === category && 'active'}`} key={category}>
                            <span onClick={() => {
                                setCurrentCategory(category);
                                }}>
                                {category}
                            </span>
                        </li>
                    ))}
                    </ul>
                    </div>
                ) : (<></>)}
        </header>
    );
}

export default Nav;