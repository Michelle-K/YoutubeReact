import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = 'AIzaSyBEk5ycpdyYVicQC98kXtz9gPTv78iaorw';

//Create new component. Should produce html

const App = () => {
  return <div>Hi!</div>;
};

//take component generated HTML and put it on the page (in the DOM)
ReactDOM.render(<App />, document.querySelector('.container'));
