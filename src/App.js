// css
import {Navbar, Container, Nav } from 'react-bootstrap'
import './App.css';

// 데이터
import data from './dummy/Data';

// 컴포넌트

// etc.
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom'



function App() {
  let [shoes] = useState(data);

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
              </div>
            } />
            <Route path="/detail" element={ <div>상세페이지임</div> } />
            <Route path="/about" element={ <div>어바웃페이지임</div> } />
          </Routes>

    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img src={`https://codingapple1.github.io/shop/shoes${props.shoes.id+1}.jpg`} width="80%" />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.price}</p>
    </div>
  )
}


export default App;
