import React from 'react';
//Hoc
function withUser(wrappUser){
    return(props)=>{
        return(<>
        <h1>With user</h1>
        <wrappUser {...props} name='virat'city='bengaluru' />
        </>)}}
//normal Component