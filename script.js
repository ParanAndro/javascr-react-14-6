var Counter = React.createClass({
	getInitialState: function() {
		return {
			counter: 0
		};
	},

	increment: function () {
		this.setState({
			counter: this.state.counter + 1
		});
	},

	decrement: function () {
		this.setState({
			counter: this.state.counter - 1
		});
	},

	incrementSix: function () {
		this.setState({
			counter: this.state.counter + 6
		});
	},
	render: function() {
		return React.createElement('div', {className: 'Counter'},
			React.createElement('span', {}, 'Current result: ' + this.state.counter),
				React.createElement('div', {}, 'Counter +1',
					React.createElement('button', {onClick: this.increment}, '+1')
				),
				React.createElement('div', {}, 'Counter -1',
					React.createElement('button', {onClick: this.decrement}, '-1')
				),
				React.createElement('div', {}, 'Counter +6',
					React.createElement('button', {onClick: this.incrementSix}, '+6')
				)
			
		)
	}
});
var element = React.createElement(Counter);
ReactDOM.render(element, document.getElementById('app'));
