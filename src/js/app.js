var CustomComponent = React.createClass({
    render: function(){
    	var rows = [];
        var $nodes = ['Alice', 'Emily', 'Kate'].map(function(name, index){
            //console.info('name : ' + obj.name + ' , ' + index) ;
            //rows.push(<span>{obj.name}</span>) ;
            return (<div key={index}>Hello, {name}!</div>);
        });
        return (<div className="custom-component">{$nodes}</div>);
    }
});


ReactDOM.render(<CustomComponent/>,
    document.getElementById('container')
);