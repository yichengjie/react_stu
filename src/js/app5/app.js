var TodoList = React.createClass({
  render: function() {
    console.info('todo list render is call....') ;
    var nodes = this.props.items.map(function(itemText,index){
         return <li key ={index}>{itemText}</li>;
    }) ;
    return <ul>{nodes}</ul>;
  }
});




var TodoApp = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    e.preventDefault() ;
    e.stopPropagation() ;
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>TODO</h3>
        <TodoList items={this.state.items} />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Add #' + (this.state.items.length + 1)}</button>
        </form>
      </div>
    );
  }
});
var mountNode =  document.getElementById('container') ;
ReactDOM.render(<TodoApp />, mountNode);