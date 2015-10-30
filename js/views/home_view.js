import React from 'react';


let HomeView = React.createClass({

  singlePicClickHandler(id) {
    this.props.onSinglePicClick(id);
  },

  addPicClickHandler() {
    this.props.onAddClick();
  },

  processData(data) {

    return (
      <div key={data.objectId} 
        onClick={() => this.singlePicClickHandler(data.objectId)} className="mainImages">
        <h2>{data.Title}</h2>
        <img className="mainPictures" 
        src={data.PictureLink}/>
      </div>
    );
  },


  render() {
    return (
      <div className="homePage">{this.props.images.map(this.processData)} 
        <button onClick={() => this.addPicClickHandler()}>Add</button>
      </div>

    );
  }
});

export default HomeView;