import { Link, useParams } from "react-router-dom";

function Detail(props) {
    let {id} = useParams();
    let found = props.shoes.find(function(x){
        return x.id == id
    });

    // 디버깅용
    console.log(id);
    return(
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${1+found.id}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{found.title}</h4>
                        <p>{found.content}</p>
                        <p>{found.price}원</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
                <Link to="/">
                    <button>돌아가기</button>
                </Link>            
            </div> 
        </div>
    )
}

export default Detail;