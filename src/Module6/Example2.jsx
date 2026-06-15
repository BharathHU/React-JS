import React from 'react';

function Example2() {
  const condition = true; // or false

  const login = <h3>You have been logged in successfully</h3>;
  const logout = <h3>You have logged out</h3>;

  const Profile = () => <h2>Profile Page</h2>;
  const Home = () => <h2>Home Page</h2>;

  return (
    <div style={style.body}>
    <div style={style.back}>
      <h1 style={style.head}>Example for Ternary Operator</h1>

      {condition ? login : logout}

      {condition ? <Profile /> : <Home />}
    </div>
   </div>
  );
   
}

 const style={
  body:{
    backgroundColor:'gray',
  },
  back:{
    backgroundColor:"blue",
    color:"pink",
    boxShadow:"0px 1px 2px 3px black",
    height:"200px",
    width:'200px',
    textAlign:'center',
     margin:'60px auto',
  },

    head:{
      textAlign:'center',
      alignmentItem:'center',

  }
}
export default Example2;