import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {Label,Button} from 'reactstrap'

function UsersContainer (props) {

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
        <Label>Welcome </Label><h4> " {userData ? userData.name : ""} " </h4>
      </div>
      <Button color="info" style={{margin:"16px 0px 0px 16px "}} onClick={()=>props.history.push("/thanks")} >Click here for more details</Button>
    </div>
  )
}

export default UsersContainer
