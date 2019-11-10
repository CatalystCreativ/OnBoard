import React from 'react';
import { signUp } from '../../util/session_api_util';
import { connect } from 'react-redux';

class SignUp extends React.Component {
    constructor(props){
        super(props); 
        this.state = {
            username: '',
            email: '',
            password: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatchSignUp(this.state)
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    render(){
        return (
            <div className="container d-flex align-items-center justify-content-center">
            <div className="d-flex justify-content-center h-100">
                <div className="card">
                    <div className="card-header">
                        <h3>Sign Up</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={ this.handleSubmit }>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input name="username" onChange={ this.handleChange } type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input name="email" onChange={ this.handleChange }  type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input name="password" onChange={ this.handleChange }  type="password" className="form-control d-flex align-items-center" placeholder="Password" />
                            </div>
                            <div className="mb-3 mt-3 row align-items-center remember">
                                <input type="checkbox" />Remember Me
                            </div>
                            <div className="form-group">
                                <input type="submit" value="Find a Board!" className="btn float-right login_btn" />
                            </div>
                        </form>
                    </div>
                    <div className="card-footer">
                        <div className="d-flex justify-content-center links">
                            Already stoked with an account?<a href="#">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

const mdp = dispatch => {
    return {
        dispatchSignUp: (user) => dispatch(signUp(user)),        
    }
}

export default connect(null, mdp)(SignUp);
