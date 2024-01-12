import { Outlet, useParams  } from 'react-router-dom';
import {useState,useEffect} from 'react'; 
// import styled from 'styled-components';

// let Box = styled.div`
//     padding: 20px;
//     background: gray;
// `;

// let YellowBtn = styled.button`
//     background: yellow;
//     color: black;
//     padding: 10px;
// `;

function Detail(props){
    let {id} = useParams();
    let img_id = Number(id) + 1;
    let 찾은상품 = props.shoes.find((x)=>{
        return x.id == id;
    });
    let [alertShowing, setalertShowing ]= useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            setalertShowing(false); 
        },2000)
    });
 return(
    <div className="container">
        {
            alertShowing
            ? <div className="alert alert-warning">
                2초 이내 구매시 할인    
            </div>
            : null
        }
        <div className="row">
            <div className="col-md-6">
            <img src={"https://codingapple1.github.io/shop/shoes"+img_id+".jpg"} width="100%" alt=''/>
            </div>
            <div className="col-md-6">
            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button className="btn btn-danger">주문하기</button> 
            </div>
        </div>
        <Outlet></Outlet>
    </div> 
 )   
}

export default Detail;

