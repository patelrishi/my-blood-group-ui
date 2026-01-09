import React, { useState } from 'react';
import './GetDonars.css';
import { Ajax } from '../services/Ajax';
import { useDispatch, useSelector } from 'react-redux';
import { Model } from '../Model/Model';

export const GetDonars = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const isShow = useSelector((state) => state?.appReducer?.isShowModel)

  //get the data function
  const handleClick = async () => {
    try {
      const res = await Ajax.sendGetReq("/std/getdata");
      const list = await res?.data
      setData(list)
      console.log(data)
    } catch (err) {
      console.log(err.message)
    }
  }


  //delete the data function
  const handleDelete = async (row) => {
    try {
     // alert(row.name)
      const userInput = prompt('vamshi')
      if(userInput === 'vamshi'){
      const id = row._id;
      const res = await Ajax.sendDeleteReq(`/std/delete-data/${id}`) //server side usind params 
      const { acknowledged, deletedCount } = res?.data
      
      if (acknowledged && deletedCount) {
        alert('Deleted Successfully')
      } else {
        alert("Delete Failed")
      }
    }else {
      alert('plz inter valid inputs')
    }
    } catch (err) {
      console.error(err.message)
    }
  }

  //edit the data function
  const handleEdit = async (row) => {
    alert(row.name)
    dispatch({ type: 'MODEL', payload: { isShowModel: true, rowdata: row } }) // isShowModel=> True & store row data in rowdata variable

  }

  return (
    <div className='get_bg_container' >
      <div className='get_container' >
        {data?.length > 0 ? " " :
          <h4> &nbsp;If You want Donars List click the button</h4>
        }
        <div className='get_btn_container'>
          <button className='get_btn' onClick={handleClick} >Get List</button>
          <button className='get_btn' onClick={handleClick} >Refresh</button>
        </div>

      </div>
      <div className='model_container'>
        {
          isShow && <Model />
        }
      </div>
      <div className='table_container'>
        {data?.length > 0 &&
          <table className='table' >
            <thead>
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Age</th>
                <th>weight</th>
                <th>Blood Group</th>
                <th>Mobile</th>
                <th>Location</th>
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>

              {
                data?.length > 0 && data.map((object, index) => {
                  const { name, age, weight, bloodgroup, mobile, location } = object;
                  return <tr key={index + 1} >
                    <td>{index + 1}</td>
                    <td>{name}</td>
                    <td>{age || '-'}</td>
                    <td>{weight || '-'}</td>
                    <td>{bloodgroup || '-'}</td>
                    <td>{mobile || '-'}</td>
                    <td>{location || '-'}</td>
                    <td><button onClick={() => handleDelete(object)}>Delete</button></td>
                    <td><button onClick={() => handleEdit(object)}>Edit</button></td>
                  </tr>

                })
              }

            </tbody>
          </table>
        }
      </div>
    </div>
  )
}

// const res = await axios.get('http://localhost:3030/std/getdata/');
// const list = await res?.data;