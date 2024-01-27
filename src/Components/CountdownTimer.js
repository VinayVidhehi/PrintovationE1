import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
    const calculateTimeRemaining = () => {
        const deadline = new Date();
        deadline.setHours(deadline.getHours() + 40); // Add 40 hours to the current time

        const currentTime = new Date();
        const difference = deadline - currentTime;

        if (difference <= 0) {
            return {
                hours: '00',
                minutes: '00',
                seconds: '00'
            };
        }

        const hours = Math.floor(difference / (1000 * 60 * 60));
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);

        return {
            hours: hours < 10 ? `0${hours}` : hours,
            minutes: minutes < 10 ? `0${minutes}` : minutes,
            seconds: seconds < 10 ? `0${seconds}` : seconds
        };
    };

    const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeRemaining(calculateTimeRemaining());
        }, 1000);

        return () => clearTimeout(timer);
    }, [timeRemaining]);

    return (
        <div>
            <h2>Countdown Timer</h2>
            <div>
                <p>{timeRemaining.hours}:{timeRemaining.minutes}:{timeRemaining.seconds}</p>
            </div>
        </div>
    );
};

export default CountdownTimer;
