import { FaFacebook, FaPinterest, FaInstagram, FaYoutube, FaTiktok } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <footer>
        <section className='footer-links'>
          <div className='container'>
            <div className='footer-divisor'></div>
            <div className='footer-row flex gap-20'>
              <div className='footer-subscription w-40'>
                <h1>Enjoy C$ 30 OFF*</h1>
                <input 
                  type='text' 
                  placeholder='Enter your email'
                  className='footer-email-input'
                  maxLength={25} 
                />
                <button className='footer-join'>Join Us</button>
                <p>on your C$90 purchase when you sign up for emails.</p>
              </div>
              <div className='w-20'>
                <h3>About</h3>
                <ul>
                  <li>About Us</li>
                  <li>Careers</li>
                  <li>Group</li>
                  <li>Foundation</li>
                  <li>Stores</li>
                  <li>Sitemap</li>
                </ul>
              </div>
              <div className='w-20'>
                <h3>Customer Care</h3>
                <ul>
                  <li>Order Status</li>
                  <li>Warranty</li>
                  <li>Product Registration</li>
                  <li>Returns & Exchanges</li>
                  <li>Support & FAQs</li>
                  <li>Gift/Shopping Services</li>
                </ul>
              </div>
              <div className='w-20'>
                <h3>Social Media</h3>
                <div className='flex footer-socials'>
                  <FaFacebook />
                  <FaXTwitter />
                  <FaPinterest />
                  <FaInstagram />
                  <FaYoutube />
                  <FaTiktok />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='footer-copyright flex align-center'>
          <ul className='flex container'>
            <li className='main-copyright ta-left'>&copy;2024 storeName, inc</li>
            <li className='ta-right w-18'>Privacy Policy</li>
            <li className='ta-right w-18'>APP Privacy Policy</li>
            <li className='ta-right w-18'>Terms of Use</li>
            <li className='ta-right w-18'>Accessibility Statement</li>
          </ul>
        </section>
      </footer>
    </>
  )
}

export default Footer
