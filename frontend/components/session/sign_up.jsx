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
            <div className="d-flex justify-content-center mt-3 mb-3">
                <div className="page-container">
                    <form action="#" method="POST">
                        <h1>Sign Up</h1>
                        <input type="text" name="name" className="Name" placeholder="Name"/>
                        <input type="text" name="tele" className="Tele" placeholder="Number Phone"/>
                        <input type="text" name="email" className="Email" placeholder="Email"/>
                        <input type="password" name="password" className="Address" placeholder="password"/>
                        <button type="submit" value="Add" name="submit">Submit</button>
                    </form>
                </div>
           </div> 
        )
    }
}

export default SignUp;