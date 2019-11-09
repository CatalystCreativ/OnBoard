import React from 'react';

class SignUp extends React.Component {
    constructor(props){
        super(props); // this.props = props 
        this.state = {
            username: '',
            email: '',
            password: ''
        }
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
                        <form>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-user"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Username" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
                            <div className="input-group form-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><i className="fas fa-key"></i></span>
                                </div>
                                <input type="password" className="form-control d-flex align-items-center" placeholder="Password" />
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

export default SignUp;