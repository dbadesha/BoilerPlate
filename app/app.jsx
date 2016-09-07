var React = require('react');
var ReactDOM = require('react-dom');

var objOne={
  name: 'Name',
  location: 'Bay Area'
};
var objTwo={
  age: 25,
  ...objOne
};
console.log(objTwo);

ReactDOM.render(
      <h1>Boilerplate App!</h1>,
      document.getElementById('app')
  );
