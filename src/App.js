// css
import './App.css';
import {Navbar, Container, Nav} from 'react-bootstrap'

// data
import posts from './data/Posts';

// component
import List from './components/List';
import Modal from './components/Modal';

// useState
import { useState, useTransition } from 'react';

// image
import logo from "./images/로꼬.png";
import backgroundImage from './images/bg1.jfif'; 

function App() {
  // let [title, setTitle] = useState(['유후', '무후', '뉴후']);
  let [modal, setModal] = useState(false);
  let [post] = useState(posts);
  let [inValue, setValue] = useState('');
  return (
    <div className="App" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar bg="dark" variant="dark" className='myNav'>
          <Container>
            <Navbar.Brand href="#home">김민재의 Blog</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <img src={logo} className='image' alt='로고입니당'></img>

        <p>본인일까요?</p>

        {/* 모달 */}
        {
          modal === true ?  <Modal modal={modal}/> : null
        }
        <div className='' onClick={()=>{
          modal === false ? setModal(true) : setModal(false)
          }}>
        </div>
        
        {/* 리스트 */}
        {
          post.map(function(a,b){
            return (
              <List post={post[b]}/>
            )
          })
        }
        <input type='text' onChange={(e)=>{
          setValue(e.target.value);
        }}/>
        <button onClick={()=>{
          // let copy = [...post];
          // copy.push(inValue);
        }}>글추가</button>

    </div>
  );
}

export default App;
