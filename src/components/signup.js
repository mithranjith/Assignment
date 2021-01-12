import React from 'react'
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import {MODEL} from './api';
import FormBuilder from './dynamicForm/formBuilder';
import {connect} from 'react-redux'
import { postUsers } from '../redux'


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://www.product.com/">
        www.product.com
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function SignUp(props) {
  
  const models = MODEL;
  const [state,setState] = React.useState({});

  const handleChange = (name,value) => {
    // console.log({name:name,value:value})
    setState({...state,[name]:value})
    
  }
  
  React.useEffect(()=>{
    console.log(models)
  })

  return (
    <FormBuilder title="Sign Up" model={models} onChange={handleChange} onClick={()=>{props.postUsers(state)}}/>
  );
}

const mapStateToProps = state => {
  return {
    userData: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    postUsers:(data)=> dispatch(postUsers(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp)