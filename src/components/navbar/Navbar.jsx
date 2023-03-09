import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss"

const Navbar = () => {
    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const { pathname } = useLocation();

    const isActive = () => {
        window.scrollY > 0 ? setActive(true) : setActive(false);
    };

    useEffect(() => {
        window.addEventListener("scroll", isActive);
        return () => {
            window.removeEventListener("scroll", isActive);
        };
    }, []);

    // Hard coded data for testing

    const currentUser = {
        id: 1,
        username: "Pam",
        isInstructor: true,
    };

    return (
        <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
            <div className="container">
                <Link className="logoBox link" to="/">
                    <img className="logo" src="/images/logo.png" alt="Driving School App Logo" />
                </Link>
                <div className="links">
                    <span>Explore</span>
                    <span>English</span>
                    {!currentUser?.isInstructor && <span>Become an Instructor</span>}
                    {currentUser ? (
                        <div className="user" onClick={() => setOpen(!open)}>
                            <img
                                src="/images/pp1.jpg"
                                alt="profile picture"
                            />
                            <span>{currentUser?.username}</span>
                            {open && <div className="options">
                                {currentUser.isInstructor && (
                                    <>
                                        <Link className="link" to="/mysessions">
                                            My Sessions
                                        </Link>
                                        <Link className="link" to="/school/:id">
                                            View My School
                                        </Link>
                                    </>
                                )}
                                <Link className="link" to="/bookings">
                                    Bookings
                                </Link>
                                <Link className="link" to="/messages">
                                    Messages
                                </Link>
                                <Link className="link" to="/">
                                    Logout
                                </Link>
                            </div>}
                        </div>
                    ) : (
                        <>
                            <Link>Sign in</Link>
                            <Link className="link" to="/register">
                                <button>Join</button>
                            </Link>
                        </>
                    )}
                </div>
            </div>
            {(active || pathname !== "/") && (
                <>
                    <hr />
                    <div className="menu">
                        <Link className="link menuLink" to="/">
                            C. Car
                        </Link>
                        <Link className="link menuLink" to="/">
                            LR. Light Rigid
                        </Link>
                        <Link className="link menuLink" to="/">
                            MR. Medium Rigid
                        </Link>
                        <Link className="link menuLink" to="/">
                            HR. Heavy Rigid
                        </Link>
                        <Link className="link menuLink" to="/">
                            R. Motorcycles
                        </Link>
                    </div>
                    <hr />
                </>
            )}
        </div>
    )
}

export default Navbar