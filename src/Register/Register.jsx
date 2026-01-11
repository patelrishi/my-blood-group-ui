'use client'
import React, { useState } from 'react'
import './Register.css';
import axios from 'axios';
import { Ajax } from '../services/Ajax';

export const Register = () => {        // for clearing all inputs
    const [data, setData] = useState({name:'',age:'',weight:'',bloodgroup:'',mobile:'',location:''})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev,[name]:value}))
    }
    const handleClick = async (e) => {
          e.preventDefault();
          // this is preventing empty submit (without having any field not submit)
          const isEnterInputs = Object.values(data).some((value)=> value.trim() !== "");
          if(!isEnterInputs){
            alert('Please fill at least one field before submitting')
            return; //if u mention return below function not execute
          }
        try {
            
            const res = await Ajax.sendPostReq('/std/candidates', data,
                {
                    headers: { "Content-Type": "application/json" }
                }) 
            
            const { acknowledged, insertedId } = res?.data;
            
            if (acknowledged && insertedId) {
                alert('successfully Register') // clear all inputs
                setData({name:'',age:'',weight:'',bloodgroup:'',mobile:'',location:''})
                
            } else {
                alert('Registration fail')
            } 
        
        } catch (error) {
            console.log(error.message)
            alert("failed the Save")
        } 
    
    }
    console.log(data)
    return (
        <div className='register_main_container'>
            <div className='text1' >
                <p>Every drop of blood carries hope.<br />
                    One donation can save multiple lives in moments of need.<br />
                    Be the reason someone smiles tomorrow.</p>
            </div>
            <div className='form_container'>
                <h3>Registration Form</h3>
                <input type='text' name='name' value={data.name} onChange={handleChange} placeholder='Enter Name' />
                <input type='number' name='age' value={data.age} onChange={handleChange} placeholder='Enter Age' />
                <input type='number' name='weight' value={data.weight} onChange={handleChange} placeholder='Enter Weight' />
                <input type='text' name='bloodgroup' value={data.bloodgroup} onChange={handleChange} placeholder='Enter Blood Group' />
                <input type='number' name='mobile' value={data.mobile} onChange={handleChange} placeholder='Enter Mobile No' />
                <textarea name='location' value={data.location} onChange={handleChange} placeholder='Enter Location' />
                <button onClick={handleClick} >Submit</button>
            </div>
            <div className='img1_con' >
                <img src='pic.jpg' alt='image' />
            </div>
        </div>
    )
}

// const res = await axios.post('http://localhost:3030/std/condidates/', data,
//     {
//         headers: { "Content-Type": "application/json" },
//     });
//     alert("successfully Save")
//     console.log(res.data)