import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const TimeParts = ({ eventTime }) => {
    const [days, setDays] = useState();
    const [hours, setHours] = useState();
    const [mins, setMins] = useState();
    const [secs, setSecs] = useState();

    let sampleDate = new Date(eventTime).getTime();

    useEffect(() => {
        const timeID = setInterval(() => {
            let now = new Date().getTime();
            let distance = sampleDate - now;
            setDays(Math.floor(distance / (1000 * 60 * 60 * 24)));
            setHours(
                Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            );
            setMins(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
            setSecs(Math.floor((distance % (1000 * 60)) / 1000));

        }, 1000);
        return () => clearInterval(timeID);
    }, []);

    return (
        <>
            <Box
                bgcolor="#64748b"
                color="#fff"
                padding="5px"
                borderRadius="5px"
                width="45px"
            >
                <Typography>{days}</Typography>
                <Typography>Days</Typography>
            </Box>
            <Box
                bgcolor="#64748b"
                color="#fff"
                padding="5px"
                borderRadius="5px"
                width="45px"
            >
                <Typography>{hours}</Typography>
                <Typography>Hours</Typography>
            </Box>
            <Box
                bgcolor="#64748b"
                color="#fff"
                padding="5px"
                borderRadius="5px"
                width="45px"
            >
                <Typography>{mins}</Typography>
                <Typography>Mins</Typography>
            </Box>
            <Box
                bgcolor="#64748b"
                color="#fff"
                padding="5px"
                borderRadius="5px"
                width="45px"
            >
                <Typography>{secs}</Typography>
                <Typography>Secs</Typography>
            </Box>
        </>
    )
}

export default TimeParts
