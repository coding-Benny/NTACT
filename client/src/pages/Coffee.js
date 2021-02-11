import React, {useState, useEffect} from 'react';
import axois from 'axios';
import {Link} from 'react-router-dom';
import Cart from '../component/Cart';

function Coffee() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axois.get('/api/menus')
            .then((res) => setProducts(res.data));
    }, []);

    const coffee = products.filter((res) => {
        return res.category_id === 100;
    });

    return (
        <div>
            <Link to='/shake'>
                <button>SHAKE</button>
            </Link>
            <button>COFFEE</button>
            <Link to ='/milkbeverage'>
                <button>MILK BEVERAGE</button>
            </Link>
            {
                coffee.map((item) => {
                    return (
                        <div key={item.id}>
                            <img src={item.img_url} />
                            <div>{item.name_kor}</div>
                            <div>{item.price.toLocaleString()}원</div>
                            <button>장바구니 담기</button>
                        </div>
                    );
                })
            }
            <Cart />
        </div>
    );
}

export default Coffee;