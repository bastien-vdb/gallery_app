import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Grid from './components/Grid';
import Update from './components/Update';
import Footer from './components/Footer';

function App() {

  const [pictures, setPictures] = useState([]);
  const [menuToDisplay, setMenuToDisplay] = useState('home');

  const fetchingData = ()=> {
    fetch('http://localhost:3000/api/')
      .then(success => success.json().then(success => {
        setPictures(success);
      })
        .catch(err => console.log(err.message)))
      .catch(err => console.log(err.message));
  }

  useEffect(() => {
    fetchingData();
  }, [])

  return (
    <div className='h-full w-full'>
      <header>
        <h1 className="py-4 text-center">
          <a href="/" className="text-xl font-bold text-gray-700 cursor-pointer">Gallery APP using Node, Express, Multer React and MongoDB</a>
        </h1>
        <nav className="mt-6">
          <ul className="flex justify-center  items-center space-x-4">
            <li><div onClick={() => {setMenuToDisplay('home')}} className="cursor-pointer text-md font-semibold text-gray-600 hover:text-gray-800">Home</div></li>
            <li><div onClick={() => setMenuToDisplay('update')} className="cursor-pointer text-md font-semibold text-gray-600 hover:text-gray-800">Uploading</div></li>
          </ul>
        </nav>
      </header>

      {menuToDisplay==='home' ? <Grid apiResult={pictures} /> : <Update apiResult={pictures} />}
      <Footer />
    </div>
  );
}

export default App;
