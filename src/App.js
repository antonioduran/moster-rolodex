//import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
//import { Component } from 'react';
import { useState, useEffect } from 'react';

const App = () => {
  const [searchField, setSearchField] = useState('')
  const [monsters, setMonster] = useState([]);
  const [filteredMonsters,setFilteredMonsters] = useState(monsters)

  useEffect(()=> {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
     .then((users) => setMonster(users))
  }, [])

  useEffect(()=> {
    const newFilteredMonsters = monsters.filter((monster)=> {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters)

  }, [monsters, searchField])

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString); 
  }

  return (
    <div className="App">
    <h1 className='app-title'>Monsters Rolodex</h1>
    <SearchBox
      className = 'monster-search-box'
      onChangeHandler={onSearchChange} 
      placeHolder="Search Monsters"
    />

    <CardList monsters={filteredMonsters}/>
  </div>
  )
}

// class App extends Component {
//   constructor () {
//      super();
      
//      this.state = {
//         monsters : [],
//         searchField : ''
//       }
//     //console.log('constructor')
//   }

//     componentDidMount() {
//       //console.log('componentDidMount')
//       fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           ()=> {
//             //console.log(":::: "+users)
//             return {monsters : users};
//           },
//           () => {
//             //console.log("here--> " + this.state);
//           }
//         )
    
//       )
//     }

//     onSearchChange = (event) => {
//       const searchField = event.target.value.toLocaleLowerCase();
           

//       this.setState(()=> {
//         return { searchField}
//       }, ()=> {
//        // console.log({endingArray: this.state.monsters})
//       });
//     }

  
//   render() {
//     //console.log('Render')

//     const {monsters, searchField} = this.state;
//     const {onSearchChange} = this;

//     // console.log("monsters--> " + JSON.stringify(monsters))
//     // console.log("searchField--> " + JSON.stringify(searchField))

//     const filteredMonsters = monsters.filter((monster)=> {
//       return monster.name.toLocaleLowerCase().includes(searchField);
//     });

//     //console.log("fffff--> " + JSON.stringify(filteredMonsters))

//     return (
//       <div className="App">
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className = {`search-box ${this.props.className}`}
//           onChangeHandler={onSearchChange} 
//           placeHolder="Search Monster"/>
     
//      {/* {
//     filteredMonsters.map((monster)=> {
//       //console.log(this.state.monsters)
//       return (
//         <div key={monster.id}>
//           <h1> {monster.name}</h1>
//         </div>
//       )
//     })
//   } */}
     
//          <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
