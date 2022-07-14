import React, { useState } from 'react'
import axios from 'axios';
import './register.css';
import { useNavigate } from 'react-router-dom';
const Register = () => {

    let navigate = useNavigate()
    const [user, setUser] = useState({
        name:'',
        email: '',
        password:'',
        conformPassword:''
    })


    const handleChange = e =>{
        const {name, value} = e.target
        // console.log(name)
        setUser({
            ...user,
            [name] : value
            

            // name:name,
            // email:email,
            // password:password,
            // conformPassword:conformPassword
        })
    }

    const register = () => {
        const {name, email, password, conformPassword} = user
        if(name && email && password && password === conformPassword){

            //  alert('posted')
            //  console.log(user)
            axios.post(" https://authprocess.herokuapp.com/register", user)
            .then(res => {
                alert(res.data.message)
                navigate('/login')

            })
            

        }

        else{
            alert('ummm!!!')
        }

    }

  return (
    
     <div className="container mt-5 form">
        <h1>Register</h1>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <form action="/login" method="post">
                        <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" className='form-control' name="name" value={user.name} placeholder='Enter your name' onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className='form-control' name="email" value={user.email} placeholder='Enter your email'  onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className='form-control' name="password" value={user.password} placeholder='Enter your password'  onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className='form-control' name="conformPassword" value={user.conformPassword} placeholder='Conform your password'  onChange={handleChange} />
                            </div>
                            <button type="button" className="btn btn-dark"  onClick={register}>Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     </div>
   
  )
}

export default Register