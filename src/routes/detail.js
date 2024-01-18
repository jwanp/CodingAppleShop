import { Outlet, useParams } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import { UseDispatch } from 'react-redux';

import { Context1 } from './../App.js';
import { addItem } from '../store/cartSlice.js';
import './detail.css';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
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

function Detail(props) {
    let dispatch = useDispatch();
    let navigate = useNavigate();
    let { 재고 } = useContext(Context1);

    let { id } = useParams();
    let img_id = Number(id) + 1;
    let 찾은상품 = props.shoes.find((x) => {
        return x.id == id;
    });

    let [alert, setAlert] = useState(true);
    let [탭, 탭변경] = useState(0);

    useEffect(() => {
        let a = setTimeout(() => {
            setAlert(false);
        }, 2000);
        return () => {
            clearTimeout(a);
        };
    });

    useEffect(() => {
        let watched = localStorage.getItem('watched');
        watched = JSON.parse(watched);
        watched.push(id);
        watched = [...new Set(watched)];
        localStorage.setItem('watched', JSON.stringify(watched));
    });

    let [isNumber, setIsNumber] = useState(true);
    let [fade, setFade] = useState('');

    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end');
        }, 100);
        return () => {
            clearTimeout(a);
            setFade('');
        };
    }, [props]);

    return (
        <div className={'container start ' + fade}>
            {alert == true ? <div className="alert alert-warning">2초 이내 구매시 할인</div> : null}
            <img src={'https://codingapple1.github.io/shop/shoes' + img_id + '.jpg'} width="100%" alt="" />
            {isNumber == false ? <div className="alert alert-danger">숫자만 입력하시오</div> : null}
            <input
                type="text"
                style={{ width: '200px' }}
                onChange={(e) => {
                    if (!isNaN(e.target.value) && !isNumber) {
                        setIsNumber(true);
                    } else if (isNaN(e.target.value) && isNumber) {
                        setIsNumber(false);
                    }
                }}
            />

            <h4 className="pt-5">{찾은상품.title}</h4>
            <p>{찾은상품.content}</p>
            <p>{찾은상품.price}원</p>
            <button
                className="btn btn-danger"
                onClick={() => {
                    let item = {
                        id: 찾은상품.id,
                        name: 찾은상품.title,
                        count: 1,
                    };
                    dispatch(addItem(item));
                    // navigate('/cart');
                }}
            >
                주문하기
            </button>
            <Nav variant="tabs" defaultActiveKey="link0">
                <Nav.Item>
                    <Nav.Link
                        eventKey="link0"
                        onClick={() => {
                            탭변경(0);
                        }}
                    >
                        버튼0
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="link1"
                        onClick={() => {
                            탭변경(1);
                        }}
                    >
                        버튼1
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link
                        eventKey="link2"
                        onClick={() => {
                            탭변경(2);
                        }}
                    >
                        버튼2
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <TabContent 탭={탭} />
        </div>
    );
}

function TabContent({ 탭 }) {
    let [fade, setFade] = useState('');
    useEffect(() => {
        let a = setTimeout(() => {
            setFade('end');
        }, 100);
        return () => {
            clearTimeout(a);
            setFade('');
        };
    }, [탭]);
    return <div className={'start ' + fade}>{[<div>내용0</div>, <div>내용1</div>, <div>내용2</div>][탭]}</div>;
}

export default Detail;
