import React, { useState } from 'react';
import millify from 'millify';
import {Link} from 'react-router-dom';
import {Card,Row,Col,Input} from 'antd';

import {useGetCryptosQuery} from '../services/cryptoApi';


const Cryptocurrencies = () => {
  const{data: cryptoList,isFetching} = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);


  return (
    <>
      <Row gutter={[32,32]} className="crypto-card-container">
        {cryptos.map((currency) => (
          <Col xs={24} sm={12} lg={6} className="crypto-card" key={currency.id} >
            <Link to={`/crypto/${currency.id}`} >
             <Card title={`${currency.rank}. ${currency.name}`} extra={<img className='crypto-image' src={currency.iconUrl} />}
                hoverable
              >

                <p> Price : {millify(currency.price)} </p>
                <p> Market Cap : {millify(currency.marketCap)} </p>
                <p> Daily Change : {millify(currency.change)} </p>
             </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </>
  )
  //here , Link that entire card is going to be link
  //Remeber we looping over something so we need a id.
  //xs- how its gonna be in extra small devices
  //gutter - spaces in between items in antd
}//empty brackets are react fragments

export default Cryptocurrencies