import React, { useEffect } from 'react'

function LoginSuccess() {
    useEffect(() => {
        //setup a timer of 1/2 second and then close the window
        setTimeout(() => {
          window.close();
        }, 500);
    }, []);
    
  return (
    <div>Redirecting...</div>
  )
}

export default LoginSuccess