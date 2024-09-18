import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Model from "../Model/Model"
import "./home.css"
import { toast, ToastContainer } from 'react-toastify';
import { SERVER_URI } from "../config/keys"
import { useSelector } from 'react-redux';
let categoryArr = ['Fiction & Literature', 'Personal Growth', 'Biography', 'Technology', 'Business & Career',]

// import Createbook from '../Createbook/createbook'

export default function Home() {
    const { user, isAuthenticated } = useSelector((state) => state)
    const [data, setData] = useState([])
    const redirect = useNavigate()
    const location = useLocation()
    const [modalShow, setModalShow] = React.useState(false);
    const [catagory, setCatagory] = React.useState("")

    const Authorid = localStorage.getItem("Authorid")
    const AuthorToken = localStorage.getItem("AuthorToken")
    const UserToken = localStorage.getItem("UserToken")
    //get all books data
    const GetData = async () => {

        await axios.get(`${SERVER_URI}/books`)
            // console.log( SERVER_URI );
            // await axios.get("http://localhost:3001/books")
            .then((res) => {
                if (res.status === 200) {
                    setData(res.data)
                }
            })
    }

    useEffect(() => {
        GetData()
    }, [])

    return (
        <div className='page'>
            {!isAuthenticated ?
                <>
                    <h1 style={{ color: "red", fontWeight: "800", marginLeft: "420px", fontSize: "1200" }}>
                        𝓑𝓸𝓸𝓴 𝓜𝓪𝓷𝓪𝓰𝓶𝓮𝓷𝓽</h1></> : null}
            <div className="home-box">
                {!isAuthenticated ?
                    <>
                        <div className="home-header">
                            <div className="home-header-button">
                                <button style={{ width: "190px" }} onClick={() => {
                                    redirect("/register", { state: { heading: "Author" } })
                                }}>Author Registration</button>
                                <button onClick={() => {
                                    redirect("/login", { state: { heading: "Author" } })
                                }}>Author Login</button>
                                <button style={{ width: "190px" }} onClick={() => {
                                    redirect("/register", { state: { heading: "User" } })
                                }}>User Registration</button>
                                <button onClick={() => {
                                    redirect("/login", { state: { heading: "User" } })
                                }}>User Login</button>
                            </div>
                        </div>
                    </> : null}

                <div className='filter-box'>
                    <div className="row1">
                        {
                        categoryArr?.map((obj) => {
                            return <button className='flbox-button1'
                                value={obj} onClick={(e) => { setCatagory(e.target.value) }} >
                                {obj}</button>
                        })}


                    </div>
                    <div className="row2">
                        <button className='flbox-button1'
                            value={"Environment"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Environment</button>
                        <button className='flbox-button1'
                            value={"Academic & Education<"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Academic & Education</button>
                        <button className='flbox-button1'
                            value={"Science & Research"} onClick={(e) => { setCatagory(e.target.value) }} >
                            Science & Research</button>
                    </div>

                </div>

                <div className="row mt-4" >
                    {console.log("data", data)}
                    {
                        data?.filter((el) => {
                            return (catagory !== "" || location.state !== null ? el.category === catagory
                                || el.title === location.state : el)
                        }).map((curElem) => {

                            const { title, _id, link, userId } = curElem;
                            return (
                                <div className="col-md-3" key={_id}  >
                                    <div className="box"  >

                                        <div className="home-image">
                                            <div className="image" onClick={() => {
                                                redirect("/reviewbook", {
                                                    state: {
                                                        curElem,
                                                        data
                                                    }
                                                })
                                            }} >
                                                <img src={link} alt=""
                                                    style={{
                                                        height: "270px", width: "200px",
                                                        boxShadow: "0 0 20px -10px #f6f6f6",
                                                    }} />
                                            </div>
                                        </div>
                                        <h5>{title}</h5>
                                        <div className='home-button'>
                                            <div className="container d-flex justify-content-between my-3">

                                                {user?.role == 'author' ?
                                                    <>
                                                        <button type="button" className="btn btn-dark mx-1" onClick={() => {
                                                            redirect("/createbook", { state: { heading: "Update Book", _id } })
                                                        }}  >
                                                            Update</button>
                                                        <Button variant="btn btn-dark mx-1"
                                                            onClick={() => {

                                                                axios.put(`${SERVER_URI}/deletebook/${_id}`)
                                                                    // axios.put(`http://localhost:3001/deletebook/${_id}`)
                                                                    .then((res) => {
                                                                        if (res.status === 200) {
                                                                            toast.success("Data deleted Successfully !")
                                                                            window.location.reload()
                                                                        }
                                                                    })

                                                            }}>
                                                            Delete
                                                        </Button>
                                                    </> : null
                                                }
                                                {/* {modalShow && <Model
                                                    show={modalShow}
                                                    onHide={async () => {
                                                        setModalShow(false)
                                                    }}
                                                    flose={
                                                        async () => {
                                                            console.log(_id);
                                                            await axios.put(`http://localhost:3001/deletebook/${_id}`)
                                                                .then((res) => {
                                                                    if (res.status === 200) {
                                                                        toast.success("Data deleted Successfully !")
                                                                    }
                                                                })
                                                            setModalShow(false)
                                                        }}
                                                />} */}
                                            </div>
                                        </div>
                                    </div>
                                </div>)
                        })}
                </div>
            </div>
            <ToastContainer position='top-right' />
        </div>
    )
}

