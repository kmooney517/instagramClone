import React from 'react';


let AddNewView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },

  addPicClickHandler() {
    this.props.onAddClick();
  },

  addUploadHandler() {
    this.props.onUploadClick();
  },

  render() {
    return (
      <div className="uploadNew">

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

        <p className="formTitle">Submit A New Photo</p>

        <div className="AddPhotoForm">
          <form className="newPicForm">
            <input type="text" placeholder="Title:" className="giveTitle"></input>
            <input type="text" placeholder="Image URL:" className="giveImage"></input>
            <textarea type="text" placeholder="Description:" className="giveDescription"></textarea>
          </form>

          <div className="submissions">
            <button onClick={() => this.addBackHandler()}>Cancel</button>
            <button onClick={() => this.addUploadHandler()}>Upload Photo</button>
          </div>
        </div>

        <div className="footer">
          <p>Created by Kevin Mooney</p>
        </div>

      </div>
    );
  }
});

export default AddNewView;