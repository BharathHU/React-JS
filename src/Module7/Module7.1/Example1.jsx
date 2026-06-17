// 
import React from 'react';

// HOC
const withAuth = (WrappedComponent) => {
  return () => {
    return (
      <>
        <h1>HOC Example</h1>
        <WrappedComponent />
      </>
    );
  };
};

// Normal Component
function Login() {
  return (
    <>
      <h3>User is logged in</h3>
    </>
  );
}

const Auth = withAuth(Login);

export default Auth;