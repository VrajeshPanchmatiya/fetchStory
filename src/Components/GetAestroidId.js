import {Box, Button, TextField } from '@material-ui/core';
import React,{useState} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {AestroidAction} from '../Actions/AestroidAction';
import {getRandomId} from '../Actions/getRandomId';
import {getIdService} from '../Services/getIdService';
import {Link} from 'react-router-dom';
import '../App.css';
const GetAestroidId = () =>{
  const [id,setId] = useState('');
  const dispatch = useDispatch(); 
  const getId = (e) =>{
        setId(e.target.value);
    }
    //Dispatch Aestroid Id 
    const Aestroid=()=>{
        dispatch(AestroidAction(id))
     }
     //getRandomArbitrary is used to fetch number between minimum and maximum
     function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }
    // fetching random value and dispatching
     const Random=async()=>{
           const details = await getRandomId()
           const info = Math.ceil(Math.abs((getRandomArbitrary(0,details.length-1))));
           dispatch(AestroidAction(details[info]));
           
        }
    // Form to get ID
    return (
        <div className='div'>
            <Box className='cont'>
            <div style={{margin:'10px'}}>
            <TextField name={id}  onChange={getId}/>
            </div>
            <Link to='/GetAestroidDetail'>
            <Button variant='contained' type="submit" disabled={id===''}  onClick={Aestroid}>AestroidId</Button>
            <Button variant='contained' onClick={Random}>Random</Button>
            </Link>
            </Box>
        </div>
    )
}
export default GetAestroidId;