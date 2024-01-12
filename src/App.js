import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Navbar,Container,Nav } from 'react-bootstrap';
import { Routes, Route, Link, useNavigate, Outlet  } from 'react-router-dom';

import data from './data.js';
import Detail from './routes/detail.js';


function App() {

  let [shoes] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
            <Nav.Link onClick={()=>{navigate('/detail')}}>Detail</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={<Main shoes = {shoes}/>}/>
        <Route path='/detail/:id' element={<Detail shoes= {shoes}/>}>
          <Route path="member" element={<div>멤버들</div>}/>
          <Route path="location" element={<div>회사위치</div>}/>
        </Route>
        <Route path='/event' element={<Event/>}>
          <Route path="one"element={<div>첫 주문시 양배추즙 서비스</div>}/>
          <Route path="two"element={<div>생일 기념 쿠폰 받기</div>}/>
        </Route>
        <Route path="*" element={<div>없는페이지임</div>}/>
      </Routes>

      
    </div>
  );
}

function Main(props){
  
  return(
    <>
    <div className="main-bg">
      </div>
      <div className="container">
        <div className="row">
          {
            props.shoes.map(function(a, i){
              return(
                <Item shoes = {a}/>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

function Item(props){
  let navigate = useNavigate();
  let img_id = props.shoes.id + 1
  let img_url = 'https://codingapple1.github.io/shop/shoes'+ img_id +'.jpg';
  return(
    <div className="col-md-4">
      <img src= {img_url} width="80%" alt="" onClick={()=>{
        navigate('/detail/' + props.shoes.id)}
      } />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
      <p>가격: {props.shoes.price}</p>   
    </div>
  )
}

function Event(props) {

  return(
    <div>
      <h4>오늘의 이벤트</h4>
      <Outlet></Outlet>
    </div>
  )
}


export default App;
