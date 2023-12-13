import React, {useState, useEffect} from "react";

const CurrentTime = (props) => {
    const[currentTime, setCurrentTime] = useState(props.dateObj);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setCurrentTime(new Date());
    }, 1000)
    return ()=> clearInterval(interval)
}, [])

return(
    <div>
        <p style={{fontSize:"20px", fontWeight:"bold"}}>{currentTime.toLocaleTimeString()}</p>
    </div>


    )
}

export default CurrentTime
