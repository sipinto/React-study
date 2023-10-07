// 파라미터 사용
import { Link, json, useParams } from "react-router-dom";
// css
import styled from 'styled-components'
import { Nav, Tab } from "react-bootstrap";
// LifeCycle
import { useState, useEffect, useContext } from "react";
// Component
import TabBox from './TabBox.js';

import {Context1} from './../App.js';
import { addItem } from "../store.js";
import { useDispatch } from "react-redux";




    let Box = styled.div`
        padding : 20px;
        color : grey;
    `;
    let YellowBtn = styled.button`
        background : yellow;
        width : 120px;
        color : black;
        padding : 10px;
    `;
    let YellowBox = styled.div`
        padding : 20px;
        background : yellow;
        display : true;
        width : 120px;

    `;

    function Detail(props) {
        let {재고, shoes} = useContext(Context1);

        let [fade2, setFade2] = useState('')

        // let [count, setCount] = useState(0);
        let [alert1, setAlert1] = useState(true);
        let [inputValue, setInputValue] = useState('');
        let [tab, setTab] = useState(0);
        let dispatch = useDispatch();

        useEffect(()=>{ 
            let a = setTimeout(()=>{ setAlert1(false) }, 2000)
            return ()=>{
              clearTimeout(a)
            }
          }, [])

        useEffect(()=>{
            if(isNaN(inputValue) == true){
                alert('그러지 마세요 크흠')
            }
        }, [inputValue])
        
        useEffect(()=>{
            setFade2('end')
            return ()=>{
              setFade2('')
            }
          },[])

        useEffect(()=>{

            let output = localStorage.getItem('watched')
            output = JSON.parse(output)
            output.push(found.id)
            output = new Set(output)
            output = Array.from(output)
            localStorage.setItem('watched',JSON.stringify(output))
        
        },[])
        

        let {id} = useParams();
        let found = props.shoes.find(function(x){
            return x.id == id
        });

    // 디버깅용
    console.log(id);
    return(

        <div className={'container start ' + fade2}>
            <div>
                {
                    alert1 == true ? 
                    <div className="alert alert-warning">
                        2초 이내 구매 시 할인 
                    </div> 
                    : null
                }
                
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <img src={`https://codingapple1.github.io/shop/shoes${1+found.id}.jpg`} width="100%" />
                        </div>
                        <div className="col-md-6">
                            <form>
                                <input type="text" onChange={(e)=>{
                                    setInputValue(e.target.value);
                                }}></input>
                            </form>
                            <h4 className="pt-5">{found.title}</h4>
                            <Box>
                                <p>{found.content}</p>
                            </Box>
                            <p>{found.price}원</p>
                            <button className="btn btn-danger" onClick={()=>{
                                dispatch(addItem({id: 1, name : 'Red knit', count : 1}))
                            }}>주문하기</button> 
                        </div>
                    </div>
                    <Nav variant="tabs"  defaultActiveKey="link0">
                        <Nav.Item>
                            <Nav.Link onClick={()=>{setTab(0)}} eventKey="link0">버튼0</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{setTab(1)}} eventKey="link1">버튼1</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link onClick={()=>{setTab(2)}} eventKey="link2">버튼2</Nav.Link>
                        </Nav.Item>
                    </Nav>
                    <TabBox tab={tab}/>
                    <Link to="/">
                        <Box>
                            <YellowBtn>돌아가기</YellowBtn>
                        </Box>
                    </Link>
                </div> 
            </div>
        </div>

    )
}


export default Detail;