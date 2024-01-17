import { Table } from 'react-bootstrap';
import { useSelector } from 'react-redux';

function Cart() {
    let cart = useSelector((state) => {
        return state.cart;
    });

    return (
        <Table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                </tr>
            </thead>
            {cart.map((a, i) => {
                return (
                    <tbody>
                        <tr>
                            <td>{cart[i].id}</td>
                            <td>{cart[i].name}</td>
                            <td>{cart[i].count}</td>
                            <td>안녕</td>
                        </tr>
                    </tbody>
                );
            })}
        </Table>
    );
}

export default Cart;
