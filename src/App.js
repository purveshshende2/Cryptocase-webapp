import React from 'react';
import {Route,Switch,Routes, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Exchanges, Homepage, News, Cryptocurrencies, CryptoDetails, Navbar } from './components';
import './App.css';
function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar/> 
      </div>
      <div className='main'>
        <Layout>
          <div className="routes">
            <Switch>
              <Route exact path="/">
                <Homepage/>
              </Route>
              <Route exact path="/exchanges">
                <Exchanges/>
              </Route>
              <Route exact path="/cryptocurrencies">
                <Cryptocurrencies/>
              </Route>
              <Route exact path="/crypto/:coinId">
                <CryptoDetails/>
              </Route>
              <Route exact path="/news">
                <News/>
              </Route>
            </Switch>
          </div>
        </Layout>
        <div className='footer'>
        <Typography.Title level={4} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          Cryptocase <br/>
          All right reserved
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
      </div>
    </div>
  );
}
//switch allow to have multiple routes
export default App;
