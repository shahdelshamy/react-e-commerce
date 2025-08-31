import Table from 'react-bootstrap/Table';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart,removeFromCart,increaseQuantity,decreaseQuantity } from '../rtk/slices/cartSlice';
import { Button } from 'react-bootstrap';


function CartPage(){

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);  


    if(cart.length === 0){
        return (
            <div className="text-center pt-5 mt-5">
                <h2>Your Cart is Empty</h2>
                <p>Add some products to your cart.</p>
            </div>
        );
    }

return (
    <>
        <div className=" mt-3">
        <Button className='mb-3 mt-5' variant="danger" onClick={() => dispatch(clearCart())}>Clear Cart</Button>
        <Table striped bordered hover size="sm">
        <thead>
            <tr>
            <th>#</th>
            <th>Title</th>
            <th>Image</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total Price</th>
            <th>Actions</th>
            </tr>
        </thead>
        <tbody>

            {
                cart.map((item, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.title}</td>
                        <td>
                            <img src={item.image} alt={item.title} style={{width: '50px', height: '50px', objectFit: 'cover'}} />
                        </td>
                        <td>{item.price} $</td>
                        <td>
                            <div className="d-flex align-items-center">
                                <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                <span className="mx-2">{item.quantity}</span>
                                <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                            </div>
                        </td>
                        <td>{item.price * item.quantity}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => dispatch(removeFromCart(item))}>Remove</button>
                        </td>
                    </tr>
                ))
            }
        </tbody>
        </Table>
        </div>

        <div className="text-end">
            <h3>Total: {total.toFixed(2)} $</h3>
        </div>
    </>

);
}


export default CartPage;