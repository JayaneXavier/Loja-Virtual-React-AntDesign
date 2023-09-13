import React from 'react';
import { Button, Space } from 'antd';
import { Link } from 'react-router-dom';

const Button1 = ({ texto, rota }) => (
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
  >
    <Button className='button footer' type="primary" block>
      <Link to={rota} style={{textDecoration: 'none'}}>{ texto }</Link>
    </Button>
  </Space>
);

export default Button1;