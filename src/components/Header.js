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
            <h1>storeName</h1>
          </div>
          <div className='flex w-20 align-center mr-35'>
            <IoLocationOutline className='header-icon access-icon' />
            <div>
              <p className='header-p-title'>address</p>
              <p>123 Notre Dame Ave, Somewhere, CA</p>
            </div>
          </div>
          <div className='flex w-20 align-center'>
            <BsTelephone className='header-icon access-icon' />
            <div>
              <p className='header-p-title'>phone</p>
              <p>(+0061) 3457 83 84</p>
            </div>
          </div>
          <div className='flex justify-right'>
            <CiSearch className='header-icon access-icon' />
            <Link to='/form'>
              <MdManageAccounts className='header-icon access-icon' />
            </Link>
            <PiShoppingCart className='header-icon access-icon' />
            <p>$0.00</p>
          </div>
        </section>
        <div className='divisor'></div>
        <nav className='flex space-between'>
          <ul className='flex'>
            <li>home</li>
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
