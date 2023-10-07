/*eslint-disable*/

// css
import {Table} from 'react-bootstrap';

// redux
import { useSelector, useDispatch } from "react-redux";

// etc
import { changeName } from '../store';

function Cart(){
    let state = useSelector((state) => {return state});
    let dispatch = useDispatch();

    return(
        <div>
            { state.user }의 장바구니
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
                {
                    state.cart.map((a, i)=>
                    <tr key={i}>
                        <td>1</td>
                        <td>{state.cart[i].name}</td>
                        <td>{state.cart[i].count}</td>
                        <td>안녕</td>
                    </tr>
                    )
                }
                </tbody>
            </Table> 
            <button onClick={()=>{
                dispatch(changeName());
            }}>+</button> 
        </div>
    )
}

export default Cart;