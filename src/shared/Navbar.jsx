import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import AuthContext from "../context/AuthContext/AuthContext";
import logo from '../assets/logo.gif';

const Navbar = () => {
    const { user, signOutuser } = useContext(AuthContext);

    const handleSignOut = () => {
        signOutuser()
            .then(() => {
                console.log('Succesfully sign out');
            })
            .catch(error => console.log(error))
    }
    const links = <>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/jobs'}>All Job</NavLink></li>
        <li><NavLink to={'/myApplications'}>My Application</NavLink></li>
        <li><NavLink to={'/addJob'}>Add Job</NavLink></li>
        <li><NavLink to={'/myPostedJobs'}>My Posted Jobs</NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">
                    <img className="w-8 h-8 object-cover" src={logo} alt="" />
                    <h1>Job Portal</h1>
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <>
                        <button onClick={handleSignOut} className="btn">Sign Out</button>
                    </> :
                        <>
                            <Link to={'/register'} className="btn">Register</Link>
                            <Link to={'/signin'} className="btn">Signin</Link>
                        </>
                }
            </div>
        </div>
    );
};

export default Navbar;