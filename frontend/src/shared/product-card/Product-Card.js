import React from 'react';
import './product-card.scss';

export default class ProductCard extends React.Component {
constructor() {
    super();

    this.state = {
        //products : this.props.products,
        items: [
            {
              "id": 1,
              "sku": "sku-1",
              "path": "camiseta-preta",
              "name": "Camiseta Preta",
              "image": "media/shirt-1.jpg",
              "price": 59.9,
              "filter": [
                {
                  "color": "Preta"
                }
              ]
            },
            {
              "id": 2,
              "sku": "sku-2",
              "path": "camiseta-laranja",
              "name": "Camiseta Laranja",
              "image": "media/shirt-2.jpg",
              "price": 40.5,
              "filter": [
                  {
                    "color": "Laranja"
                  }
              ]
            },
            {
              "id": 3,
              "sku": "sku-3",
              "path": "camiseta-amarela",
              "name": "Camiseta Amarela",
              "image": "media/shirt-3.jpg",
              "price": 61.49,
              "filter": [
                  {
                    "color": "Amarela"
                  }
              ]
            },
            {
              "id": 4,
              "sku": "sku-4",
              "path": "camiseta-rosa",
              "name": "Camiseta Rosa",
              "image": "media/shirt-4.jpg",
              "price": 52.0,
              "filter": [
                  {
                    "color": "Rosa"
                  }
              ]
            }
          ]
    }
}

addToCart(id) {
    console.log('Produto id ' + id + ' adicionado ao carrinho');
}
    render() {

        switch(this.props.category) {
            case 'camisetas' :
                //console.log('camiseta');
            break;
            case 'calcas' :
                //console.log('calcas');
            break;
            default :
                //console.log('show all');
            break;

        }

            let list = [];

            this.state.items.map((prod) => {

                let moneyMoneyMoney = prod.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
    
                list.push(
                    <div className="p_card" key={prod.id}>
                        <div className="photo_prod"><img src={`../${prod.image}`} /></div>
                        <p>{prod.name}</p>
                        <p className="price">{moneyMoneyMoney}</p>
                        <button onClick={() => this.addToCart( `${prod.id}` ) }>COMPRAR</button>
                    </div>
                )
            }
            );
            return(
                <>
                {list}
            </>
        );
    }
}