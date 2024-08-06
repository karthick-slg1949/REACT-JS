function Movie(){
    let Movie_Name='LEO';
    let Hero_Name='VIJAY';
    let Story='Vera Level';
    let Movie_Image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6fvREc1FCQREyh5ORvs2-KdduGlNSf8hKfw&s"

    return <div>
        <h1>Movie Comoponent</h1><hr />
        <h3>Movie_Name:{Movie_Name}</h3>
        <h3>Hero_Name:{Hero_Name}</h3>
        <p>Story:{Story}</p>
        <img src={Movie_Image}/>
    </div>

}
export default Movie