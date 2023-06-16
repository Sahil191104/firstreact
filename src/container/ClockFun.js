import React, { useEffect, useState } from 'react';
import { Button } from 'reactstrap';

function ClockFun(props) {
    //1.
    const [time, setTime] = useState(new Date());

    const tick = () => {
        setTime(new Date());
    }
    //Hooks: useEffect()
    useEffect(() => {
        //3. componentDidMount
        //4. componentDidUpdate
        let timedata = setInterval(tick, 1000);

        return () => {
            //6. componentWillUnmount
            clearInterval(timedata);
        }

    }, [time]);

    //2. //4.
    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
            <Button color="danger">Danger!</Button>
        </div>
    );
}

export default ClockFun;