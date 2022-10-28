import React from 'react';

function Header({setShowGrid}) {
    return (
        <header>
            <h1 className="bg-white py-4 text-center">
                <a href="/" className="text-xl font-bold text-gray-700 cursor-pointer">Gallery APP using Node, Express, Multer React and MongoDB</a>
            </h1>
            <nav className="mt-6">
                <ul className="flex justify-center  items-center space-x-4">
                    <li><a href="/" className="text-md font-semibold text-gray-600 hover:text-gray-800">Home</a></li>
                    <li><div onClick={()=>setShowGrid(!setShowGrid)} className="cursor-pointer text-md font-semibold text-gray-600 hover:text-gray-800">Uploading</div></li>
                    <li><a href="/about" className="text-md font-semibold text-gray-600 hover:text-gray-800">About</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;