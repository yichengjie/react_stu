var MyForm = React.createClass({
  handleChange:function  (name,value) {
  	/*return function  (event) {
		var value = event.target.value ;
		console.info("**********************" + value) ;  		
  	}*/
	console.info("**********************" + value + " , name : " + name) ;  
  },
  render: function() {
    return <form className="form-horizontal">
	  <div className="form-group">
	    <label htmlFor="inputEmail3" className="col-sm-2 control-label">Email</label>
	    <div className="col-sm-10">
	      <input type="email" className="form-control" id="inputEmail3" placeholder="Email" />
	    </div>
	  </div>

	 <div className="form-group">
	    <label htmlFor="inputEmail4" className="col-sm-2 control-label">Email</label>
	    <div className="col-sm-10">
	      <MySelect handleChange ={this.handleChange.bind(this,'myselect1')} />
	    </div>
	  </div>
	</form>
  }
});


var MySelect = React.createClass({
	handleChange:function  (event) {
		var value = event.target.value ;
		console.info('handleChange.....' + value) ;
		this.props.handleChange('select1',value) ;
	},
	render:function  () {
		return <select onChange ={this.handleChange} className="form-control">
				<option value="0">选择</option>
				<option value="c">c</option>
				<option value="c++">c++</option>
				<option value="c#">c#</option>
				<option value="java">java</option>
		</select>
	}
}) ;



ReactDOM.render(
  <MyForm  />,
  document.getElementById('container')
);