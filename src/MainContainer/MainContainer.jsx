import React, {Component} from 'react';

import SearchBar from '../components/SearchBar/SearchBar'
import SearchResultsList from '../components/SearchResultsList/SearchResultsList'
import {Grid} from 'semantic-ui-react'


class MainContainer extends Component{
  constructor(){
    super()
    this.state ={
        searchYoutubeResults: []
    }
  }

  getYoutubeResults =  async (searchTerm) =>{
    console.log(searchTerm);

    try{
        const request = await fetch(`/search/${searchTerm}`)
        const results = await request.json()

        console.log(results)
        this.setState({
            searchYoutubeResults: [...results.data.items]
        })
    }catch(err){
        console.log(err)
    }
  }

  render(){
    return(
      <Grid>
        <Grid.Row columns={2}>
            <Grid.Column>
                <h1>Search</h1>
                <SearchBar getYoutubeResults={this.getYoutubeResults}/>
            </Grid.Column>
            <Grid.Column>
                <SearchResultsList searchYoutubeResults={this.state.searchYoutubeResults} />
            </Grid.Column>
        </Grid.Row>
      </Grid>
    )  
  }
}

export default MainContainer
