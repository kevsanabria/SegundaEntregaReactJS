import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import { Button, Container } from "react-bootstrap";
import Css from "./ItemDetail.module.css"

function ItemDetailContainer() {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                resolve(fetch(`https://dummyjson.com/products/${id}`))
            }, 800);
        });
        promesa.then((resolve) => resolve.json()).then((data) => {
            setItem(data);
            console.log(data);
            console.log(item);
        });
    }, [id]);
    console.log(item);

    return (
        <Container className={`${Css.container} d-flex align-items-center`}>
            <Card className={`d-flex flex-row align-items-center `}>
                <div>
                    <Card.Img variant="top" src={item.images && item.images.length > 0 ? item.images[0] : ""} />
                </div>
                <Card.Body className={`d-flex flex-column align-items-center ${Css.body}`}>
                    <Card.Title>{item.title}</Card.Title>
                    <div className="d-flex justify-content-start ">
                        <Card.Text>{item.brand}</Card.Text>
                        <Card.Text className="ms-4">${item.price}</Card.Text>
                    </div>
                    <Card.Text>
                        {item.description}
                    </Card.Text>
                    <Button variant="primary">Add To Cart</Button>
                </Card.Body>
            </Card>
        </Container>
    );
}

export default ItemDetailContainer;


