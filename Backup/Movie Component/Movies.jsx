import React from "react";

class Movies extends React.Component{
    Movie_Name='VIKRAM';
         Hero_Name='KAMAL';
         Story='Good';
         Image='https://m.media-amazon.com/images/M/MV5BOTFhMDU5ZGYtNjcyNy00NjAyLWI5YzItYTUwZTk5MjhkMzk0XkEyXkFqcGdeQXVyMTA3MDk2NDg2._V1_.jpg'
    render(){
        return <div>
            <h1>Movie Class Component</h1>
            <h3>Movie Name:{this.Movie_Name}</h3>
            <h3>Hero Name:{this.Hero_Name}</h3>
            <h3>Story:{this.Story}</h3>
            <img src={this.Image} />
        </div>
    }
    
}
export default Movies