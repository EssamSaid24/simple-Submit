import React from 'react';
import { useState } from 'react';
const Form = () => {

    const [name, setName] = useState('');
    const [password, setPassword] = useState('male');
    const [gender, setGender] = useState('');

    const nameHandler = (value) => {
        setName(value);
    }
    const passwordHandler = (value) => {
        setPassword(value);
        
    }
    const genderHandler = (value) => {
        setGender(value);
        
    }
    return (
        <form onSubmit= {(eo) => {
            eo.preventDefault();
            console.log(name);
            console.log(password);
            console.log(gender);
        }} > 
            <label>Name</label>
            <input placeholder='Name' type='text' onChange={(event) => {
                nameHandler(event.target.value);
            }}></input>
            <br></br>

            <label>Password</label>
            <input placeholder='Password' type='Password' onChange={(event) => {
                passwordHandler(event.target.value);
            }}></input>
            <br></br>

            <label>Gender</label>
            <select  onChange={(event) => {
                genderHandler(event.target.value);
                
            }}> 
                  <option value=''>Select Gender</option>   
                <option value='male'>Male</option>
                <option value='female'>Female</option>
            </select>
            <br></br>

            <button type='submit'>Submit</button>
        </form>

    );
}

export default Form;
