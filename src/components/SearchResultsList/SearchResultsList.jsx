import React from 'react';
import { Card, Embed } from 'semantic-ui-react';


//render out teh youtube video
//show the iamge of teh youtube video
//also show teh description or title of video
//show as a list of cards


function SearchResultsList(props){

    const videos = props.searchYoutubeResults.map((video, i) => {
        return(
            <Card key={i}>
                <Embed
                    id={video.id.videoId} 
                    placeholder={video.snippet.thumbnails.medium.url} 
                    source="youtube"
                />
                <Card.Content>
                    <Card.Header>
                        {video.snippet.title}
                    </Card.Header>
                    <Card.Description>
                        {video.snippet.description}
                    </Card.Description>
                </Card.Content>
            </Card>
        )
    })

    return(
        <div>
            <h1>Play List</h1>
            {/* {props.searchYoutubeResults.map((result, idx)=> 
                <Card>
                <Image src={result.snippet.thumbnails.medium.url} wrapped ui={false}></Image>
                <Card.Content>

                    {result.etag}
                    
                    <Card.Description>
                        {result.snippet.description}
                    </Card.Description>
                </Card.Content>    
                </Card>
            )} */}
           <ul> {videos}</ul>
        </div>
    )
}

export default SearchResultsList;