import React,{useState,useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Label,Button} from 'reactstrap'

function ThankYou (props) {

    const userData = useSelector(state => state.user);
  
    useEffect(() => {
      console.log(userData)
    }, [])
  
    return userData.loading ? (
      <h2>Loading</h2>
    ) : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        
        <div style={{display:"flex"}} >
          <Label>Thank You </Label><h4> " {userData ? userData.name : null} " </h4><Label> for visiting your password is </Label><h4> " {userData ? userData.password : null} " </h4>
        </div>
              <Button color="info" style={{margin:"16px 0px 0px 16px "}} onClick={()=>props.history.push("/user")} >Back</Button>
</div>
    )
  }
  
  export default ThankYou