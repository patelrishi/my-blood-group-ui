
import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import './Login.css';


export const Login = () => {
    const [data, setData] = useState({ uid: "", pswd: "" })
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const { id, value } = e.target;
        setData((prev) => ({ ...prev, [id]: value }))
    }
    const handleClick = async () => {
        try {

            const res = await axios.post('https://blooddonarbackend.vercel.app/std/login/', data)

            if (res?.data?.length > 0) {
                const user = res?.data?.[0]?.uid;
                const token = res?.data?.[0]?.token;
                sessionStorage.setItem('user', user)
                sessionStorage.setItem('token', token)

                dispatch({ type: 'LOGIN', payload: { isLogIn: true, user, token } }) //store true or false value and user&token also

            }
        } catch (err) {
            console.error("login error :", err)
        } finally {
            console.log("success")
        }
    }
    return (
        <div className='login_main_container'>
            <div className='img_container'>
                <div className='login_container'>
                    <h3>LogIn</h3>
                    <div className='input'>
                        <b>User Id &nbsp;&nbsp;&nbsp;&nbsp;:</b> <input type='text' id='uid' onChange={handleChange} placeholder='vamshi' />
                    </div>
                    <div className='input'>
                        <b>Password :</b> <input type='password' id='pswd' onChange={handleChange} placeholder='vamshi' />
                    </div>
                    <div className='btn'>
                        <button onClick={handleClick} >LogIn</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
