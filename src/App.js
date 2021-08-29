/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useMemo} from 'react'
import { useSelector, useDispatch } from "react-redux";
import {Input, Button} from '@material-ui/core/';

import "./App.css";
import { decNumber, incNumber, getData } from "./actions/index";
import CustomizedTables from "./components/table";

const App = () => {
  const myState =  useSelector((state)=> state.changeNumber);
  const myUserInfo =  useSelector((state)=> state.getUserInfo);
  const dispatch = useDispatch();

  // useMemo hook - for optimization 
  const incCount = useMemo(()=>{
    console.log(" 1111111111111111111111111111111 ")
    return (
      myUserInfo && myUserInfo.length > 0 &&
          <CustomizedTables users={myUserInfo}/>
    )
  },[myUserInfo && myUserInfo.length > 0])

  return (
    <div className='container'>
      <h1>Welcome to My first react redux app</h1>
      <div className='quantity'>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={ () => dispatch(decNumber()) }
        >
          -
        </Button>
        <Input color='primary' value={myState}/>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={ () => dispatch(incNumber()) }
        >
          +
        </Button>
      </div>
      <div className='thunk'>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={ () => dispatch(getData()) }
        >
          Get Data
        </Button>
      </div>
      {incCount}
      {/* {
        myUserInfo && myUserInfo.length > 0 &&
          <CustomizedTables users={myUserInfo}/>
      } */}
      
    </div>
  )
}

export default App
