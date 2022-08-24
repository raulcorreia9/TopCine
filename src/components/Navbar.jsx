import React from 'react'
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <h2>
                <Link to="/"><BiCameraMovie />TopCine</Link>
            </h2>
        </nav>
        <form>
            <input type="text" placeholder='Buscar filme' />
            <button type='submit'>
                <BiSearchAlt2 />
            </button>
        </form>
    </>
  )
};

export default Navbar;