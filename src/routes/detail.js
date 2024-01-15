import { Outlet, useParams  } from 'react-router-dom';
import {useState,useEffect} from 'react'; 
import "./detail.css"
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
    let [alert, setAlert ]= useState(true);
    
    useEffect(()=>{
        let a = setTimeout(()=>{
            setAlert(false); 
        },2000)
        return ()=>{
            clearTimeout(a);
        }
    });

    let [isNumber, setIsNumber] = useState(true);

 return(
    <div className="container">
        {
            alert == true
            ? <div className="alert alert-warning">
                2초 이내 구매시 할인    
            </div>
            : null
        }
            
        <img src={"https://codingapple1.github.io/shop/shoes"+img_id+".jpg"} width="100%" alt=''/>
            
            
        {
            isNumber == false
            ?  <div className='alert alert-danger'>
                숫자만 입력하시오
            </div>
            : null
        }
            
        <input type="text" style = {{width: "200px"}} onChange={(e)=>{
            if(!isNaN(e.target.value)&& !isNumber){
                setIsNumber(true);
            }else if(isNaN(e.target.value) && isNumber){
                setIsNumber(false);
            }
        }}/>
            
        <h4 className="pt-5">{찾은상품.title}</h4>
        <p>{찾은상품.content}</p>
        <p>{찾은상품.price}원</p>
        <button className="btn btn-danger">주문하기</button> 
    
    </div> 
 )   
}

export default Detail;

