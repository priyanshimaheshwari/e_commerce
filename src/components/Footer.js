import React from 'react'
import {TbExchange} from 'react-icons/tb'
import {RiHandHeartFill,RiVisaFill} from 'react-icons/ri'
import {BsFillBagCheckFill,BsCashStack} from 'react-icons/bs'
import {FaCcMastercard} from 'react-icons/fa'

const Footer = () => {
  return (
    <div >
        <div className='py-[20px] flex justify-between px-[40px] '>
            <div><TbExchange size={90} className='pl-5'/>
            <p className=' text-2xl'>Easy Exchange</p></div>
            <div><RiHandHeartFill size={90} className='pl-5'/><p className=' text-2xl'>100% Handpicked</p></div>
            <div ><BsFillBagCheckFill size={90} className='pl-5'/><p className=' text-2xl'>Assured Quality</p></div>
           </div>
           <div className='bg-indigo-900'>
           <div className='text-white flex justify-between px-5'>
                <div><p className='font-bold'>BUY ME</p>
                    <ul className='py-2 '>
                        <li><button>Who We Are</button></li>
                        <li><button>Join Our Team</button></li>
                        <li><button>Terms & Conditions</button></li>
                        <li><button>We Respect Your Privacy</button></li>
                        <li><button>Fees & Payments</button></li>
                        <li><button>Returns & Refunds Policy</button></li>
                        <li><button>Promotions Terms & Conditions</button></li>
                      </ul>
                </div>

                <div><p className='font-bold'>Help</p>
                    <ul className='py-2 '>
                        <li><button>Track Your Order</button></li>
                        <li><button>Frequently Asked Questions</button></li>
                        <li><button>Returns</button></li>
                        <li><button>Cancellations</button></li>
                        <li><button>Payments</button></li>
                        <li><button>Customer Care</button></li>
                        <li><button>How Do I Reedem My Coupon</button></li>
                      </ul>
                </div>

                <div><p className='font-bold'>Shop By</p>
                    <ul className='py-2 '>
                        <li><button>Men</button></li>
                        <li><button>Women</button></li>
                        <li><button>Kids</button></li>
                        <li><button>Indie</button></li>
                        <li><button>Stores</button></li>
                        <li><button>New Arrivals</button></li>
                        <li><button>Brand Directory</button></li>
                        <li><button>Home</button></li>
                        <li><button>Collections</button></li>
                      </ul>
                </div>

                <div><p className='font-bold'>Follow Us</p>
                    <ul className='py-2 '>
                        <li><button>Facebook</button></li>
                        <li><button>Instagram</button></li>
                        <li><button>Twitter</button></li>
                        <li><button>Pinterest</button></li>
                        
                      </ul>
                </div>
                </div>
                <div className='border border-white '></div>
                <div className='text-white text-2xl py-3 '>Payment Methods</div>
                <div className='flex '>
                <div className='text-white text-2xl px-10'>Net <span className='bg-white text-indigo-800 '>Banking</span></div>
                <div className='px-10'><RiVisaFill size={50} className='bg-white'/></div>
                <div className='px-10'><FaCcMastercard size={50} className='bg-white'/></div>
                <div className='pl-16'><BsCashStack size={50} className='bg-white'/><p className='text-white'>Cash On Delivery</p></div>
        </div>
        </div>
    </div>
  )
}

export default Footer