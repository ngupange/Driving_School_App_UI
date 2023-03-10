import React from 'react'
import './AddSession.scss'
function AddSession() {
    return (
        <div className="add">
            <div className="container">
                <h1>Add New Class / Session</h1>
                <div className="sections">
                    <div className="info">
                        <label htmlFor="">Title</label>
                        <input
                            type="text"
                            placeholder="Driving School Name"
                        />
                        <label htmlFor="">Post Code</label>
                        <input type="text" placeholder="Post Code" />
                        <label htmlFor="">Licence Category</label>
                        <select name="cats" id="cats">
                            <option value="Class C">Class C</option>
                            <option value="Class LR">Class LR</option>
                            <option value="Class MR">Class MR</option>
                            <option value="Class HR">Class HR</option>
                            <option value="Class R">Class R</option>
                        </select>
                        <label htmlFor="">Instructor Name</label>
                        <input type="text" placeholder="Post Code" />
                        <label htmlFor="">Instructor Image</label>
                        <input type="file" />
                        <label htmlFor="">Upload car / School Images</label>
                        <input type="file" multiple />
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" placeholder="Brief descriptions about your service to customers" cols="0" rows="16"></textarea>
                        <button>Create</button>
                    </div>
                    <div className="details">
                        <label htmlFor="">Time Start</label>
                        <input type="text" placeholder="Start from" />
                        <label htmlFor="">Time Finish</label>
                        <input type="text" placeholder="finishing time" />
                        <label htmlFor="">Short Description</label>
                        <textarea name="" id="" placeholder="Short description of your service" cols="30" rows="10"></textarea>
                        <label htmlFor="">Add Features</label>
                        <input type="text" placeholder="e.g. Pick up" />
                        <input type="text" placeholder="e.g. Water to drink" />
                        <input type="text" placeholder="e.g. High passing rate" />
                        <input type="text" placeholder="e.g. hosting" />
                        <label htmlFor="">Price</label>
                        <input type="number" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddSession