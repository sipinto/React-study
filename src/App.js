/*eslint-disable*/

// css
import {Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';

// 데이터
import data from './dummy/Data';

// 컴포넌트
import Card from './Component/Card';
import About from './Component/About';
import Event from './Component/Event';

import {lazy, Suspense, useEffect, useState} from 'react'

const Detail = lazy( () => import('./Component/Detail.js') )
const Cart = lazy( () => import('./Component/Cart.js') )


// etc.
import { createContext } from 'react';
import { QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';

// router
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// axios
import axios from 'axios';

export let Context1 = createContext();

function App() {
  let obj = {name : 'kim'}
  localStorage.setItem('data', JSON.stringify(obj))
  let output = localStorage.getItem('data')

  console.log(JSON.parse(output).name)

  let [shoes, setShoes] = useState(data);
  let [재고, 재고없음] = useState([10,11,12]);
  let navigate = useNavigate();

  useEffect(()=>{
    localStorage.setItem('watched', JSON.stringify([]))
  },[])

  let result = useQuery(['작명'], ()=>
    axios.get('https://codingapple1.github.io/userdata.json')
    .then((a)=>{ return a.data })
  )

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/cart">Cart</Nav.Link>
        </Nav>
        <Nav className='ms-auto'>
          { result.isLoading && '로딩중'  }
          { result.error && '에러남' }
          { result.data && result.data.name }
        </Nav>
        </Container>
      </Navbar>

      <Suspense fallback={<div>로딩중임</div>}>
        {/* 라우터 */}
        <Routes>
            {/* 메인 페이지 */}
            <Route path="/" element={ 
              <div>
                <div className='main-bg'></div>
                <div>메인페이지에서 보여줄거</div> 
                <div className="container">
                      <div className="row">
                        {
                          shoes.map(function(a,i){
                            return(<Card shoes={shoes[i]}/>)
                          })
                        }
                      </div>
                </div>
                <button onClick={()=>{
                  axios.get('https://codingapple1.github.io/shop/data2.json')
                  .then((result)=>{ 
                    console.log(result.data); 
                    let copy = [...shoes];
                    let combi = copy.concat(result.data);
                    // copy.unshift(result.data);
                    console.log(combi);
                    setShoes(combi);
                  })
                  .catch(()=>{
                    console.log('실패했음 ㅅㄱ')
                  });
                }}>버튼 1</button>
                <button onClick={()=>{
                  axios.get('https://codingapple1.github.io/shop/data3.json')
                  .then((result)=>{
                    console.log(result.data);
                    let copy = [...shoes];
                    let combi = copy.concat(result.data);
                    setShoes(combi);
                  })
                }}>버튼 2</button>
              </div>
            } />

            {/* 세부사항 페이지 */}
            <Route path="/detail/:id" element={ 
              <Context1.Provider value={{재고, shoes}}>
                <Detail shoes={shoes}/> 
              </Context1.Provider>
            } />
            
            {/* About 페이지 */}
            <Route  path="/about" element={ <About></About> }>
              <Route path="member" element={ <div>멤버들...</div> }/>
              <Route path="location" element={ <div>회사들...</div> }/>
            </Route>

            {/* Event 페이지 */}
            <Route path='/event' element={<Event/>}>
              <Route path='one' element={ <div>첫 주문시 양배추즙 서비스</div>}/>
              <Route path='two' element={<div>생일기념 쿠폰받기</div>}/>
            </Route>

            {/* 장바구니 페이지 */}
            <Route path="/cart"  element={ <Cart/>}>

            </Route>

            {/* 없는 페이지 */}
            <Route path="*" element={ <div>없는 페이지임</div> } />
          </Routes>
      </Suspense>
    </div>
  );
}


export default App;
