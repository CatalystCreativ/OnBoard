import React from 'react';
import { connect } from 'react-redux';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: '',
      tags: [],
      images: [],
      imageURLs: [],
      highlight: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dragover = this.dragover.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(e) {
      this.setState({[e.target.name]: e.target.value});
  }

  handleDelete(key, label) {
    return e => {
      e.preventDefault();

      if (label === 'tag') {
        let tagsCopy = [...this.state.tags];
        tagsCopy.splice(key, 1);
        this.setState({tags: tagsCopy});
      } else if (label === 'image') {
        let imageCopy = [...this.state.images];
        let imageURLCopy = [...this.state.imageURLs];
        imageCopy.splice(key, 1);
        imageURLCopy.splice(key, 1);
        this.setState({images: [...imageCopy], imageURLs: [...imageURLCopy]});
      }

    }
  }

  handleKeyUp(e) {
    e.preventDefault();
    
    if (e.keyCode === 32) {
      this.setState({tags: [...this.state.tags, this.state.tag]});
      e.target.value = '';
    }
  }

  dragover(e) {
    e.preventDefault();
    this.setState({highlight: true});
  }

  dragLeave(e) {
    e.preventDefault();
    this.setState({highlight: false});
  }

  fileHelper(file) {
    var picReader = new FileReader();
    picReader.onload = e => {
      console.log(file)
      this.setState({ images: [...this.state.images, file], imageURLs: [...this.state.imageURLs, picReader.result] });
    }
    picReader.readAsDataURL(file);
  }

  handleFile(e) {
    e.preventDefault();

    var files = e.target.files || e.dataTransfer.files; //FileList object

    for (let i = 0; i < files.length; i++) {
      this.fileHelper(files[i]);
    }
    this.setState({highlight: false});
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
    // console.log(this.state.images, this.state.imageURLs)
    let preview = null;
    let previewNames = null;
    let tagList = null;

    if (this.state.imageURLs.length) {
      preview = this.state.imageURLs.map((url, key) => {
        let imageStyle = {
          backgroundImage: "url(" + url + ")",
          height: 300,
          width: 300
        }

        return (
          <div key={key} style={imageStyle}>
            <button type="button" className="close" aria-label="Close" onClick={this.handleDelete(key, 'image')}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        )
      })
    }

    if (this.state.images) {
      previewNames = this.state.images.map((file, key) => {
        return <p key={key}>{file.name}</p>
      });
    }

    if (this.state.tags) {
      tagList = this.state.tags.map((tag, key) => {
        return (
          <span className="tag" key={key}>
            {tag}
            <button type="button" className="close" aria-label="Close" onClick={this.handleDelete(key, 'tag')}>
              <span aria-hidden="true">&times;</span>
            </button>
          </span>
        )
      })
    }
    
    let formName = null;
    if (this.state.highlight) {
      formName = 'product-form high-light';
    } else {
      formName = 'product-form';
    }

    return (
      <div className="new-bench-container">
        <div className="new-bench-form">
          <h3 className="new-bench-title">Upload a Board</h3>

          <form className={formName} onDragLeave={this.dragLeave} onDragOver={this.dragover} onDrop={this.handleFile} onSubmit={this.handleSubmit}>
            <label className="bench-field">Name</label>
            <input
              name="name"
              type="text"
              onChange={this.handleChange}
              className="bench-field"
            />

            <div id="image-holder">
              <h3>Image preview </h3>
              {preview}
              {previewNames}
              <h3 id="tag">Add a Picture</h3>
              <input type="file" multiple="multiple"
                onChange={this.handleFile}/>
            </div>

            <hr />

            <div className="button-holder">
              <input
                type="submit"
                value="Create Bench"
                className="new-bench-button"
              />
            </div>


            <div className="tags-input">
              {tagList}
              <input name="tag" className="main-input" type="text" onKeyUp={this.handleKeyUp} onChange={this.handleChange}/>
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