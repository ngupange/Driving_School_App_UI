import React from "react";
import "./Session.scss";
import { Slider } from "infinite-react-carousel/lib";

function Session() {
    return (
        <div className="session">
            <div className="container">
                <div className="left">
                    <span className="breadcrumbs">DSDApp &gt; Class &gt;</span>
                    <h1>Amani Driving School</h1>
                    <div className="user">
                        <img
                            className="pp"
                            src="https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fERyaXZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <span>Pam Ngenzi</span>
                        <div className="stars">
                            <img src="/images/star.png" alt="" />
                            <img src="/images/star.png" alt="" />
                            <img src="/images/star.png" alt="" />
                            <img src="/images/star.png" alt="" />
                            <img src="/images/star.png" alt="" />
                            <span>5</span>
                        </div>
                    </div>
                    <Slider slidesToShow={1} arrowsScroll={1} className="slider">
                        <img
                            src="https://images.unsplash.com/photo-1593035013811-2db9b3c36980?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fERyaXZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                            alt=""
                        />
                        <img
                            src="https://images.unsplash.com/photo-1578041262130-633307b3bfd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                        <img
                            src="https://images.unsplash.com/photo-1619721865905-72ec8bc4dbcf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                            alt=""
                        />
                    </Slider>
                    <h2>About us</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum quasi porro culpa repellendus provident quas possimus blanditiis, tempore consequuntur officiis, velit rem fuga perferendis aspernatur corrupti quo non deserunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum quasi porro culpa repellendus provident quas possimus blanditiis, tempore consequuntur officiis, velit rem fuga perferendis aspernatur corrupti quo non deserunt.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis earum quasi porro culpa repellendus provident quas possimus blanditiis, tempore consequuntur officiis, velit rem fuga perferendis aspernatur corrupti quo non deserunt.
                    </p>
                    <div className="instructor">
                        <h2>About The instructor</h2>
                        <div className="user">
                            <img
                                src="https://images.unsplash.com/photo-1626565244872-206f4c1f9e57?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fERyaXZlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                                alt=""
                            />
                            <div className="info">
                                <span>Pam Ngenzi</span>
                                <div className="stars">
                                    <img src="/images/star.png" alt="" />
                                    <img src="/images/star.png" alt="" />
                                    <img src="/images/star.png" alt="" />
                                    <img src="/images/star.png" alt="" />
                                    <img src="/images/star.png" alt="" />
                                    <span>5</span>
                                </div>
                                <button>Contact Me</button>
                            </div>
                        </div>
                        <div className="box">
                            <div className="items">
                                <div className="item">
                                    <span className="title">Covered Postcodes</span>
                                    <span className="desc">4000, 4020/ 4125, 4220, 4110, 4008</span>
                                </div>
                                <div className="item">
                                    <span className="title">Member since</span>
                                    <span className="desc">Aug 2022</span>
                                </div>
                                <div className="item">
                                    <span className="title">Driving Test Passing rate</span>
                                    <span className="desc">99.5 %</span>
                                </div>
                                <div className="item">
                                    <span className="title">Bookings</span>
                                    <span className="desc">5000 bookings</span>
                                </div>
                                <div className="item">
                                    <span className="title">Languages</span>
                                    <span className="desc">English</span>
                                </div>
                                <div className="item">
                                    <span className="title">Car type</span>
                                    <span className="desc">Toyota Camry</span>
                                </div>
                            </div>
                            <hr />
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam recusandae quas accusamus obcaecati incidunt velit animi eius, vero placeat quos officia explicabo eveniet quidem! Repellendus ducimus fuga molestias veritatis sunt.
                            </p>
                        </div>
                    </div>
                    <div className="reviews">
                        <h2>Reviews</h2>
                        <div className="item">
                            <div className="user">
                                <img
                                    className="pp"
                                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                    alt=""
                                />
                                <div className="info">
                                    <span>Garner David</span>
                                    <div className="country">
                                        <img
                                            src="https://images.unsplash.com/photo-1563698876759-5388be71113b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi provident ducimus qui accusantium excepturi iure sit commodi amet quis quasi laboriosam eos nisi eaque dignissimos quos, quod debitis suscipit totam.
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/images/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/images/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img
                                    className="pp"
                                    src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>Sidney Owen</span>
                                    <div className="country">
                                        <img
                                            src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                                            alt=""
                                        />
                                        <span>Germany</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam placeat nesciunt autem praesentium, sunt nostrum doloremque voluptatem, enim, reiciendis maxime eius earum veritatis. Similique, exercitationem doloribus suscipit architecto esse labore!
                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/images/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/images/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                        <hr />
                        <div className="item">
                            <div className="user">
                                <img
                                    className="pp"
                                    src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                                    alt=""
                                />
                                <div className="info">
                                    <span>Lyle Giles </span>
                                    <div className="country">
                                        <img
                                            src="https://images.unsplash.com/photo-1563698876759-5388be71113b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                                            alt=""
                                        />
                                        <span>United States</span>
                                    </div>
                                </div>
                            </div>
                            <div className="stars">
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <img src="/images/star.png" alt="" />
                                <span>5</span>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quas, tenetur alias vero eum eos quibusdam itaque. Dolore quo nostrum alias eos reiciendis quisquam commodi temporibus, pariatur esse sapiente porro?

                            </p>
                            <div className="helpful">
                                <span>Helpful?</span>
                                <img src="/images/like.png" alt="" />
                                <span>Yes</span>
                                <img src="/images/dislike.png" alt="" />
                                <span>No</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="price">
                        <h3>Class C</h3>
                        <h2>$ 60</h2>
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, minima aut laborum tenetur accusantium labore fugiat harum odio iure cum ullam similique voluptates veritatis nihil perspiciatis doloribus, placeat nam delectus.
                    </p>
                    <div className="details">
                        <div className="item">
                            <img src="/images/clock.png" alt="" />
                            <span>1 hour sessions</span>
                        </div>
                        <div className="item">
                            <img src="/images/recycle.png" alt="" />
                            <span>3 Sessions</span>
                        </div>
                    </div>
                    <div className="features">
                        <div className="item">
                            <img src="/images/greencheck.png" alt="" />
                            <span>I will come to your address</span>
                        </div>
                        <div className="item">
                            <img src="/images/greencheck.png" alt="" />
                            <span>Drop you off</span>
                        </div>
                        <div className="item">
                            <img src="/images/greencheck.png" alt="" />
                            <span>Offer Water </span>
                        </div>
                        <div className="item">
                            <img src="/images/greencheck.png" alt="" />
                            <span>Check review</span>
                        </div>
                    </div>
                    <button>Book Me</button>
                </div>
            </div>
        </div>
    );
}
export default Session

