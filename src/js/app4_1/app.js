var React = require('react');
var Comments = require('./views/comments');
var CommentForm = require('./views/comment-form');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Comments />
        <CommentForm />
      </div>  
    );
  }
});


ReactDOM.render(<App />,
    document.getElementById('container')
);
