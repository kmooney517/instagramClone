import React from 'react';


let HomeView = React.createClass({

  singlePicClickHandler(id) {
    this.props.onSinglePicClick(id);
  },

  addPicClickHandler() {
    this.props.onAddClick();
  },

  addBackHandler() {
    this.props.onBackClick();
  },

  processData(data) {

    return (
      <div key={data.objectId} 
        onClick={() => this.singlePicClickHandler(data.objectId)} className="tile">
        
        <img className="photo" 
        src={data.PictureLink}/>
      </div>
    );
  },


  render() {
    return (
      <div className="homePage">

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

        <div className="imageTiles">{this.props.images.map(this.processData)} 
        </div>

        <div className="footer">
          <p>Created by Kevin Mooney</p>
        </div>
      </div>
    );
  }
});

export default HomeView;