import React from 'react';

import Header from '../shared/header/Header';
import '../shared/shared.scss';
import Breadcrumb from '../shared/breadcrumb/Breadcrumb';
import Filters from '../pages/filters/Filters';
import Footer from '../shared/footer/Footer';
import {ReactComponent as GridIcon} from '../assets/grid-icon.svg';
import {ReactComponent as ListIcon} from '../assets/list-icon.svg';

export default class Pants extends React.Component {
    constructor() {
        super();

        this.state = {
            filters: [
                {
                    "gender": "Gênero"
                }
            ],
            items: [
              {
                "id": 10,
                "sku": "sku-10",
                "path": "calca-social",
                "name": "Calça Social",
                "image": "media/pants-1.jpg",
                "price": 39.9,
                "specialPrice": 29.9,
                "filter": [
                  {
                    "gender": "Masculina"
                  }
                ]
              },
              {
                "id": 11,
                "sku": "sku-11",
                "path": "calca-feminina",
                "name": "Calça Feminina",
                "image": "media/pants-2.jpg",
                "price": 24.15,
                "filter": [
                    {
                      "gender": "Feminina"
                    }
                ]
              },
              {
                "id": 12,
                "sku": "sku-12",
                "path": "calca-la-feminina",
                "name": "Calça de Lã Feminina",
                "image": "media/pants-3.jpg",
                "price": 61.49,
                "filter": [
                    {
                      "gender": "Feminina"
                    }
                ]
              },
              {
                "id": 13,
                "sku": "sku-13",
                "path": "calca-caminhada-masculina",
                "name": "Calça Caminhada Masculina",
                "image": "media/pants-4.jpg",
                "price": 70.0,
                "specialPrice": 58,
                "filter": [
                  {
                    "gender": "Masculina"
                  }
                ]
              },
              {
                "id": 14,
                "sku": "sku-14",
                "path": "calca-caminhada-feminina",
                "name": "Calça Caminhada Feminina",
                "image": "media/pants-5.jpg",
                "price": 70.0,
                "filter": [
                  {
                    "gender": "Feminina"
                  }
                ]
              }
            ]
        }

    }
    render() {
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
                );
            });

        return(
            <>
            <Header />
            <div className="container row">
                <Breadcrumb />
            </div>
            <div className="wrapper container row">
             
                <div className="left">
                    <Filters/>
                </div>
                <div className="right">
                    <h1>Calças</h1>
                    <div className="row view"> 
                        <div>
                            <GridIcon className='grid_icon selected'/>
                            <ListIcon className='grid_icon'/>
                        </div>
                        <div className="order_by">
                            ORDENAR POR
                            <select>
                                <option>Selecione</option>
                                <option>Menor preço</option>
                                <option>Maior Preço</option>
                                <option>Mais Populares</option>
                            </select>
                        </div>
                    </div>

                    <div className="products">
                        {list} 
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}