import React from 'react';

import './sign-in.style.scss';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import {signInwithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password:''
        }

    }

    handleChange = event => {
        const {value , name} = event.target;
        this.setState({[name]:value})
        console.log(this.state.email);
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email:'' , password:''});

    }

    render() {
        return (

            <div className='sing-in'>

                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                
                    <FormInput name="email"
                            type='email' 
                            value={this.state.email} 
                            required
                            handleChange={this.handleChange}
                            label='email'
                            />

                    <FormInput name="password"
                            type='password' 
                            value={this.state.password} 
                            required
                            handleChange={this.handleChange}
                            label='password'
                            />
                            <div className='buttons'>
                            <CustomButton type='submit'>Sign IN</CustomButton>
        
                            <CustomButton onClick={signInwithGoogle} isGoogleSignIn>
                                {''}
                                SIGN IN WITH GOOGLE{''}
                            </CustomButton>
                            </div>
                            </form>

            </div>
        )

    }

} 

export default SignIn;