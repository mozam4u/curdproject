import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, styled, Typography } from '@mui/material';
import { addUser } from '../service/api';
import { useNavigate } from 'react-router-dom';



//here create default object here and pout valus here
const initialValue = {
    name: '',
    username: '',
    email: '',
    phone: ''
}

const Container = styled(FormGroup)`
    width: 50%;
    margin: 5% 0 0 25%;
    & > div {
        margin-top: 20px;
`;

const AddUser = () => {
        //now we will send single objext for  all the 4 input values/paramerters
        //so that it  data will passed in the backend /call api here
        //here we are react hooks
        //user state becoz it is user informa
        //pass default value=0

    const [user, setUser] = useState(initialValue);
    const { name, username, email, phone } = user;
    
    let navigate = useNavigate();
//here I have used onchange function>
//also used' e' event what has happen here>
    const onValueChange = (e) => {
            //e.target=create as a key,it will use as name,email,number
            //now spread the inital value variable
            //object gives key :value now -when key and value both are variable then put in squre bracket
       //e.target.name means the names will enterd and filled here only
       //e.values. only values will bw put here
       //used spread( so that old values will remian there)
            setUser({...user, [e.target.name]: e.target.value})
    }

    //here we have to call api in adduserdeatils so to  create api functions
    //for that we will create Service Api
    const addUserDetails = async() => {
        await addUser(user);
        navigate('/all');
    }

    return (
        <Container>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Username</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='username' value={username} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input"/>
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                    {/* onclick= we capture the button when  it  is clicked */} 
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add User</Button>
            </FormControl>
        </Container>
    )
}

export default AddUser;