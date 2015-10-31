import React from 'react';


let AddNewView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },

  addPicClickHandler() {
    this.props.onAddClick();
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

        <div>add photo page</div>
        <button onClick={() => this.addBackHandler()}>Back Home</button>
        <button>Upload Photo</button>

        <div className="footer">
          <p>Created by Kevin Mooney</p>
        </div>

      </div>
    );
  }
});

export default AddNewView;