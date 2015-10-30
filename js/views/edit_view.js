import React from 'react';


let EditView = React.createClass({

  addBackHandler() {
    this.props.onBackClick();
  },

  render() {
    return (
      <div>
        <div>edit page</div>
        <button onClick={() => this.addBackHandler()}>Back Home</button>
        <button>Save Changes</button>
      </div>
    );
  }
});

export default EditView;