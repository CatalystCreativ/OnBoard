import React from 'react';
import { Route, Link } from 'react-router-dom'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser;
        this.logOut = this.props.logOut;
        this.logIn = this.props.logIn;
    }

    render() {
        let authNav;
        if (this.props.currentUser) { //show avatar/logout button if a user is logged in
            authNav = (
                <>
                    <Link className="nav-link" to="/products/create">Add Product</Link>
                    <Link className="nav-link" to="/messages">Messages</Link>
                    <Link className="nav-link" to={'/users/${this.props.currentUser.id'}>
                        My Profile
                        <div className="avatar" />
                    </Link>
                    <div className="dropdown">
                        <Link className="nav-link" to="/settings">Settings</Link>
                        <button type="button" className="nav-link" onClick={this.logOut}>Log Out</button>
                    </div>
                </>
            )
        } else { //show sign up/log in buttons if user is not logged in
            authNav = (
                <>
                    <Link className="nav-link" to="/login">Login</Link>
                    <Link className="nav-link" to="/signup">Sign Up</Link>
                </>
            )
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">OnBoard</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        { authNav }
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavBar;