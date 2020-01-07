import React from 'react';
import Form from './Form';
import BannerImage2 from './BannerImage2';
import Button from './Button';
import '../../index.css';

const SignUp = () => {
    return (
        <div className="body">
        <BannerImage2/>
        <h1>Sign Up form here</h1>
        <Form/>
        <Button/>
        </div>
        
    )
}

export default SignUp;