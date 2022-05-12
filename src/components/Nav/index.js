import React, { useState } from 'react';

function Nav (props) {
    const {
        categories = [],
        currentCategory,
        setCurrentCategory
    } = props;
    const [navbarShowing, setNavbarShowing] = useState(false);

    return (
        <header className="d-flex navbar justify-content-start m-2 mx-3">
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