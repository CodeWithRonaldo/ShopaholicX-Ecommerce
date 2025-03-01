import React from 'react'

const LoginSignup = () => {
  return (
    <div className='LoginSignup'>
        <div className='login-container'>
            <h1>Sign Up</h1>
            <div className='login-form'>
                <form >
                    <label>Username:</label>
                    <input type="text" name="username" placeholder="Enter your username"/>
                    <br/>
                    <label>Password:</label>
                    <input type="password" name="password" placeholder="Enter your password"/>
                    <br/>

                </form>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup