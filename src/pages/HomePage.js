import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../rtk/slices/productSlice"; // Update the path as needed
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardComponent from "../Components/CardComponent";

function HomePage(){

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    useEffect(()=>{
        dispatch(fetchProducts());
    },[dispatch]);

return (
   <Row className="pt-5 mt-3">
    {products.map(product => (
        <Col key={product.id} className="mb-4">
            <CardComponent product={product}/>
        </Col>
    ))}
   </Row>
);
}


export default HomePage;