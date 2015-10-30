import Backbone from 'backbone';
import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

import PictureModel from './resources/picture_model';
import ImageCollection from './resources/image_collection';

import HomeView from './views/home_view';
import SingleView from './views/single_view';
import AddNewView from './views/addNew_view';
import EditView from './views/edit_view';
import Spinner from './views/spinner';

export default Backbone.Router.extend({

  routes: {
    ""              : "showHome",
    "single/:id"    : "showSinglePicture",
    "addNew"        : "addNewPicture",
    "editImage/:id"     : "changePicture"
  },

  initialize(appElement) {
    this.el = appElement;
    this.image = new ImageCollection();

  },

  goto(route) {
    this.navigate(route, {
      trigger: true
    });
  },

  render(component) {
    ReactDom.render(component, this.el);
  },


  showHome() {
    this.image.fetch().then(() => {
      this.render(<HomeView 
        images={this.image.toJSON()}
        onSinglePicClick={(id) => this.goto('single/' + id)}
        onAddClick={() => this.goto('addNew')}/>
      );
    }); 
  },

  showSinglePicture(id) {
    let abc = this.image.get(id);

    if (abc) {
      this.render(
        <SingleView
          onBackClick={() => this.goto('')}
          onEditClick={() => this.goto('editImage')}
          images={abc.toJSON()}/>
      );
    } else {
      abc = this.image.add({objectId: id});
      abc.fetch().then(() => {
        this.render(
          <SingleView
          onBackClick={() => this.goto('')}
          onEditClick={() => this.goto('editImage')}
          images={abc.toJSON()}/>
        );
      });
    }
  },

  addNewPicture() {
    this.render(<AddNewView
      onBackClick={() => this.goto('')}/>
    );
  },

  changePicture() {
    this.render(<EditView
      onBackClick={(id) => this.goto('')}/>

    );
  },


  start() {
    Backbone.history.start();
  }


});