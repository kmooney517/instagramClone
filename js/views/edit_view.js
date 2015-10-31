import React from 'react';


let EditView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },

  addPicClickHandler() {
    this.props.onAddClick();
  },

  addSaveHandler(event) {
    this.props.onSaveClick();
  }, 

  render() {
    return (
      <div className="editPage">

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

        <p className="formTitle">Edit The Current Photo</p>

        <div className="AddPhotoForm">
          <form className="newPicForm">
            <input type="text" className="giveTitle" placeholder="New Title:"></input>
            <input type="text" className="giveImage" placeholder="New Image URL:"></input>
            <textarea type="text" className="giveDescription" placeholder="New Description:"></textarea>
          </form>

          <div className="submissions">
            <button onClick={() => this.addBackHandler()}>Cancel</button>
            <button onClick={() => this.addSaveHandler()}>Save Changes</button>
          </div>
        </div>

        <div className="footer">
          <p>Created by Kevin Mooney</p>
        </div>
        
      </div>
    );
  }
});

export default EditView;