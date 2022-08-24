import React from 'react'
import { Link } from 'react-router-dom';
import { BiCameraMovie, BiSearchAlt2 } from 'react-icons/bi'

import './styles.scss';

const Navbar = () => {
  return (
    <>
        <nav className='navbar'>
            <h2>
                <Link to="/"><BiCameraMovie />TopCine</Link>
            </h2>
            <form>
                <input type="text" placeholder='Buscar filme' />
                <button type='submit'>
                    <BiSearchAlt2 />
                </button>
            </form>
        </nav>
    </>
  )
};

export default Navbar;