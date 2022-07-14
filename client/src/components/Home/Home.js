// import React from 'react'
// // import { useNavigate } from 'react-router-dom'

// function Home(setLoginUser) {

//   // let navigate = useNavigate() 

// //   const set = () => {
// //     setCred = true
// // }


// // const logOut = e =>{
// //   alert("Logout Successfully")
// //   setLoginUser({})
// //   // navigate('/login')
// // }

//   return (
        
// <div class="card-body">
//     <h1 class="card-title">Welcome!!</h1>
//     <p class="card-text">You are logged-in.</p>
//     <div  className="btn btn-dark"  onClick={() => setLoginUser({})}>Logout</div>
//   </div>
//   )
// }

// export default Home


import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({setLoginUser}) => {

  let nav = useNavigate()

  const handleClick = () => {
    // console.log("bye")
    setLoginUser = ({})
    nav('/login')

  }


  return (
    <div>
      <div class="card-body">
     <h1 class="card-title">Welcome!!</h1>
     <p class="card-text">You are logged-in.</p>
     <button  className="btn btn-dark"  onClick={handleClick}>Logout</button>
   </div>
    </div>
  )
}

export default Home
