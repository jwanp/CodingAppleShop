import { Table } from 'react-bootstrap';
import { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increase } from './../store/userSlice.js';
import { addCount } from '../store/cartSlice.js';

let Child = memo(function () {
    console.log('Child 재랜더링됨');
    return <div>자식임</div>;
});

function Cart() {
    let state = useSelector((state) => {
        return state;
    });
    let dispatch = useDispatch();
    let [count, setCount] = useState(0);

    return (
        <div>
            <Child></Child>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}>
                +
            </button>
            <h6>
                {state.user.name} {state.user.age}의 장바구니
            </h6>
            <button
                onClick={() => {
                    dispatch(increase(10));
                }}>
                버튼
            </button>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {state.cart.map((a, i) => {
                        return (
                            <tr key={i}>
                                <td>{state.cart[i].id}</td>
                                <td>{state.cart[i].name}</td>
                                <td>{state.cart[i].count}</td>
                                <td>
                                    <button
                                        onClick={() => {
                                            dispatch(addCount(state.cart[i].id));
                                        }}>
                                        +
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </div>
    );
}

export default Cart;
