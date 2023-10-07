// css
import {Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';

// 데이터
import data from './dummy/Data';

// 컴포넌트
import Card from './Component/Card';
import Detail from './Component/Detail';
import About from './Component/About';
import Event from './Component/Event';

// etc.
import { useState } from 'react';

// router
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

// axios
import axios from 'axios';


function App() {
  let [shoes, setShoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/detail">Detail</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        </Container>
      </Navbar>

      

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
                }}>버튼</button>
              </div>
            } />

            {/* 세부사항 페이지 */}
            <Route path="/detail/:id" element={ <Detail shoes={shoes}/> } />
            
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

            {/* 없는 페이지 */}
            <Route path="*" element={ <div>없는 페이지임</div> } />
          </Routes>

    </div>
  );
}

// function Card(props) {
//   return (
//     <div className="col-md-4">
//       <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="80%" />
//       <h4>{props.shoes.title}</h4>
//       <p>{props.shoes.price}</p>
//     </div>
//   )
// }


export default App;
