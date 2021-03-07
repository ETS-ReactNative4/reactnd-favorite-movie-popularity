import React, { Component } from 'react'

class ListUsers extends Component {
    render() {
      const movieID = this.props.movieID;
      	
      function hasFavoritedMovies(profile){
        return movieID.toString() === profile.favoriteMovieID;
      }
      
      const usersWhoFavoritedThisMovie = this.props.profiles.filter(hasFavoritedMovies);
      
      if(usersWhoFavoritedThisMovie.length === 0) {
        return (
        	<p>None of the current users liked this movie</p>
        )
	}else{
    return (
        	<ul>
          	{
              
            usersWhoFavoritedThisMovie.map((p) => <li>{this.props.users[p.userID].name}</li>)
			}
			</ul>
        )
    }
    }

}

export default ListUsers