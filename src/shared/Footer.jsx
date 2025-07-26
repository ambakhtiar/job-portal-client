import logo from '../assets/logo.gif';

const Footer = () => {
    return (
        <footer className="footer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-base-200 text-base-content p-10">
            <aside>
                <img className="w-16 object-cover" src={logo} alt="" />
                <h2 className='text-3xl font-bold'>Job Portal</h2>
                <p>Providing reliable tech since 1992</p>
            </aside>
            <nav>
                <h6 className="footer-title">Services</h6>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
                <h6 className="footer-title">Company</h6>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
                <h6 className="footer-title">Legal</h6>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </nav>
        </footer>
    );
};

export default Footer;