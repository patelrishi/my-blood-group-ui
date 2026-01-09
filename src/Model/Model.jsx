import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Ajax } from '../services/Ajax';
import './Model.css'

export const Model = () => {
    const [data, setData] = useState(useSelector((state) => state?.appReducer?.rowdata) || {})
    const dispatch = useDispatch();

    //handleChange function
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    //handleUpdate function
    const handleUpdate = async () => {
        try {
            const userInput = prompt('vamshi');
            if(userInput === 'vamshi'){
            const id = data._id;
            delete data._id; // delete is the javascript keyword it is delete _id from object(data) EX: data:{name:vamshi,age:21,location:hyd} _id removing bcz new id not allow MongoDB
            const Rowdata = data;
            const res = await Ajax.sendPutReq(`/std/updatedata/?id=${id}`, Rowdata)
            const { acknowledged, modifiedCount } = res?.data;

            if (acknowledged && modifiedCount) {
                alert("Updated Success")
                dispatch({ type: 'MODEL', payload: { isShowModel: false } }) // remove update card
            } else {
                alert("Update Fail")
            }
        } else{
            alert('plz enter valid input')
        }
        } catch (err) {
            console.error(err.message)
        }
        
    }

    //handleCancel function
    const handleCancel = () => {
        dispatch({ type: 'MODEL', payload: { isShowModel: false } }) // remove update card
    }
    return (
        <>
            <div className='update-card' >
                <div className='update_mask' ></div>

                <div className='update_form_container'>
                    <h3>Update the Data form</h3>
                    <input type='text' value={data.name} name='name' onChange={handleChange} placeholder='Enter Name' />
                    <input type='number' value={data.age} name='age' onChange={handleChange} placeholder='Enter Age' />
                    <input type='number' value={data.weight} name='weight' onChange={handleChange} placeholder='Enter Weight' />
                    <input type='text' value={data.bloodgroup} name='bloodgroup' onChange={handleChange} placeholder='Enter Blood Group' />
                    <input type='number' value={data.mobile} name='mobile' onChange={handleChange} placeholder='Enter Mobile No' />
                    <textarea name='location' value={data.location} onChange={handleChange} placeholder='Enter Location' />
                    <div className='update_btn_container'>
                        <button onClick={handleUpdate} >Update</button>
                        <button onClick={handleCancel} >Cancel</button>
                    </div>
                </div>
            </div>
        </>
    )
}
