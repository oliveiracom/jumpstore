import React from 'react';
import './product-card.scss';
import Photos from '../../assets/photos/shoes-5.jpg';

export default class ProductCard extends React.Component {
    render() {
        let items = []
        for(let i=0; i<10; i++){
        items.push(
            <div className="p_card">
                    <img src={Photos} />
                    <p>Tênis Adidas {i}</p>
                    <p className="price">R$ 299,90</p>
                    <button>COMPRAR</button>
            </div>
        )
        }
        return(
            <>
                {items}
            </>
        );
    }
}