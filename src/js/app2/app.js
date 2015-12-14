var CustomComponent = React.createClass({
    getInitialState: function(){
        //确定初始状态
        return {
            clicked: false
        };
    },
    getDragonKillingSword: function(){
    	console.info('getDragonKillingSword () ....') ;
        //送宝刀
        //修改点击状态
        this.setState({
            clicked: true
        });
    },
    render: function(){
       var clicked = this.state.clicked;
	    if(clicked)
	        return (<button disabled="disabled" onClick={this.getDragonKillingSword}>屠龙宝刀，点击就送</button>);
	    else 
	        return (<button onClick={this.getDragonKillingSword}>屠龙宝刀，点击就送</button>);
    }
});

ReactDOM.render(<CustomComponent/>,
    document.getElementById('container')
);