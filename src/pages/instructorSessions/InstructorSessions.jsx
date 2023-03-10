import React from 'react'
import { Link } from "react-router-dom";
import './InstructorSessions.scss'

function InstructorSessions() {

    // Hard coded data
    const currentUser = {
        id: 1,
        username: "Pam",
        isInstructor: true,
    };

    return (
        <div className="insessions">
            <div className="container">
                <div className="title">
                    <h1>{currentUser.isInstructor ? "Sessions" : "Received Bookings"}</h1>
                    {currentUser.isInstructor && (
                        <Link to="/add">
                            <button>Add New Session</button>
                        </Link>
                    )}
                </div>
                <table>
                    <tr>
                        <th>Session_Id</th>
                        <th>Main Suburb</th>
                        <th>Post Codes</th>
                        <th>Price</th>
                        <th>Start</th>
                        <th>End</th>
                        <th>Vehicle Type</th>
                        <th>Car Image</th>
                        <th>Instructor</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    <tr>
                        <td>01</td>
                        <td>Greater Brisbane</td>
                        <td>4001, 4002, 4005, 4010</td>
                        <td>69.<sup>99</sup></td>
                        <td>07:00 A.M</td>
                        <td>08:00 A.M</td>
                        <td>Toyota Colora</td>
                        <td>
                            <img
                                className="image"
                                src="https://images.unsplash.com/photo-1610768207795-72169abdf0d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"
                                alt=""
                            />
                        </td>
                        <td>Jimmy Gatoma</td>
                        <td>
                            <img
                                className="image"
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                        </td>
                        <td>
                            <img className="delete" src="./images/delete.png" alt="" />
                        </td>
                    </tr>

                    <tr>
                        <td>02</td>
                        <td>South Brisbane</td>
                        <td>4032, 4045, 4030, 4025</td>
                        <td>49.<sup>99</sup></td>
                        <td>08:30 A.M</td>
                        <td>10:00 A.M</td>
                        <td>Honda Vitara</td>
                        <td>
                            <img
                                className="image"
                                src="https://images.unsplash.com/photo-1550355291-bbee04a92027?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                                alt=""
                            />
                        </td>
                        <td>Jimmy Gatoma</td>
                        <td>
                            <img
                                className="image"
                                src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                alt=""
                            />
                        </td>
                        <td>
                            <img className="delete" src="./images/delete.png" alt="" />
                        </td>
                    </tr>

                    <tr>
                        <td>03</td>
                        <td>East Brisbane</td>
                        <td>4041</td>
                        <td>69.<sup>99</sup></td>
                        <td>07:00 A.M</td>
                        <td>08:00 A.M</td>
                        <td>Harvey Davinson</td>
                        <td>
                            <img
                                className="image"
                                src="https://images.unsplash.com/photo-1515777315835-281b94c9589f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1212&q=80"
                                alt=""
                            />
                        </td>
                        <td>Kalisa Kamikazi</td>
                        <td>
                            <img
                                className="image"
                                src="https://images.unsplash.com/photo-1677509537840-20ea56137081?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80"
                                alt=""
                            />
                        </td>
                        <td>
                            <img className="delete" src="./images/delete.png" alt="" />
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}

export default InstructorSessions