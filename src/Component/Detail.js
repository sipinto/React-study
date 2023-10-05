// 파라미터 사용
import { Link, useParams } from "react-router-dom";
// css
import styled from 'styled-components'
// LifeCycle
import { useState, useEffect } from "react";

    let Box = styled.div`
        padding : 20px;
        color : grey
    `;
    let YellowBtn = styled.button`
        background : yellow;
        width : 120px;
        color : black;
        padding : 10px;
    `;
    let YellowBox = styled.div`
        padding : 20px;
        color : yellow;
        display : true;
    `;

    function Detail(props) {

        useEffect(()=>{
            setTimeout(()=>{})
            console.log('안녕');
        });

        let {id} = useParams();
        let found = props.shoes.find(function(x){
            return x.id == id
        });

    // 디버깅용
    console.log(id);
    return(

        <div>
            <YellowBox>아하</YellowBox>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={`https://codingapple1.github.io/shop/shoes${1+found.id}.jpg`} width="100%" />
                    </div>
                    <div className="col-md-6">
                        <h4 className="pt-5">{found.title}</h4>
                        <Box>
                            <p>{found.content}</p>
                        </Box>
                        <p>{found.price}원</p>
                        <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
                <Link to="/">
                    <Box>
                        <YellowBtn>돌아가기</YellowBtn>
                    </Box>
                </Link>            
            </div> 
        </div>
    )
}

export default Detail;