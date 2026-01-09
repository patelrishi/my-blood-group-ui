'use client'
import React, { useState } from 'react'
import './Register.css';
import axios from 'axios';
import { Ajax } from '../services/Ajax';

export const Register = () => {
    const [data, setData] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData((prev) => ({ ...prev,[name]:value}))
    }
    const handleClick = async () => {
        try {
            alert('Data send to DB')
            const res = await Ajax.sendPostReq('/std/candidates', data,
                {
                    headers: { "Content-Type": "application/json" }
                })

            const { acknowledged, insertedId } = res?.data;
            if (acknowledged && insertedId) {
                alert('successfully Register')
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
                <input type='text' name='name' onChange={handleChange} placeholder='Enter Name' />
                <input type='number' name='age' onChange={handleChange} placeholder='Enter Age' />
                <input type='number' name='weight' onChange={handleChange} placeholder='Enter Weight' />
                <input type='text' name='bloodgroup' onChange={handleChange} placeholder='Enter Blood Group' />
                <input type='number' name='mobile' onChange={handleChange} placeholder='Enter Mobile No' />
                <textarea name='location' onChange={handleChange} placeholder='Enter Location' />
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