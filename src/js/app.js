
// main.js
//var React = require('react');
//var ReactDOM = require('react-dom');

/*var HelloMessage = React.createClass({
  render: function() {
    return <div>Hello {this.props.name}</div>;
  }
});

ReactDOM.render(
<HelloMessage name="John" />,
    document.getElementById('container')
);*/

/*var HelloWorld  = React.createClass({
    render:function(){
        return (<p>
                    Hello world  , <input type="text" placeholder="Your name here : " />!
                    It is {this.props.date.toTimeString()}
                </p>
        );
    }
});

setInterval(function() {
    ReactDOM.render(
    <HelloWorld date={new Date()} />,
        document.getElementById('container')
    );
}, 500);*/

var CommentBox = require('./CommentBox') ;
ReactDOM.render(
<CommentBox />,
    document.getElementById('container')
);