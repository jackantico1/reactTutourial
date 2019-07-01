import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person.js'
import './Person/Person.css'

class App extends Component {
  state = { 
    people: [
      {id: "1231wdasda", name: "Jack", age: 19},
      {id: "1dasd32", name: "Guan", age: 23},
      {id: "1wsqwq31", name: "Stephen", age: 21}
    ],
    otherState: 'some other value',
    showPeople: false
  };

  switchNameHandler = (newName) => {
    this.setState({
      people: [
        { name: newName, age: 20},
        {name: "Guan Song", age: 23},
        {name: "Stephen Antico", age: 22}
      ]
    })
  }

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.people.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.people[personIndex]
    }
    person.name = event.target.value;
    const people = [...this.state.people];
    people[personIndex] = person;
    this.setState({people: people})
  }

  togglePeopleHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
    //console.log(`togglePeopleHandler fired and showPeople is ${this.state.showPeople}`);
  }

  deletePersonHandler = (index) => {
    const people = [...this.state.people];
    people.splice(index, 1);
    this.setState({people: people})
  }

render() {

  const style = {
    backgroundColor: "green",
    color: "white",
    font: "inherit",
    border: "1px solid blue",
    padding: "8px",
    cursor: "pointer",
    ':hover': {
      backgroundColor: "lightgreen",
      color: "black"
    } 
  }

  let people = null; //this is normal JS code so we can do JS stuff in here
  if (this.state.showPeople) {
    people = (
      <div>
        {this.state.people.map((person, index) => {
          return <Person
            click = {() => this.deletePersonHandler(index)}
            name={person.name}
            age={person.age}
            key={person.id}
            changed={(event) => this.nameChangeHandler(event, person.id)} />
        })}
      </div>
    );
  }

  let classes = []
  if (this.state.people.length < 2) {
    classes.push("italic");
    //console.log(`The text is now italic and length of people is ${this.state.people.length}`)
  } 

  if (this.state.showPeople.length < 1) {
    classes.push("bold")
    //console.log(`The text is now bold and length of people is ${this.state.people.length}`)
  } 

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p
      className={classes.join(" ")}>This is really working!</p>
      <button
        style={style}
        onClick={() => this.togglePeopleHandler()}>Toggle People</button>
      {people}
    </div>
  );  
  }
}

export default App;