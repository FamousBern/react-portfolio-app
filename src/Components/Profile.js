import React from 'react'

 const Profile = (props) => {
   console.log(props)
  return (
    <div className="profile">
        <div className="img"></div>
        <h2><span>Bern</span></h2>
        <p>Fullstack Developer</p>
        <button onClick={props.change} className="btn">Read More</button>
        <h3>{props.name}</h3> 
    </div>
  )
}

export default Profile;