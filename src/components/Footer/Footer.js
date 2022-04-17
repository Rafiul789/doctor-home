import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div>
            
<footer className="bg-gray-800">
<div className="grid grid-cols-2 gap-8 py-8 px-6 md:grid-cols-4">
<div>
<h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Company</h2>
<ul className="text-gray-300">
<li className="mb-4">
<Link to="/" className=" hover:underline">About</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Careers</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Brand Center</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Blog</Link>
</li>
</ul>
</div>
<div>
<h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Help center</h2>
<ul className="text-gray-300">
<li className="mb-4">
<Link to="/" className="hover:underline">Discord Server</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Twitter</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Facebook
</Link></li><Link to="/" className="hover:underline">
</Link><li className="mb-4"><Link to="/" className="hover:underline">
</Link><Link to="/" className="hover:underline">Contact Us</Link>
</li>
</ul>
</div>
<div>
<h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Legal</h2>
<ul className="text-gray-300">
<li className="mb-4">
<Link to="/" className="hover:underline">Privacy Policy</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Licensing</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Terms &amp; Conditions</Link>
</li>
</ul>
</div>
<div>
<h2 className="mb-6 text-sm font-semibold text-gray-400 uppercase">Download</h2>
<ul className="text-gray-300">
<li className="mb-4">
<Link to="/" className="hover:underline">iOS</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Android</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">Windows</Link>
</li>
<li className="mb-4">
<Link to="/" className="hover:underline">MacOS</Link>
</li>
</ul>
</div>
</div>
<div className="py-6 px-4 bg-gray-700 md:flex md:items-center md:justify-between">
<span className="text-sm text-gray-300  md:text-center">© 2022 <Link to="/">DoctorHome™</Link>. All Rights Reserved.
</span>

</div>
</footer>

        </div>
    );
};

export default Footer;