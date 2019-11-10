import React from 'react';
import { logIn } from '../../actions/session_actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
class LogIn extends React.Component {
    constructor(props){
        super(props); // this.props = props 
        this.state = {
            username: '',
            email: '',
            password: ''
        }

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.dispatchLogIn(this.state);
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});   
    }

    render(){
        return (
            <div className="container">
                <div className="d-flex justify-content-center h-100">
                    <div className="card">
                        <div className="card-header">
                            <h3>Log In</h3>
                            <div className="d-flex justify-content-end social_icon">
                                <span><i className="fab fa-facebook-square"></i></span>
                                <span><i className="fab fa-google-plus-square"></i></span>
                                <span><i className="fab fa-twitter-square"></i></span>
                            </div>
                        </div>
                        <div className="card-body">
                            <form onSubmit={ this.handleSubmit }>
                                <div className="input-group form-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                                    </div>
                                    <input name="username" onChange={ this.handleChange } type="text" className="form-control" placeholder="username" />
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
                                    <input name="password" onChange={ this.handleChange } type="password" className="form-control" placeholder="password" />
                                </div>
                                <div className="row align-items-center remember">
                                    <input type="checkbox" />Remember Me
                                </div>
                                <div className="form-group text-center mt-2">
                                    <input name="username" onChange={ this.handleChange } type="submit" value="Come on In!" className="btn login_btn" />
                                </div>
                            </form>
                        </div>
                        <div className="card-footer">
                            <div className="d-flex justify-content-center links">
                                <Link to={'/signup'}>Sign Up</Link>
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
        dispatchLogIn: (user) => dispatch(logIn(user)),
    }
}

export default connect(null, mdp)(LogIn);