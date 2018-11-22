import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';

import Iamport from '../dist/index';

const Wrapper = styled.div`
  width: 500px;
  height: 500px;
`;

const Button = styled.button`
  width: 200px;
  height: 40px;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Iamport
          identificationCode="........"
          params={{
            pg: 'inicis',
            pay_method: 'card',
            merchant_uid: 'merchant_' + new Date().getTime(),
            name: '주문명:결제테스트',
            amount: 222,
            buyer_email: 'iamport@siot.do',
            buyer_name: '구매자이름',
            buyer_tel: '010-1234-5678',
            buyer_addr: '서울특별시 강남구 삼성동',
            buyer_postcode: '123-456',
            m_redirect_url: 'https://www.yourdomain.com/payments/complete',
          }}
          onFailed={err => console.log(err)}
          onSuccess={res => console.log(res)}
          render={(renderProps) => (
            <Button
              type="button"
              onClick={renderProps.onClick}
            >
              충전하기
            </Button>
          )}
        />
      </Wrapper>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('demo')
);