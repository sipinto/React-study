function Card(props) {
    return (
      <div className="col-md-4">
        <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="80%" />
        <h4><a href={`/detail/${props.shoes.id}`}>{props.shoes.title}</a></h4>
        <p>{props.shoes.price}</p>
      </div>
    )
  }

export default Card;