# react-iamport
[![Build Status](https://travis-ci.org/corretto-inc/react-iamport.svg?branch=master)](https://travis-ci.org/corretto-inc/react-iamport)

Component react for iamport

## Installation
- `yarn add react-iamport` or `npm install react-iamport`

## How to use

### Basic

```js
import React from 'react';
import ReactDOM from 'react-dom';
import Iamport from 'react-iamport';

ReactDOM.render(
  <Iamport
    identificationCode="......"
    params={{
      pg: 'inicis',
      pay_method: 'card',
      merchant_uid: 'merchant_' + new Date().getTime(),
      name: '주문명:결제테스트',
      amount: 222,
      buyer_email: 'buyer@email.com',
      buyer_name: '정지승',
      buyer_tel: '010-1234-5678',
      buyer_addr: '서울특별시 강남구 삼성동',
      buyer_postcode: '123-456',
      m_redirect_url: 'https://www.yourdomain.com/payments/complete',
    }}
    onFailed={err => console.log(err)}
    onSuccess={res => console.log(res)}
    jqueryLoaded={false}
    render={(renderProps) => (
      <button
        type="button"
        onClick={renderProps.onClick}
      >
        충전하기
      </button>
    )}
  />,
  document.getElementById('demo')
);
```