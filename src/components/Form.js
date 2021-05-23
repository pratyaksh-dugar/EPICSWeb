import React from 'react';
import FormOption from './FormOption';
import './Form.css';

var verylightblue='#e6fcfc';

class Form extends React.Component{
    constructor(props){
        super(props);
        this.state={
            loginSelected: false,
            passwordValid: false
        };
    }
    selectLogin(){
        this.setState({
            loginSelected: true
        });
    }
    selectSignup(){
        this.setState({
            loginSelected: false
        });
    }
    signup(event){
        event.preventDefault();
        if(!this.state.passwordValid){
            console.log('entries not valid');
            return;
        }
        fetch('http://localhost:5000/signup/',{
            method: 'POST',
            mode: 'no-cors',
            referrerPolicy: 'no-referrer',
            credentials: 'same-origin',
            body: JSON.stringify({
                'username': document.querySelector('input[name=email]').value,
                'password': document.querySelector('input[name=password]').value
            })
        })
        .then((response)=>{console.log('got response')});
    }
    login(event){
        event.preventDefault();
        if(!this.state.passwordValid){
            console.log('entries not valid');
            return;
        }
        console.log('logging in ',document.querySelector('input[name=email]').value,document.querySelector('input[name=password]').value);
    }
    checkPass(){
        var temp=document.querySelector('input[name=password]').value===document.querySelector('input[name=confirmation]').value;
        console.log(temp);
        console.log(document.querySelector('input[name=password]').value);
        console.log(document.querySelector('input[name=confirmation]').value);
        this.setState({
            passwordValid: temp && document.querySelector('input[name=password]').value!==''
        });
        return this.state.passwordValid;
    }
    render(){
        return <form>
                <FormOption text="Login" 
                    height="5%" 
                    width="37%"
                    left="5%"
                    top="2%"
                    padding="3%"
                    backgroundColor={(this.state.loginSelected && verylightblue) || 'white'}
                    onClick={this.selectLogin.bind(this)}
                >
                </FormOption>
                <FormOption text="Sign Up" 
                    height="5%" 
                    width="37%"
                    left="50%"
                    top="2%"
                    padding="3%"
                    backgroundColor={(!this.state.loginSelected && verylightblue) || 'white'}
                    onClick={this.selectSignup.bind(this)}
                >
                </FormOption>
                <label id="lb1">Email ID <input type="text" placeholder="email@gmail.com" name="email"/></label>
                <label id="lb2">Password <input onChange={this.checkPass.bind(this)} type="password" placeholder="password" name="password"/></label>
                <label id="lb3" style={{
                        display: (this.state.loginSelected && 'none') || 'block',
                    }}
                >
                    Confirmation 
                    <input onChange={this.checkPass.bind(this)} type="password" placeholder="confirm password" name="confirmation" style={{
                            border: ((this.state.passwordEmpty || !this.state.passwordValid) && '3px solid red') || 'none'
                        }}
                    />
                </label>
                <button className="SignupButton" style={{
                       display: ((this.state.loginSelected) && 'none') || 'block'
                    }}
                    onClick={this.signup.bind(this)}
                >
                    Sign Up
                </button>
                <button className="LoginButton" style={{
                        display: ((!this.state.loginSelected) && 'none') || 'block'
                    }}
                    onClick={this.login.bind(this)}
                >
                    Log In
                </button>
            </form>;
    }
}
export default Form;
