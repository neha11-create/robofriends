import React ,{Component} from 'react';
import CardList from '../Components/CardList';
import SearchBox from '../Components/SearchBox';
import Scroll from '../Components/Scroll';

  
// because this have state thats why it is called smart component
class App extends Component {
	constructor(){
		super()
		this.state ={
			robots:[],
			searchfield:''
		}	
	}
// we fetch whatever the users are then json then getting the users and updating the users  with setstate
// fetch comes with all browsers now and it is a tool to make a request from the browsers
	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>  response.json())
		.then(users => this.setState({ robots: users}));

	}

	onSearchChange=(event)=>{
		this.setState({searchfield:event.target.value})
		
	}
	render(){
		const filteredRobots=this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})
		 // or if(!this.state.robots.length)
		if(this.state.robots.length=== 0){
			return<h1>Loading</h1>
		}
		else{
			    return(
				<div className='tc'>
				<h1>RoboFriends</h1>
				<SearchBox  searchChange={this.onSearchChange}/>
		        <Scroll>
		              <CardList robots={filteredRobots} />
		        </Scroll>
		        </div>
			    );
	        }
	}	
}
 export default App;