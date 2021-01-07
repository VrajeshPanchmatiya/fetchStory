import { Box, Container, Typography } from '@material-ui/core';
import React from 'react';
import {useSelector} from 'react-redux';
import '../App.css';
const GetAestroidDetail = () =>{
    //useSelector to get data from Reducer
    const details = useSelector((state)=>{
        return state.data
    })
    return (
        <div className='div'>
            <Box className='cont'>
            <h1>Aestroid Details</h1>
            <Typography>Name: {details?.name}</Typography>
            <Typography>URL: {details?.nasa_jpl_url}</Typography>
            <Typography>is_potentially_hazardous_asteroid: {details?.is_potentially_hazardous_asteroid?'true':'false'}</Typography>
            </Box>           
        </div>
    )
}
export default GetAestroidDetail