import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import "../Review/Reviewbook.css"
import { toast, ToastContainer } from 'react-toastify';

export default function Reviewbook() {

    const UserToken = localStorage.getItem("UserToken")
    const location = useLocation()
    const [val, setVal] = useState({
        review: ""
    })
    const [reviewdata, Setreviewdata] = useState([])
    const change = (e) => {
        let { name, value } = e.target
        setVal({ ...val, [name]: value })
    }
    const history = useNavigate();
    const submitReview = () => {
        if (UserToken == null) {
            history("/login", { state: { heading: "User" } });
            // push({ pathname: "/login" })
        }
        else {
            val.authorname = location.state.curElem.authorname
            val.bookId = location.state.curElem._id

            axios.post("https://bookmanagment-fullstack.vercel.app/createreview", val)
            // axios.post("http://localhost:3001/createreview", val)
                .then((res) => {
                    if (res.status === 200)
                        toast.success("Review added successfully!")
                    window.location.reload()
                })
        }
    }
    const Getreviewdata = () => {
        axios.get(`https://bookmanagment-fullstack.vercel.app/getreview/${location.state.curElem._id}`)
        // axios.get(`http://localhost:3001/getreview/${location.state.curElem._id}`)
            .then((res) => {
                  console.log(res.data);
                if (res.status === 201)
                    Setreviewdata(res.data)
            }).catch((err) => {
                console.log(err);
            })
    }
    useEffect(() => {
        Getreviewdata()
    }, [])
    // console.log(location.state.curElem);
    return (
        <>
            <div style={{ display: "flex", marginLeft: "20px" }} >
                <div className="leftbox">
                    <img style={{ height: "280px", width: "210px" }} src={location.state.curElem.link} alt="" />
                </div>
                <div className='mid-box' >
                    <h1 style={{ fontFamily: "initial", marginTop: "-30px" }}  >{location.state.curElem.title}</h1>
                    <div className="book">
                        <div className="fitem">By</div>
                        <div className="fitem" style={{ color: "blue" }}>{location.state.curElem.authorname}</div>
                        <div className="fitem"> Released At</div>
                        <div className="fitem" style={{ color: "blue" }}> {location.state.curElem.releasedAt}</div>
                        <div className="fitem"> Cateory</div>
                        <div className="fitem" style={{ color: "blue" }}> {location.state.curElem.category}</div>
                    </div>
                    <div className="book1">
                        <div className="bitem">{location.state.curElem.excerpt}</div>
                    </div>
                    <div className="book2">
                        <div className="bitem">{location.state.curElem.reviews}</div>
                        <div className="bitem">ratings</div>
                    </div>
                </div>
                {/* <div className="right-box">
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                    Sushant
                </div> */}
            </div>
            <h3 style={{ marginTop: "25px" }}>  Products related to this item </h3>
            <div className="display-book" key={location.state.data._id} >
                {location.state.data.map((data, index) => {
                    return (
                        <div key={index} >
                            <div className="show-book">
                                <img style={{ height: "200px", width: "150px" }} src={data.link} alt="" onClick={() => {

                                    history("/reviewbook", {
                                        state: {
                                            curElem: data,
                                            data: location.state.data
                                        }
                                    })
                                    window.location.reload()
                                }} />
                            </div>
                            <p className='book-name'>{data.title}</p>
                        </div>)
                })}
            </div>

            <h3 style={{ textAlign: "center" }}>How would you rate your experience for books ?</h3>
            <div style={{ marginLeft: "30px" }}>
                <h5 style={{ color: "black" }}>Submit Book Review</h5>
                <input className='btn1' type="text" name='review' onChange={change} value={val.review} />
                <button className='btn2' onClick={submitReview}
                >
                    Write a Book review
                </button>

            </div>
            <div className="reviewbox" >
                {
                    reviewdata.map((data) => {
                        return (<div className="reviewitem" key={data._id}>
                            <h5 style={{ color: "black" }}>{data.reviewedBy}</h5>
                            <p style={{ color: "black" }}>{data.review}</p>
                            <div className="review-button">
                                <button onClick={() => {
                                    axios.put(`https://bookmanagment-fullstack.vercel.app/delete-review/${data._id}`)
                                    // axios.put(`http://localhost:3001/delete-review/${data._id}`)
                                        .then((res) => {
                                            if (res.status === 201) {
                                                window.location.reload()
                                                setTimeout(() => {
                                                    toast.success("Review Deleted successfully!")
                                                }, 1000)

                                            }
                                        }).catch((err) => {
                                            console.log(err);
                                        })
                                }}>Delete</button>
                                <button >Update</button>
                            </div>
                        </div>)
                    })
                }

            </div>
            <ToastContainer position='top-right' />
        </>

    )
}
