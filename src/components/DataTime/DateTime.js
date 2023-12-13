import React from 'react';
import CurrentDate from './CurrentDate/CurrentDate';
import CurrentTime from './CurrentTime/CurrentTime';
const DateTime = () => {
    const dataTime = new Date()
    return (
        <div style={{margin:'30px', alignSelf:'center'}}>
            <CurrentDate dateObj = {dataTime}/>
            <CurrentTime dateObj = {dataTime}/>
        </div>
    );
}

export default DateTime;
