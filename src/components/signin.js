import React,{useState} from 'react'
import {useSelector, useDispatch} from 'react-redux';
import {
  Input,
  Label,
  Button
} from 'reactstrap'
import './signin.css'

function Signin(props) {
  
  const [userName,setUserName] = useState('');
  const [userNameError,setUserNameError] = useState('');
  const [Password,setPassword] = useState('');
  const [PasswordError,setPasswordError] = useState('');
  const [errorText,setErrorText] = useState('')
  const dispatch = useDispatch()
  const handleUserName = ({value}) => {
    
    if(value.length < 3) {
      setUserNameError('Please enter name with atleast 3 characters')
      setUserName(value)
    }
    else{
      setUserNameError('')
      setUserName(value)
    }
    
  }

  const handlePassword = ({value}) => {
    if(value.length < 6) {
      setPasswordError('Please enter name with atleast 6 characters')
      setPassword(value)
    }
    else{
      setPasswordError('')
      setPassword(value)
    }
    
  }

  const login = () =>{
    if(userNameError || PasswordError) return setErrorText("Please fill al required fields")
    dispatch({type: 'CHANGE_USER', payload: {name:userName,password:Password}})
    props.history.push(`/user`)
  }

  return (
    <div style={{margin:"auto"}} >
      <div className='field-container' >
        <Label>UserName</Label>
        <Input className='filed-style' name="userName" value={userName} onChange={e=>handleUserName(e.target)} />
        
      </div>
{userNameError &&<span style={{marginLeft:"16px",color:"red"}} > {userNameError} </span>}
      <div className='field-container'>
        <Label>Password</Label>
        <Input className='filed-style' type="password" name="userName" value={Password} onChange={e=>handlePassword(e.target)} />
        
      </div>
{PasswordError &&<span style={{marginLeft:"16px",color:"red"}}> {PasswordError} </span>}
    <div style={{margin:"16px"}} >
      <Button color="success" onClick={login} >Login</Button> <Button color="danger" >Cancel</Button>
    </div>
{errorText &&<span style={{marginLeft:"16px",color:"red"}}> {errorText} </span>}
    
    </div>
  );
}

export default Signin