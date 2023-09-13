import React from 'react';
import {  Layout, theme } from 'antd';
const { Header } = Layout;
const Navbar = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="layout">
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          border: '0px',
          color: 'white'
        }}
      >
        <div className='container'>
            <h2>LOJA JJ</h2>
        </div>
      </Header>
    </Layout>
  );
};
export default Navbar;
