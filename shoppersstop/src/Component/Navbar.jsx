import React, { useEffect, useState } from 'react'
import "../Component/Navbar.css"
const Navbar = () => {
    // state use for UI 
    const [isshown, setIsshown] = useState(false);//login logout modal
    const [iscategory, setIsCategory] = useState(false); //category  dropwown
    const [user, setUser] = useState({ name: '', email: '', password: '' }) // user register
    console.log(user);
    const [userLogin, setUserLogin] = useState({ email: '', password: "" }); // user login
    console.log(userLogin)
    // const router = useNavigate()
    const isUserRegistered = JSON.parse(localStorage.getItem("Users")) !== null; //check register



    const openlogin = () => {
        setIsshown(true);//login logout
        document.body.style.overflow = 'hidden';

    }
    const openCategory = () => {
        setIsCategory(true);

    }
    const closelogin = () => {
        setIsshown(false);
        document.body.style.overflow = 'unset';
    }
    const closeCategory = () => {
        setIsCategory(false);
    }
    const handleChangeregister = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value })

    }
    const handleChangeLogin = (event) => {
        setUserLogin({ ...userLogin, [event.target.name]: event.target.value })
    }


    const handleSubmitregister = (event) => {
        event.preventDefault()
        if (user.name && user.email && user.password) {
            const array = JSON.parse(localStorage.getItem("Users")) || [];
            const obj = { name: user.name, email: user.email, password: user.password }
            array.push(obj);
            localStorage.setItem("Users", JSON.stringify(array));
            // setUser({ name: '', email: '', password: '' });
            // setUserLogin({ email: '', password: '' });
            alert("registration successful")
            // router("/login")
        } else {
            alert("fill all credential first")
        }
    }
    const handleSubmitLogin = (event) => {
        event.preventDefault()

        if (userLogin.email && userLogin.password) {
            const user = JSON.parse(localStorage.getItem("Users"));
            // const currentUser = JSON.parse(localStorage.getItem("Current-User"));
            if (user) {
                let flag = false;
                for (let i = 0; i < user.length; i++) {
                    if (user[i].email == userLogin.email && user[i].password == userLogin.password) {
                        flag = true;
                        break;
                    }
                }
                if (flag == false) {
                    return alert("please check the credential");
                }
                alert("login successful")
                localStorage.setItem("Current-User", JSON.stringify(userLogin));
                setIsshown(false)
            } else {
                alert("no records found")
                window.confirm("need to register first")
                // router("/register")
            }

        }
        else {
            alert("please submit all details")
        }
    }

    const handleSubmitLogout = () => {
        const currentUser = JSON.parse(localStorage.getItem("Current-User"));
        if (currentUser) {
            localStorage.removeItem("Current-User");
            alert("user logged out");
            setIsshown(false);
        }
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
                            <input placeholder='Search ' />
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
                        <div className='navbar-icon-area' onMouseOver={openlogin} onClick={handleSubmitLogout} >
                            {!userLogin.email? <i class="fa-regular fa-user fa-xl"></i> :
                                <p style={{ color: "black" }}>{user?.name}logout</p>}
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
            {isshown ? <div id="model">
                {/* small login screen   */}
                {!isUserRegistered ? (< div id="sign-screen" >
                    {/* inside login black area  */}
                    <div id="banner-within-sign">
                        <div id="banner-sign-align">
                            <div>
                                <p id="skip" onClick={closelogin}><i class="fa-solid fa-xmark fa-xl"></i></p>
                            </div>
                            <div>
                                <h1 id="log-title">Signup</h1>
                                <p id="log-sub-title">for Tailored experience</p>
                            </div>
                        </div>
                    </div>
                    {/* form area */}
                    <div id="login-form-area">
                        <form onSubmit={handleSubmitregister}>
                            <div><input placeholder='Name' name="name" type="text" onChange={handleChangeregister} value={user.name} /></div>
                            <div><input placeholder='Email' name="email" type="email" onChange={handleChangeregister} value={user.email} /></div>
                            <div><input placeholder='Password' name="password" type="password" onChange={handleChangeregister} value={user.password} /></div>
                            <input id="submit-btn" type="submit" value="Continue" />
                        </form>
                    </div>
                </div>) :
                    (<div id="sign-screen" >
                        {/* inside login black area  */}
                        <div id="banner-within-sign">
                            <div id="banner-sign-align">
                                <div>
                                    <p id="skip" onClick={closelogin}><i class="fa-solid fa-xmark fa-xl"></i></p>
                                </div>
                                <div>
                                    <h1 id="log-title">Login</h1>
                                    <p id="log-sub-title">for Tailored experience</p>
                                </div>
                            </div>
                        </div>
                        {/* form area */}
                        <div id="login-form-area">
                            <form onSubmit={handleSubmitLogin}>
                                <div><input placeholder='Email' name="email" type="email" onChange={handleChangeLogin} value={userLogin.email} /></div>
                                <div><input placeholder='Password' name="password" type="password" onChange={handleChangeLogin} value={userLogin.password} /></div>
                                <input id="submit-btn" type="submit" value="Continue" />
                            </form>
                            <p id="terms-after-sign">By signing up you agree to our Terms of Service & Privacy Policy</p>
                        </div>
                    </div>)}
            </div> : null}
        </div>
    )
}

export default Navbar
