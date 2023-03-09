import React from 'react'
import Header from "../../components/header/Header"
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/categoryCard/CatCard";
import SchoolCard from "../../components/schoolCard/SchoolCard";
import { cards, schools } from "../../data";
import "./Home.scss"

function Home() {
    return (
        <div className='home'>
            <Header />
            <h1 className="homeTitle">Browse by licence type</h1>
            <Slide slidesToShow={5} arrowsScroll={5}>
                {cards.map((card) => (
                    <CatCard key={card.id} card={card} />
                ))}
            </Slide>
            <h1 className="homeTitle">F . A . Q</h1>
            <div className="features">
                <div className="container">
                    <div className="item">
                        {/* <h1>Driving Schools Directory App</h1> */}
                        <div className="title">
                            <img src="./images/check.png" alt="" />
                            The best for every budget in Brisbane
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat porro ducimus, officia, culpa repellendus!
                        </p>
                        <div className="title">
                            <img src="./images/check.png" alt="" />
                            Why this App?
                        </div>
                        <p>
                            Suscipit excepturi quos voluptates, aliquid et temporibus magni sapiente delectus necessitatibus mollitia modi sequi officiis tempore
                        </p>
                        <div className="title">
                            <img src="./images/check.png" alt="" />
                            Amazing feedback from customers
                        </div>
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit a voluptates eaque.
                        </p>
                        <div className="title">
                            <img src="./images/check.png" alt="" />
                            24/7 support
                        </div>
                        <p>
                            Find high-quality services at every price point. No hourly rates,
                            just project-based pricing.
                        </p>
                    </div>
                    <div className="item">
                        <video src="./images/videoClip.mp4" controls />
                    </div>
                </div>
            </div>
            <h1 className="homeTitle">Top rated classes</h1>
            <Slide slidesToShow={4} arrowsScroll={4}>
                {schools.map((card) => (
                    <SchoolCard key={card.id} card={card} />
                ))}
            </Slide>

        </div>
    )
}

export default Home