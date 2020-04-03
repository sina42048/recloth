import React from 'react';
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { SignInContainer, Title, SubTitle, ButtonContainer, FormContainer } from './sign-in.styles';


class SignIn extends React.Component {
    constructor( props ) {
        super( props );

        this.state = {
            email : '',
            password : ''
        }
    }

    handleSubmit = async ( event ) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch(error) {
            console.error(error, error.message);
        }

    }

    handleChange = (event) => {
        const { value, name } = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <SignInContainer>
                <Title>I already have an account</Title>
                <SubTitle>Sign in with your email and password</SubTitle>
                <FormContainer onSubmit={ this.handleSubmit }>
                    <FormInput 
                        name="email"
                        value={ this.state.email }
                        type="email"
                        label="email"
                        handleChange={ this.handleChange } 
                        required
                    />

                    <FormInput 
                        name="password"
                        value={ this.state.password }
                        type="password"
                        label="password"
                        handleChange={ this.handleChange } 
                        required
                    />
                    <ButtonContainer>
                        <CustomButton type="submit">
                            SIGN IN
                        </CustomButton>
                        <CustomButton isGoogleSignIn onClick={signInWithGoogle} type="button">
                            SIGN IN WITH GOOGLE
                        </CustomButton>
                    </ButtonContainer>
                </FormContainer>
            </SignInContainer>
        )
    }
}

export default SignIn;