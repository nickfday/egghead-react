/* 7 - Access Nested Data
In order to access nested values/components in a component we can use props.children

Allows text values as well as the nested component to flow through into the html
*/


import React from 'react';

class App extends React.Component {
	render() {
		return <Button>I <Heart /> React</Button>
	}
}

// Gets inner HTML from component to pass through
const Button = (props) => <button>{props.children}</button>

class Heart extends React.Component {
	render() {
		return <span>&hearts;</span>
	}
}

export default App
