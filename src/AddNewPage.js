import React from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {   faArrowDownUpAcrossLine, faCartShopping, faChevronDown, faIdBadge, faSearch, faShop } from '@fortawesome/free-solid-svg-icons';
import { faBell, faBookmark, faCompass, faSave } from '@fortawesome/free-solid-svg-icons';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping, faCalendarCheck, faLocation, faLocationDot, faUserGroup ,faPlusCircle} from '@fortawesome/free-solid-svg-icons'

const AddNewPage = () => {
  return (
    <div>
    <nav>
    <div className='nav-front'>
    <img  src='images\images\HobbyCue Logo v2 1.png' className='logo1' />
    
    <input placeholder='Search here..'  className='search-bar'/><FontAwesomeIcon className='search-icon' icon={faSearch} />
    
    </div>
    <div className='nav-end'>
    <h3 ><FontAwesomeIcon icon={faCompass} className='composs'/>Explore <FontAwesomeIcon icon={faChevronDown}/>
     </h3>
    <img src='images\images\Hobbies.png'  className='star'/><h3>   Hobbies <FontAwesomeIcon icon={faChevronDown}/></h3>
    <FontAwesomeIcon className='nav-icons' icon={ faBookmark }/>
    <FontAwesomeIcon className='nav-icons' icon={faBell}/>
    <FontAwesomeIcon className='nav-icons' icon={faCartShopping}/>
    <img src='images\images\Ellipse 23.png' className='profile-img' /> <FontAwesomeIcon className='down' icon={faChevronDown}/>
    
    </div>
   
    
</nav>
<div className='big-container'>
<div className='container201'>
  <div className='top-plus'>
  <FontAwesomeIcon className='plus' icon={faPlusCircle} /><h3>Add your Listening</h3>
  </div>

    <div className='box-12'>
        <div className='boxes21'>
            <div className='box-topic'><FontAwesomeIcon className='people2' icon={faUserGroup}/>
            <h3>People</h3>
            </div>
            
            <p>Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator</p>
            <button>Connect</button>
        </div>
        <div className='boxes22'>
            <FontAwesomeIcon className='place' icon={faLocationDot} /><h3>Place</h3>
            <p>Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue.</p>
            <button>Meet up</button>
        </div>
    </div>
    <div className='box-22'>
       <div className='boxes23'>
            <FontAwesomeIcon  className='product'icon={faCartShopping} /><h3>Product</h3>
            <p>Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members</p>
            <button>Get it</button>
        </div>
        <div className='boxes24'>
            <FontAwesomeIcon className='program' icon={faCalendarCheck} /><h3>Program</h3>
            <p>Find events, meetups and workshops related to your hobby.  Register or buy tickets online.</p>
            <button>Attend</button>
        </div>
    </div>
    </div>
  
</div>
</div>
  )
}

export default AddNewPage