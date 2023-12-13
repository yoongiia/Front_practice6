import React, {useState, useEffect} from "react";

const CurrentDate = (props) => {
    const[currentDate, setCurrentDate] = useState(props.dateObj);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentDate(new Date());
    },10000)
    return ()=> clearInterval(interval)
}, [])

return(
    <div>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>{currentDate.toDateString()}</p>
    </div>


    )
}

export default CurrentDate
