
import React, { Component } from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import Typography from '@material-ui/core/Typography';

const variable = [
    {
      value: 0,
      label: 'Begginer',
    },
    {
      value: 5,
      label: 'Intermediate',
    },
    {
      value: 10,
      label: 'Pro',
    },
  ];

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
            value: 0,
            surf: 0,
            snow: 0,
            skate: 0,
            active: 'surf'
         }

        this.handleChange = this.handleChange.bind(this);
        this.onSliderChange = this.onSliderChange.bind(this);
        this.updateActive = this.updateActive.bind(this);
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    onSliderChange(name) {
        return (e, value) => {
            this.setState({
            [name]: value
            })
        }
    }

    updateActive(event){
        this.setState({
            active: event.target.value
        })
    }

    // onSliderChange(e, value, name) {
    //     this.setState({
    //         [name]: value
    //     })
    // }

    //   onAfterChange = (value) => {
    //     console.log(value); //eslint-disable-line
    //   };

    render() {  
        let currentUser = this.currentUser;
        console.log('active is ', this.state.active);
        return (
            <div className="settings-container">
                <div className="leftbox"></div>
                <div className="rightbox">
                    <div className="profile">
                        <h1>Personal Info</h1>
                        <input type="text" size="5" maxlength="4" name="firstname" placeholder="First Name" value={this.state.firstname} onChange={this.handleChange}></input> 
                        <input size="5" name="lastname" placeholder="Last Name" value={this.state.lastname} onChange={this.handleChange}></input> 
                        <textarea placeholder="Bio" rows="4" cols="40"></textarea>
                        <br/>
                        <br/>
                        <div>
                            <div className="row">
                                <button 
                                value="surf" 
                                style={{border: this.state.active === 'surf' ? '1px solid black' : 'none' }}
                                onClick={this.updateActive}>
                                Surf
                                </button>
                                <button 
                                value="snow" 
                                style={{border: this.state.active === 'snow' ? '1px solid black' : 'none' }}
                                onClick={this.updateActive}>
                                Snow
                                </button>
                                <button 
                                value="skate" 
                                style={{border: this.state.active === 'skate' ? '1px solid black' : 'none' }}
                                onClick={this.updateActive}>
                                Skate
                                </button>
                            </div>

                            <PrettoSlider
                            className="surfSlider"
                            style={{display: this.state.active === 'surf' ? 'block' : 'none' }}
                            value={this.state.surf} 
                            onChange={this.onSliderChange('surf')}
                            valueLabelDisplay="auto"
                            marks={variable}
                            min={0}
                            max={10}
                            defaultValue={5} />

                            <PrettoSlider
                            className="snowSlider"
                            style={{display: this.state.active === 'snow' ? 'block' : 'none' }}
                            onChange={this.onSliderChange('snow')}
                            value={this.state.snow} 
                            valueLabelDisplay="auto"
                            marks={variable}
                            min={0}
                            max={10}
                            defaultValue={5} />

                            <PrettoSlider
                            className="skateSlider"
                            style={{display: this.state.active === 'skate' ? 'block' : 'none' }}
                            onChange={this.onSliderChange('skate')}
                            value={this.state.skate} 
                            valueLabelDisplay="auto"
                            marks={variable}
                            min={0}
                            max={10}
                            defaultValue={5} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default UserSettings;