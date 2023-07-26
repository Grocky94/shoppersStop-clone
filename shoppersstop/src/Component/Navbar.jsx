import React, { useState } from 'react'
import "../Component/Navbar.css"
const Navbar = () => {
    // state use for UI 
    const [isshown, setIsshown] = useState(false);//login logout
    const [iscategory, setIsCategory] = useState(false); //category 

    const openlogin = () => {
        setIsshown(true);//login logout

    }
    const openCategory = () => {
        setIsCategory(true);

    }
    const closelogin = () => {
        setIsshown(false);
    }
    const closeCategory = () => {
        setIsCategory(false);
    }


    return (
        <div>
            <nav>
                <div id="navbar-inner">
                    <div id="navbar-left-category">
                        <div id="categories" onMouseEnter={openCategory} onMouseLeave={closeCategory}>CATEGORIES</div>
                        <div id="luxe">L U X E</div>
                        <div id="bargains">BARGAINS</div>
                    </div>
                    <div id="navbar-logo">
                        <img src="https://prodstatic.shoppersstop.com/_ui/updated_path/images/shopperstopimgaes_web/newLogo.svg" alt="" />
                    </div>
                    <div id="navbar-search-login-area">
                        <div id="search-input-area">
                            <input />
                            <div id="magni-icon">
                                <img src="data:image/svg+xml,%0A%3Csvg width='26' height='26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M11.781 3.86a7.922 7.922 0 1 0 0 15.843 7.922 7.922 0 0 0 0-15.844zm-9.14 7.921a9.14 9.14 0 1 1 18.28 0 9.14 9.14 0 0 1-18.28 0z' fill='%23000' stroke='%23000' stroke-width='.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M17.382 17.383a.61.61 0 0 1 .862 0l4.936 4.936a.61.61 0 1 1-.862.862l-4.936-4.936a.61.61 0 0 1 0-.862z' fill='%23000' stroke='%23000' stroke-width='.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A" alt="" />
                            </div>
                        </div>
                        <div className='navbar-icon-area'>
                            <i class="fa-regular fa-heart fa-xl"></i>
                        </div>
                        <div className='navbar-icon-area'>
                            <i class="fa-solid fa-bag-shopping fa-xl"></i>
                        </div>
                        <div className='navbar-icon-area' onMouseOver={openlogin}>
                            <i class="fa-regular fa-user fa-xl"></i>
                        </div>
                    </div>
                </div>
                {iscategory && <div id="category-dropdown" onMouseEnter={openCategory} onMouseLeave={closeCategory}>
                    <div id="inner-category-dropdown">
                        <div>MEN</div>
                        <div>WOMEN</div>
                        <div>BEAUTY</div>
                        <div>WATCHES</div>
                        <div>KIDS</div>
                        <div>HOMESTOP</div>
                        <div>GIFTS</div>
                        <div>BRANDS</div>
                    </div>
                </div>}
            </nav>
            {/* entire screen  for login */}
            {isshown ? <div id="model" >
                {/* small login screen   */}
                <div id="sign-screen" >
                    {/* inside login black area  */}
                    <div id="banner-within-sign">
                        <div id="banner-sign-align">
                            <div>
                                <p id="skip" onClick={closelogin}><i class="fa-solid fa-xmark fa-xl"></i></p>
                            </div>
                            <div>
                                <h1 id="log-title">Login/Signup</h1>
                                <p id="log-sub-title">for Tailored experience</p>
                            </div>
                        </div>
                    </div>
                    {/* form area */}
                    <div id="login-form-area">
                        <form>
                            <div><input placeholder='Name' type="text" /></div>
                            <div><input placeholder='Email' type="email" /></div>
                            <div><input placeholder='Password' type="password" /></div>
                            <input id="submit-btn" value="Continue" />
                        </form>
                        <p id="terms-after-sign">By signing up you agree to our Terms of Service & Privacy Policy</p>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}

export default Navbar
