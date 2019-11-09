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
                <div class="page-container">
                    <form action="#" method="POST">
                        <h1>Sign Up</h1>
                        <input type="text" name="name" class="Name" placeholder="Name"/>
                        <input type="text" name="tele" class="Tele" placeholder="Number Phone"/>
                        <input type="text" name="email" class="Email" placeholder="Email"/>
                        <input type="password" name="password" class="Address" placeholder="password"/>
                        <button type="submit" value="Add" name="submit">Submit</button>
                    </form>
                </div>
           </div> 
        )
    }
}

export default SignUp;