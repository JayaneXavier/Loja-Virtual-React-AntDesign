import Button1 from './Button1';
import React from 'react';
import { Card } from 'antd';
const { Meta } = Card;


const Card1 = ({ id, titulo, imagem, preco}) => (
    <Card className='card'
        hoverable
        style={{
            width: 240,
        }}
        cover={<img alt="example" src={imagem} className = 'card-img-top' />}
    >
        <Meta title={titulo} description= {`R$ ${preco}`} />s
        <Button1 texto='Detalhes do pedido' rota={`/sobre/${id}`}> </Button1>
    </Card>
)

export default Card1
