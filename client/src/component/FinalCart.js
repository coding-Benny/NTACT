import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Steps, Divider, Button } from 'antd';
import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { 
  deleteCart, increment, decrement, deleteAll,
} from '../store/actions';
import Header from '../pages/Header';
import Payment from '../Payment/index';

function FinalCart() {
  const { Step } = Steps;
  const ButtonGroup = Button.Group;
  const dispatch = useDispatch();
  const history = useHistory();
  const cart2 = useSelector((store) => store.cartReducer);

  const list = cart2.cart.map((item) => (
    <div key={item.Id} className="item" item={item}>
      <Button className="delete" type="text" onClick={() => dispatch(deleteCart(item))}>x</Button>
      <div className="itemName">{item.Name}</div>
      <ButtonGroup className="button">
        <Button onClick={() => dispatch(decrement(item))} min={1}>
          <MinusOutlined />
        </Button>
        <Button>
          {item.Quantity}
        </Button>
        <Button onClick={() => dispatch(increment(item))}>
          <PlusOutlined />
        </Button>
      </ButtonGroup>
      <div className="price">{item.Price}</div>
      <Divider className="divider" />
    </div>
  ));

  function resetcart() {
    if (list.length > 0) {
      dispatch(deleteAll());
      history.push('/menu');
    } else {
      alert('장바구니가 비어있습니다.');
    }
  }

  return (
    <>
      <Header />
      <StepsBar>
        <Steps type="navigation" size="small" current={0} className="site-navigation-steps">
          <Step title="상품 확인" status="process" />
          <Step title="결제" status="wait" />
          <Step title="주문 접수" status="wait" />
        </Steps>
        <div className="menucnt">
          담은 메뉴:&nbsp;
          {list.length}
          개
        </div>
        <hr />
        <div>{list}</div>
        <Button type="default" size="large" danger className="deleteAll" onClick={resetcart}>
          전체 삭제
        </Button>
        <div className="line" />
        <div className="finalSum">
          총 주문 금액:
          &nbsp;
          {cart2.total}
          &nbsp;
          원
        </div>
        <div className="line" />
        <Payment sumAmount={cart2.total} cartItems={cart2.cart} />
      </StepsBar>
    </>
  );
}

const StepsBar = styled.div`
    display: inline;

    .deleteAll {
        margin: auto;
        width: 30%;
        margin-left: 35%;
    }
    .finalSum {
        font-size: 1.5rem;
    }
    .button {
        margin-top: 10px;
    }
    .delete {
        float: right;
    }
    .itemName {
        font-size: 17px;
        font-weight: bold;
    }
    .price {
        float: right;
        margin-right: 30px;
        margin-top: 30px;
        font-size: 15px;
    }
    .divider {
        margin: 30px;
    }
    .menucnt {
        text-align: center;
        margin-top: 8px;
    }
    .site-navigation-steps {
        margin-bottom: 2px;
        box-shadow: 0px -1px 0 0 #e8e8e8 inset;
    }
    .line {
        background-color: #ffb400;
        height: 0.2rem;
    }
`;
export default FinalCart;