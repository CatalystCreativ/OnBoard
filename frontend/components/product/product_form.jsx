import React from 'react';
import { connect } from 'react-redux';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      images: [],
      imageURLs: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFile(e) {
        const files = e.currentTarget.files;
        const fileReader = new FileReader();
        
        fileReader.onload = () => {
        this.setState({ images: [...this.state.images, files[0]], imageURLs: [...this.state.imageURLs, fileReader.result] });
        };

        console.log(this.state.images, this.state.imageURLs);

        if (files.length) {
            for (let i = 0; i < files.length; i++) {
                fileReader.readAsDataURL(files[i]);
            }    
        }

    // for (let i = 0; i < files.length; i++) {
    //     var file = files[i];
    //     //Only pics
    //     if (!file.type.match('image')) continue;

    //     var picReader = new FileReader();
    //     picReader.addEventListener("load", function (event) {
    //         var picFile = event.target;
    //         var div = document.createElement("div");
    //         div.innerHTML = "<img class='thumbnail' src='" + picFile.result + "'" + "title='" + picFile.name + "'/>";
    //         output.insertBefore(div, null);
    //     });
    //     //Read the image
    //     picReader.readAsDataURL(file);
    // }

  }

  // This will be where we create our form data to submit our photo
  handleSubmit(e) {
    e.preventDefault();

    const { name, images } = this.state;
    const formData = new FormData();
    
    formData.append('post[name]', name);
  
    for(let i = 0; i < images.length; i++) {
      formData.append('post[images][]', images[i]);
    }
  
    this.props.myThunkActionCreator(formData);
  }

  render() {
    const preview = this.state.imageURL ? <img height="200px" width="200px" src={this.state.imageURL} /> : null;
    return (
      <div className="new-bench-container">
        <div className="new-bench-form">
          <h3 className="new-bench-title">Create A Bench!</h3>

          <form className="product-form" onSubmit={this.handleSubmit}>
            <label className="bench-field">Name</label>
            <input
              name="name"
              type="text"
              onChange={this.handleChange}
              className="bench-field"
            />

            <div className="button-holder">
              <h3>Image preview </h3>
              {preview}
              <h3 className="button-holder">Add a Picture</h3>
              <input type="file" className="new-bench-button" multiple
                onChange={e => {
                    this.setState({ images: [...this.state.images, e.target.files] });
                    console.log(this.state.images)
                }}/>
            </div>

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Bench"
                className="new-bench-button"
              />
            </div>
          </form>

          <div className="button-holder">
            <button
              className="new-bench-button"
              onClick={this.navigateToSearch}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    createBench: bench => dispatch(createBench(bench))
});

export default connect(null, mapDispatchToProps)(ProductForm);