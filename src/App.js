import React ,{Component} from 'react';

import './App.css';
import { CardList } from './components/card-list/card-list.components';
import {SearchBox} from './components/search-box/search-box.component'

class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters:[ ] ,
      searchField: ''
    }
  
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=> response.json())
    .then(users => this.setState({monsters: users}))
  }
  handleChange = (e) => {
    this.setState({searchField:e.target.value});
  }
 render(){
   const {monsters, searchField} = this.state;
   const filterMonsters = monsters.filter(monster =>    
     monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
  return (
    <div className="App">
      <h1>monsters Rolodex</h1>
      <SearchBox 
      placeholder = 'search monstaers'
      handleChange = {this.handleChange}/>
      <CardList monsters = {filterMonsters} />
    </div>
  );
 }
 
}

export default App;
