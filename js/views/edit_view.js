import React from 'react';


let EditView = React.createClass({

  addSaveHandler(event) {
    event.preventDefault();
    this.props.onSaveClick(this.state.Title, this.state.Url, this.state.About);
  }, 

  getInitialState() {
    return {
      Title: this.props.Title,
      Url: this.props.PictureLink,
      Description: this.props.Description
    };
  },

  updateTitle(event) {
    let newMessage = event.target.value;

    this.setState({
      Title: newMessage,
    });
  },

  updateUrl(event) {
    let newMessage = event.target.value;

    this.setState({
      Url: newMessage,
    });
  },

  updateDescription(event) {
    let newMessage = event.target.value;

    this.setState({
      Description: newMessage,
    });
  },

  addBackHandler() {
    this.props.onBackClick();
  },

  addPicClickHandler() {
    this.props.onAddClick();
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
            <input onChange={this.updateTitle} value={this.state.Title} type="text" className="giveTitle" placeholder="New Title:"></input>
            <input onChange={this.updateUrl} value={this.state.Url} type="text" className="giveImage" placeholder="New Image URL:"></input>
            <textarea onChange={this.updateDescription} value={this.state.Description} type="text" className="giveDescription" placeholder="New Description:"></textarea>
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