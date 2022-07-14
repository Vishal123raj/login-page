import React, { useState }  from 'react'
import axios from 'axios';

import './login.css';
import { Link, useNavigate } from 'react-router-dom';
const Login = ({setLoginUser}) => {

    let navigate = useNavigate()
    
    const [user, setUser] = useState({
        name:'',
        email: '',
        password:''
    })


    const handleChange = e =>{
        const {name,value} = e.target  
        setUser({
           ...user,
           [name] : value
        })
    }

   

    const login = () => {
       
        
            axios.post(" https://authprocess.herokuapp.com/login", user)
            .then(res => {
           
            if(res.data.message === 'Login Successfully'){
                     alert(res.data.message)
                     setLoginUser(res.data.user)

                     navigate('/')
                    
            }
            else if (res.data.message === 'user not found!!')
              { 
                alert(res.data.message)  
               navigate('/register') 
            }   
            else {
                alert(res.data.message)
            }
            })
        
        // else
        // {
        //     alert("incomplete form")
        // }
       

    }


  return (
    
     <div className="container mt-5  form">
        <h1>Login</h1>
        <div className="row">
            <div className="col">
                <div className="card">
                    <div className="card-body">
                        <form action="/login" method="post">
                        <div className="form-group ">
                                <label htmlFor="name" className='input-label'>Name</label>
                                <input type="text" className='form-control ' name="name" value={user.name} placeholder='Enter your name' onChange={handleChange}  />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className='form-control' name="email" value={user.email} placeholder='Enter your email'  onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className='form-control' name="password" value={user.password} placeholder='Enter your password'  onChange={handleChange} />
                            </div>
                            <button type="button" className="btn btn-dark" onClick={(login)}>Login</button>
                           <span >
                            <Link to="/register"><button type="button" className="btn btn-dark">Register</button></Link>
                           </span>
                        </form>
                    </div>
                </div>
            </div>
        </div>

       
     </div>



   
  )
}

export default Login
