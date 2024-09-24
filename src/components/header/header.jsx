import "./Header.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/store'
import Modal from "../Model/logout";
function Header() {
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false)
    console.log("isHamburgerOpen", isHamburgerOpen)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogoutModel = () => {
        setIsModelOpen(!isModelOpen)
    }
    console.log(`menue-${isHamburgerOpen ? 'open' : ''}`)
    const handleHamburger = () => {
        console.log('cliecked')
        setIsHamburgerOpen(!isHamburgerOpen)
    }
    const handleLogout = () => {
        dispatch(logout())
        navigate('/login')
    }
    return (
        <div className='main-header'>
            <div className="menue-items">
                <p>My Orders</p>
                <p>My Appointments</p>
                <p>My Payments</p>
                <p>Contact Us</p>
            </div>

            {/* <div className='menue-open'  >
                <input type="text"
                    placeholder="Search"
                />
                <div className="hamburger" style={{ cursor: 'pointer', marginLeft: '10px' }}>
                    <a href="javascript:void(0);" onClick={handleHamburger}>
                        <i class="fa fa-bars"></i>
                    </a>

                </div>
            </div>   */}

            <div className="searchBox">
                <input className="inputinput" type="text"
                    placeholder="Search"
                // style={{ width: '530px',  padding: '0 10px', height: '40px', 'border-radius': '5px' }}
                />
            </div>
            <div style={{ cursor: 'pointer', marginLeft: '20px' }}>
                <img
                    src="/ic_logout.8bcac3ce.png"
                    alt="Logout"
                    onClick={handleLogoutModel}
                    style={{ width: '40px', height: '40px' }}
                />
            </div>
            <div style={{ cursor: 'pointer', marginLeft: '20px' }}>
                <img
                    src="profilePlaceholderIcon.3785a8ea.svg"
                    alt="Profile"
                    style={{ width: '40px', height: '40px' }}
                />
            </div>

            <Modal isOpen={isModelOpen} onClose={handleLogoutModel} message="Are you sure you want to logout?"
                title="Confirm Logout">

                <button onClick={handleLogout} className="btn-primary">Yes, Logout</button>
                <button onClick={handleLogoutModel} className="btn-secondary">Cancel</button>
            </Modal>
        </div >


    )
}
export default Header

{/* <div className='menue-open'  > */ }
//    <input type="text"
//    placeholder="Search"
// />
// <div className="hamburger" style={{ cursor: 'pointer', marginLeft: '10px' }}>
//    <a href="javascript:void(0);" onClick={handleHamburger}>
//        <i class="fa fa-bars"></i>
//    </a>

// </div>
{/* </div> */ }