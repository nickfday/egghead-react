import React from 'react';

class App extends React.Component {
	// Gives 'this' the context within the component rather than parent class
	constructor(){
		super();
		this.state = {
			txt: 'this is the state txt',
			cat: 0
		}
	}

	//custom method
	update ( e ) {
		this.setState({txt: e.target.value})
	}

	render() {
		// {} interpolates the state objects value
		// Component updates
		  return (
		    <div>
		      <h1>{this.state.txt} - {this.state.cat}</h1>
		      <Widget update = {this.update.bind(this)} />
		    </div>
		)
	}
}

//Stateless component
// Child Component Updates the state of the parent component
const Widget = (props) =>
<input type="text" onChange={props.update}/>

export default App;

/* Props
A collection of values that are passed in as static values

State
A collection of values that are managed and updated by the components

6 - Components as Children For Other Components
	A components can render other components

*/

