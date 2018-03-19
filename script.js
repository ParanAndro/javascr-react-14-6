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
			React.createElement('span', {}, 'Current result +/- 1: ' + this.state.counter),
				React.createElement('div', {}, 'Counter +1',
					React.createElement('button', {onClick: this.increment}, '+1')
				),
				React.createElement('div', {}, 'Counter -1',
					React.createElement('button', {onClick: this.decrement}, '-1')
				),
		)
	},

	getDefaultProps: function() {
		console.log('Tworzenie nowego komponentu: ustawia domyślne wartosci propsów, które nie zostały przekazane do komponentu');
	},
	componentWillMount: function() {
		console.log('Tworzenie nowego komponentu: coś się dzieje - program pracuje i zaraz bedzie wynik - mozna to zakomuniować użytkownikowi');
	},
	componentDidMount: function() {
		console.log('Tworzenie nowego komponentu: juz sie podziało, co się miało podziać, np. załadowal sie plik - mozna to zakomunikowac uzytkownikowi');
	},
	componentWillReceiveProps: function() {
		console.log('Aktualizacja komponentu: zostanie wywołana tylko wtedy, gdy komponent otrzyma nowe właściwości; pozwala aktualizować stan na podstawie nadchodzących właściwości.');
	},
	shouldComponentUpdate: function() {
		return(true);
		console.log('Aktualizacja komponentu: sprawdz, czy trzeba ponownie przerenderowac komponent (if true), jezeli false, to blokuje działanie komponentu');
	},
	componentWillUpdate: function(){
		console.log("Aktualizacja komponentu: wywoływana, kiedy sCU zwróci true");
	},
	componentDidUpdate: function () {
		console.log('Aktualizacja komponentu: można manipulowac na DOM, np wyświetlić komunikat');
	},
	componentWillUnmount: function () {
		console.log('Faza usuwania: ');
	}
});



var element = 
React.createElement('div', {}, 
	React.createElement(Counter),
	React.createElement(Counter),
	React.createElement(Counter)
);


ReactDOM.render(element, document.getElementById('app'));
