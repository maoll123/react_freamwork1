import react from 'react';
import { Link  } from 'react-router-dom';

function Navbar() {
    return (
    <nav>
        <ul>
          <li> <Link to="/">home</Link> </li> 
           <li> <Link to="/produk">produk</Link> </li>
            <li> <Link to="/kategori">kategori</Link> </li>    
        </ul>
        
    </nav>
    );
};
export default Navbar;