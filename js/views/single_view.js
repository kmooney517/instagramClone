import React from 'react';


let SingleView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },

  addEditHandler() {
    this.props.onEditClick();
  },

  addPicClickHandler() {
    this.props.onAddClick();
  },

  render(data) {
    return (
      <div className="singleImagePage" key={this.props.images.objectId}>

        <div className="header">
          <div className="logo">
            <img src="http://i0.wp.com/sapiengames.com/wp-content/uploads/2014/03/watman.jpg?resize=700%2C525"/>
          </div>

          <div className="navLinks">
            <ul>
              <li onClick={() => this.addBackHandler()}><button>Home</button></li>
              <li onClick={() => this.addPicClickHandler()}><button>Upload New Image</button></li>
              <li><a href="https://en.wikipedia.org/wiki/Wat">Wat</a></li>
              <li>InstaClone</li> 
            </ul>
          </div>
        </div>

        <div className="onePicSetUp">
          <div className="singleImage">
            <img className="oneImage" src={this.props.images.PictureLink}/>
          </div>

          <div className="imageInfo">
            
            <div className="title">{this.props.images.Title}
            </div>
            <div className="description">{this.props.images.Description}
            </div>

            <div className="navBtns">
              <button onClick={() => this.addBackHandler()}>Back Home</button>
              <button onClick={() => this.addEditHandler()}>Edit Submission</button>
            </div>
          </div>
        </div>


        <div className="footer">
          <p>Created by Kevin Mooney</p>
        </div>

      </div>
    );
  }
});

export default SingleView;