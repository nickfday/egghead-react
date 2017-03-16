/* 8 - Add Custom Validation propType

Built in Validation limited
e.g. React.PropTypes.string.isRequired

Custom Function More Powerful



*/


import React from 'react';

class App extends React.Component {
	render() {
		return <Title text="The"/>
	}
}

const Title = (props) => <h1>Title: {props.text}</h1>

// Custom Function
Title.propTypes = {
	text(props, propName, component){
		//isRequired
		if(!(propName in props)) {
			return new Error(`missing ${propName}`)
		}
		//length check
		if(props[propName].length < 6) {
			return new Error (`${propName} was too short`)
		}
	}
}


export default App
