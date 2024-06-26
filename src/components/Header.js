import { CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";
import { PiShoppingCart } from "react-icons/pi";
import { IoLocationOutline } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <header className='container'>
        <section className='flex'>
          <div className='store-title'>
            <Link to='/' className="home-link">
              <h1>fashion fusion</h1>
            </Link>
          </div>
          <div className='flex w-22 align-center mr-35'>
            <IoLocationOutline className='header-icon access-icon' />
            <div>
              <p className='header-p-title'>address</p>
              <p>123 Notre Dame, CA</p>
            </div>
          </div>
          <div className='flex w-22 align-center'>
            <BsTelephone className='header-icon access-icon' />
            <div>
              <p className='header-p-title'>phone</p>
              <p>(+0061) 3457 83 84</p>
            </div>
          </div>
          <div className='center justify-center w-22'>
            <div className='flex justify-right'>
              <CiSearch className='header-icon access-icon' />
              <Link to='/form'>
                <MdManageAccounts className='header-icon access-icon' />
              </Link>
              <Link to='/cart'>
                <PiShoppingCart className='header-icon access-icon' />
              </Link>
              <div className='flex align-center'>
                <p>$0.00</p>
              </div>
            </div>
          </div>
        </section>
        <div className='divisor'></div>
        <nav className='flex space-between'>
          <ul className='flex'>
            <Link to='/' className="home-link">
              <li>home</li>
            </Link>
            <li>shop</li>
            <li>product</li>
            <li>pages</li>
          </ul>
          <div className='flex'>
            <p className='lang-p'>english</p>
            <RiArrowDropDownLine className='lang-icon access-icon'/>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header;
