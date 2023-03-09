import {
    faCarSide,
    faTruckMoving,
    faBus,
    faBusSimple,
    faMotorcycle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.scss";
import React from "react";

const Header = () => {

    return (
        <div className="header">
            <div className="headerContainer">
                <div className="headerList">
                    <div className="headerListItem active">
                        <FontAwesomeIcon icon={faCarSide} />
                        <span>Car</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faTruckMoving} />
                        <span>LR Light rigid</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBus} />
                        <span>MR Medium rigid</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faBusSimple} />
                        <span>HR Heavy rigid</span>
                    </div>
                    <div className="headerListItem">
                        <FontAwesomeIcon icon={faMotorcycle} />
                        <span>Motorcycles R</span>
                    </div>
                </div>
                <div className="search">
                    <div className="searchInput">
                        <img src="images/search.png" alt="" />
                        <input type="text" placeholder='Search by Post Code"' />
                    </div>
                    <button>Search</button>
                </div>
            </div>
        </div>
    )
}

export default Header