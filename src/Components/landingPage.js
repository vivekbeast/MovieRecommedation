import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { ImCross } from "react-icons/im";
import { TiThMenu } from "react-icons/ti";
import logo from '../images/vmovieslogo.png'
import { motion } from 'framer-motion';

const LandingPage = () => {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const mobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };
    const [currentPage, setCurrentPage] = useState(1);


    const [shows, setShows] = useState([]);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const limit = 10; 
          const response = await fetch(`https://api.tvmaze.com/shows?limit=${limit}&page=${currentPage}`);
          const data = await response.json();
          setShows(data);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, [currentPage]);








  return (
    <div className='App-header gap-5 justify-center'>
            <div className=' flex-col'>
    <nav className='flex items-center justify-between'>
      <div className='flex justify-center text-center items-center gap-3'>
      <img className='h-16 w-16 rounded-full shadow-xl' src={logo} alt="VMovies Logo" />        <motion.h1 
        initial={{ y: 10, opacity: 0, scale: 0.5 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        exit={{ y: 10, opacity: 0 }}
        transition={{ duration: 0.6 }}


        
        
        className='font-bold font-sans shadow-lg'>VMovies</motion.h1>
      </div>
      
      <div className='hidden md:flex'>
        <input type="text" className='mr-2 rounded-lg text-sm h-12 w-64 text-black' placeholder='Enter Movie/Show Names..' />
        <button className='bg-gray-500 text-md text-white px-4 py-1 rounded h-12 flex text-center'>Search</button>
      </div>

      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20
        }}

      
      className='md:hidden'>
        <TiThMenu className=' h-8 w-8' onClick={mobileMenu}/>

      </motion.div>

    </nav>
    <div className={`md:hidden flex flex-col items-center gap-5 ${mobileMenuOpen ? 'block' : 'hidden'}`}>
                <div className=' flex flex-col items-center font-semibold '><a href="/">Movies</a>
                <a href="/"  >Shows</a>
                <a href="/">Top Rated</a>
                <a href="/">About Us</a></div>
                <ImCross id='cross' className='h-6 w-6 ' onClick={mobileMenu} />
              
    
            </div>
  </div>
    <div className=' flex flex-col items-center'>
    <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  {shows.map((show) => {
    // const show = showData.show;
    return (
      <li className='flex flex-col items-center  p-4 rounded-lg shadow-lg ' key={show.id}>
        <Link to={`/shows/${show.id}`} state={{ show }}>
          {show.image && show.image.medium && (
            <motion.img
            initial={{ x: 50 , scale: 0 }}
        animate={{ x: 0  , rotate: 0, scale: 1 }}
        transition={{
          type: "zoom",
          stiffness: 90,
          damping: 10
        }}
            
            
            
            className="w-full object-cover rounded-md mb-4" src={show.image.medium} alt="not available" />
          )}
          <h2 className="text-lg font-semibold mb-2">{show.name}</h2>
        </Link>
        <hr className="w-full border-t border-gray-300" />
      </li>
    );
  })}
</ul>
    </div>
    <div className="flex justify-center mt-4">
    {currentPage > 1 && (
        <motion.button
          onClick={() => setCurrentPage(currentPage - 1)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="mr-2 bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300"
        >
          Less
        </motion.button>
      )}
      <motion.button
        onClick={() => setCurrentPage(currentPage + 1)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="bg-green-500 text-white px-4 py-2 rounded-md transition duration-300"
      >
        More
      </motion.button>
      </div>


  </div>
  )
}

export default LandingPage
