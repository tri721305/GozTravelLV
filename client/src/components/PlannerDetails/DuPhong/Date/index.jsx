import React from 'react';
import './index.css';

const DisplayDate = () => {
    const d = new Date();
    const days = ["Sunday","Monday", "Tueday", "Wedneday", "Thursday", "Friday", "Saturday"];
    const months = ["January","February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const day = days[d.getDay()];
    const date = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    return (
        <div className="Date">
            <h1 className="Date__day">{day}</h1>
            <h5 className="Date__full-date">{`${month} ${date}, ${year}`}</h5>
        </div>
    )
}
 
export default DisplayDate;