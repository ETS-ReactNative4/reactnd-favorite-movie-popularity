import React, { Component } from 'react'
import PrintMessage from './PrintMessage';
import ListUsers from './ListUsers';

class ListMovies extends Component {
    render() {
      
        return (
          <div>
          	{
            	Object.entries(this.props.movies).map(([key, value]) => (
    				<span key={key}>
          				<h2 >{value.name}</h2>
						<p><PrintMessage message={'Like By:'}/></p>
						<ListUsers users={this.props.users} profiles={this.props.profiles} movieID={value.id}/>
					</span>
				))
          	}
  		</div>
		)
	}
}
export default ListMovies