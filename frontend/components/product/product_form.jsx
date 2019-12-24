import React from 'react';
import { connect } from 'react-redux';
import { createProduct } from '../../actions/product_actions';
import { withRouter } from 'react-router-dom';
import TextField from "@material-ui/core/TextField";
import { Autocomplete } from '@material-ui/lab';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      tag: '',
      brand: '',
      tags: [],
      images: [],
      imageURLs: [],
      highlight: false,
      productUploaded: false
    };
    this.brands = [
      '7s', 
      'aipa', 
      'anaconda', 
      'bing', 
      'black rose mfg', 
      'body glove', 
      'carve sports', 
      'catch surf'
    ];
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.dragover = this.dragover.bind(this);
    this.dragLeave = this.dragLeave.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleChange(e) {
      if (e.target.name !== 'tag' || (e.target.name === 'tag' && e.target.value[e.target.value.length - 1] !== ' ')) {
        this.setState({[e.target.name]: e.target.value});
      } else {
        e.target.value = '';
      }
  }

  handleSelect(e) {
    console.log(e.target.innerHTML);
    this.setState({brand: e.target.innerHTML});
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
    if (e.keyCode === 32 && this.state.tag.length) {
      this.setState({tags: [...this.state.tags, this.state.tag], tag: ''});
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

    const { name, images, tags, brand } = this.state;
    const formData = new FormData();
    
    formData.append('product[name]', name);
    formData.append('product[user_id]', this.props.currentUserId);

    for (let i = 0; i < tags.length; i++) {
      formData.append('product[tags][tagged][]', tags[i]);
    }

    formData.append('product[tags][brand]', brand);
    formData.append('product[tags][name]', name);
  
    for(let i = 0; i < images.length; i++) {
      formData.append('product[images][]', images[i]);
    }
    console.log('name', formData.get("product[name]"));
    console.log('file', formData.get(`product[images][]`));

    this.props.createProduct(formData, this.props.currentUserId).then(() => {
      this.setState({productUploaded: true});
    });
  }

  render() {

    let preview = null;
    let previewNames = null;
    let tagList = null;
    // console.log(this.state.brand)

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

    if (this.state.productUploaded) {
      this.props.history.push(`/products/${this.props.showPageId}`);
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
                value="Upload Board"
                className="new-bench-button"
              />
            </div>
      

            {/* <div className="tags-input">
              {tagList}
              <input name="tag" className="main-input" type="text" onKeyUp={this.handleKeyUp} onChange={this.handleChange}/>
            </div> */}

            <Autocomplete
            onChange={this.handleSelect}
            id="combo-box-demo"
            options={this.brands}
            autoHighlight={true}
            autoSelect={true}
            getOptionLabel={option => option}
            style={{ width: 300 }}
            freeSolo={true}
            renderInput={params => (
            <TextField {...params} label="Brands" variant="outlined" fullWidth />
            )}
          />
            
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

const mapStateToProps = state => {
  return {
    currentUserId: state.session.currentUser.id,
    showPageId: state.ui.productId
  }
}

const mapDispatchToProps = dispatch => ({
    createProduct: (product, id) => dispatch(createProduct(product, id))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductForm));