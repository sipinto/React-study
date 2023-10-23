import './../App.css';
function List(props){
    return(
        <div className="list">
          <h4>후후{props.post.title}</h4>
          <p>{props.post.content}</p>
        </div>
    );
}

export default List;