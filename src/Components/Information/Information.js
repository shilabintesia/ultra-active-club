import React, { useEffect, useState } from 'react';
import './Information.css'
import pic from '../../shilasia.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Information = (props) => {
    const notify = () => toast("Congratulations!!! You have Completed the task!!");
    const [breakTime, setBreakTime] = useState('')
    const onClickbtn = event => {
        const newTime = event.target.innerText
        setBreakTime(newTime)
        localStorage.setItem('break-time', newTime)
    }
    useEffect(() => {
        const localstorageData = localStorage.getItem('break-time')
        setBreakTime(localstorageData)
    }, [])




    const { newCarts } = props
    let totalTime = 0
    for (const newCart of newCarts) {
        console.log(newCart)
        totalTime = totalTime + newCart.time

    }


    return ( <
        div className = 'info' >

        <
        div className = 'profile-owner' >
        <
        img className = 'profile-pic'
        src = { pic }
        alt = "" / >
        <
        div >
        <
        h5 > Name: Shila Binte Sia < /h5> <
        p > Pabna, Rajshahi < /p> < /
        div > <
        /div>

        <
        div className = 'owner-info' >
        <
        div >
        <
        h4 > 55 kg < /h4> <
        p > Weight < /p> < /
        div > <
        div >
        <
        h4 > 25 Yrs < /h4> <
        p > Age < /p> < /
        div > <
        div >
        <
        h4 > 5.5 < /h4> <
        p > Height < /p> < /
        div > <
        /div>

        <
        div className = 'exercise' >
        <
        h2 > Add A Break < /h2> <
        div className = 'btn-area' >
        <
        button onClick = { (e)=> onClickbtn(e) }
        className = 'btn-minute-10' > < p > 10 min < /p> </button >
        <
        button onClick = { (e)=> onClickbtn(e) }
        className = 'btn-minute-20' > < p > 20 min < /p></button >
        <
        button onClick = { (e)=> onClickbtn(e) }
        className = 'btn-minute-30' > < p > 30 min < /p></button >
        <
        button onClick = { (e)=> onClickbtn(e)}
        className = 'btn-minute-40' > < p > 40 min < /p></button >
        <
        /div>

        <
        /div>

        <
        div className = 'exercise' >
        <
        h1 > Exercise Details < /h1> <
        div className = 'exercise-area1' >
        <
        p > Exercise Time: { totalTime } < small > Minutes < /small></p >
        <
        /div> <
        div className = 'exercise-area2' >
        <
        p > Break Time: {breakTime}< small > Minutes < /small></p >
        <
        /div>

        <
        /div>


        <
        div className = 'btn-completed' >
        <
        button onClick = { notify }
        className = 'btn-activity' >
        <
        p > Activity Completed < /p> < /
        button > <
        ToastContainer / >
        <
        /div>

        <
        /div>
    );
};

export default Information;

