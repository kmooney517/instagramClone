import React from 'react';


let AddNewView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },

  render() {
    return (
      <div className="singleImage">
        <div>add page</div>
        <button onClick={() => this.addBackHandler()}>Back Home</button>
      </div>
    );
  }
});

export default AddNewView;