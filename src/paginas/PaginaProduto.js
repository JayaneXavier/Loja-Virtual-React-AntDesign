import React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Image } from 'antd'
import Navbar from '../components/Navbar';
import Button1 from '../components/Button1';
import Link from 'antd/es/typography/Link';

const PaginaProduto = () => {

    const { id } = useParams();
    const [produto, setProduto] = useState('');

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((resposta) => {
                console.log(resposta.data);
                setProduto(resposta.data);
            });
    }, []);

    return (
        <>
            <Navbar />
            <div className='row container'>
                <div className='imagem col d-flex justify-content-center'>
                    <Image width={300} src={produto.image} />
                </div>
                <div className='informacao col'>
                    <h3>{produto.title}</h3>
                    <h6>{produto.description}</h6>
                    <h6>R$ {produto.price}</h6>
                    <Button1 texto='Retornar a pagina anterior' rota={'/'}> </Button1>
                </div>
            </div>
        </>
    )
};
export default PaginaProduto;
