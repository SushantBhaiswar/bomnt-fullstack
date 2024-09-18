import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import "./header.css"
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from '../redux/store'

function NavScrollExample() {
    const { user, isAuthenticated } = useSelector((state) => state)
    const [anchorEl, setAnchorEl] = useState(null);
    const [searchval, setSearchval] = useState("")
    const redirect = useNavigate()
    const dispatch = useDispatch()
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {

        localStorage.removeItem("token")
        localStorage.removeItem("user")
        localStorage.removeItem("isAuthenticated")
        dispatch(logout())
        redirect("/")

    }

    const Search = () => {
        redirect("/", { state: searchval })
    }
    return (

        <Navbar className='head'>
            {console.log(user?.role?.[0] + user?.role?.slice(1))
            }            <Container fluid>
                <Navbar.Brand href="/">BOMNT</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {user?.role == 'auther' ?
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '90px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={() => {
                                redirect("/createbook", { state: { title: "", heading: "Register your Book" } })

                            }} >CREATE BOOK</Nav.Link>

                        </Nav> : null
                    }
                </Navbar.Collapse>

                <Button onClick={() => {
                    redirect("/register", { state: { heading: user?.role?.[0] + user?.role?.slice(1) } })
                }} className="me-3">{user.role == 'auther' ? 'User' : 'Auther'} Register</Button>
                <Button onClick={() => {
                    redirect("/login", { state: { heading: user?.role?.[0] + user?.role?.slice(1) } })
                }} className="me-3">{user.role == 'auther' ? 'User' : 'Auther'} Login</Button>

                <Form className="search" onChange={(e) => {
                    setSearchval(e.target.value)
                }} value={searchval} >
                    <Form.Control
                        type="search"
                        placeholder="Search"
                        className="me-2"
                        aria-label="Search"
                    />
                </Form>
                <Button variant="success" onClick={Search}>
                    search
                </Button>
                <div className="avatar">
                    <Avatar style={{ background: "blue" }} onClick={handleClick} />
                </div>
                <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}

                    id="basic-menu"
                    MenuListProps={{
                        'aria-labelledby': 'basic-button',
                    }}>
                    <MenuItem onClick={() => {
                        handleLogout()
                        handleClose()
                    }} >Logout</MenuItem>
                </Menu>
            </Container>
        </Navbar >
    )
}

export default NavScrollExample;