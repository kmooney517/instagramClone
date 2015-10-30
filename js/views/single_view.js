import React from 'react';


let SingleView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },

  addEditHandler() {
    this.props.onEditClick();
  },

  render(data) {
    return (
      <div className="singleImagePage" key={this.props.images.objectId}>
        <img src={this.props.images.PictureLink}/>
        <button onClick={() => this.addBackHandler()}>Back Home</button>
        <button onClick={() => this.addEditHandler()}>Edit Picture</button>
      </div>
    );
  }
});

export default SingleView;