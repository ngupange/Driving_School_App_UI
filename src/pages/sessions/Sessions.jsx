import React, { useRef, useState } from "react";
import "./Sessions.scss";
import { sessions } from "../../data";
import SessionCard from "../../components/sessionCard/SessionCard";

function Sessions() {
    const [sort, setSort] = useState("sales");
    const [open, setOpen] = useState(false);
    const minRef = useRef();
    const maxRef = useRef();

    const reSort = (type) => {
        setSort(type);
        setOpen(false);
    };

    const apply = () => {
        console.log(minRef.current.value)
        console.log(maxRef.current.value)
    }

    return (
        <div className="sessions">
            <div className="container">
                <span className="breadcrumbs">DSDApp &gt; Class &gt;</span>
                <h1>Session</h1>
                <p>
                    Explore all available classes and compare.
                </p>
                <div className="menu">
                    <div className="left">
                        <span>Budget</span>
                        <input ref={minRef} type="number" placeholder="min" />
                        <input ref={maxRef} type="number" placeholder="max" />
                        <button onClick={apply}>Apply</button>
                    </div>
                    <div className="right">
                        <span className="sortBy">Sort by</span>
                        <span className="sortType">
                            {sort === "sales" ? "Best Selling" : "Rating"}
                        </span>
                        <img src="./images/down.png" alt="" onClick={() => setOpen(!open)} />
                        {open && (
                            <div className="rightMenu">
                                {sort === "sales" ? (
                                    <span onClick={() => reSort("createdAt")}>Rating</span>
                                ) : (
                                    <span onClick={() => reSort("sales")}>Best Selling</span>
                                )}
                                <span onClick={() => reSort("location")}>Suburb</span>
                            </div>
                        )}
                    </div>
                </div>
                <div className="cards">
                    {sessions.map((sess) => (
                        <SessionCard key={sess.id} item={sess} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Sessions;
