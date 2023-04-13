import React, { useState, useEffect } from 'react';
import  Container  from 'react-bootstrap/Container';
import Row  from 'react-bootstrap/Row';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';

const ItemListContainer = () => {
    const [item, setItem] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() => {
                if (id === undefined) { resolve(fetch(`https://dummyjson.com/products`)) }
                else {
                    resolve(fetch(`https://dummyjson.com/products/category/${id}`))
                }
                ;
            }, 300);
        });
        promesa.then((resolve) => resolve.json()).then((data) => {
            setItem(data.products);
        });
    }, [id]);


    return (
        <Container>

                <ItemList item={item}/>

        </Container>
    );
};


export default ItemListContainer;
