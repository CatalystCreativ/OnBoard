
import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const PrettoSlider = withStyles({
root: {
    color: '#429bb8',
    height: 8,
    width: 300
},
thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
    boxShadow: 'inherit',
    },
},
active: {},
valueLabel: {
    left: 'calc(-50% + 4px)',
},
track: {
    height: 8,
    borderRadius: 4,
},
rail: {
    height: 8,
    borderRadius: 4,
},
})(Slider);

class UserSettings extends Component {
    constructor(props) {
        super(props);
        this.currentUser = this.props.currentUser;
        this.state = { 
            firstname: '',
            lastname: '',
            email: this.currentUser.email,
            x_coordinate: null,
            y_coordinate: null,
            rating: null,
            bio: '',
            value: 0
         }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSliderChange(value) {
        this.setState({
          value: value
        });
    }

    //   onAfterChange = (value) => {
    //     console.log(value); //eslint-disable-line
    //   };

    render() {  
        let currentUser = this.currentUser;
        return (
            <div className="settings-container">
                <div className="leftbox"></div>
                <div className="rightbox">
                    <div className="profile">
                        <h1>Personal Info</h1>
                        <input name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange}></input> 
                        <input name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange}></input> 
                        <br/>
                        <h3>Skill Level</h3>
                        <br/>
                        <div>
                            <Typography gutterBottom>Surf</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                        </div>
                        <div>
                            <Typography gutterBottom>Snow</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} /> 
                        </div>
                        <div>
                            <Typography gutterBottom>Skate</Typography>
                            <PrettoSlider valueLabelDisplay="auto" aria-label="pretto slider" defaultValue={20} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserSettings;