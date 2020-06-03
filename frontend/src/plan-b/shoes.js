import React from 'react';

import Header from '../shared/header/Header';
import '../shared/shared.scss';
import Breadcrumb from '../shared/breadcrumb/Breadcrumb';
import Filters from '../pages/filters/Filters';
import Footer from '../shared/footer/Footer';
import {ReactComponent as GridIcon} from '../assets/grid-icon.svg';
import {ReactComponent as ListIcon} from '../assets/list-icon.svg';

export default class Shoes extends React.Component {
    constructor() {
        super();

        this.state = {
            filters: [
                {
                    "color": "Cor"
                }
            ],
            items: [
              {
                "id": 31,
                "sku": "sku-31",
                "path": "tenis-preto-couro",
                "name": "Tênis Preto Couro",
                "image": "media/shoes-1.jpg",
                "price": 129.9,
                "filter": [
                  {
                    "color": "Preta"
                  }
                ]
              },
              {
                "id": 32,
                "sku": "sku-32",
                "path": "tenis-preto",
                "name": "Tênis Preto Masculino",
                "image": "media/shoes-2.jpg",
                "price": 140.5,
                "filter": [
                    {
                      "color": "Laranja"
                    }
                ]
              },
              {
                "id": 33,
                "sku": "sku-33",
                "path": "tenis-corrida",
                "name": "Tênis Corrida",
                "image": "media/shoes-3.jpg",
                "price": 261.49,
                "filter": [
                    {
                      "color": "Amarela"
                    }
                ]
              },
              {
                "id": 34,
                "sku": "sku-34",
                "path": "tenis-corrida-gel",
                "name": "Tênis Corrida Gel",
                "image": "media/shoes-4.jpg",
                "price": 352.0,
                "filter": [
                    {
                      "color": "Cinza"
                    }
                ]
              },
              {
                "id": 35,
                "sku": "sku-35",
                "path": "tenis-slip",
                "name": "Tênis Slip Azul",
                "image": "media/shoes-5.jpg",
                "price": 92.0,
                "filter": [
                    {
                      "color": "Azul"
                    }
                ]
              },
              {
                "id": 36,
                "sku": "sku-36",
                "path": "tenis-slip-preto",
                "name": "Tênis Slip Preto",
                "image": "media/shoes-6.jpg",
                "price": 90.0,
                "specialPrice": 50.9,
                "filter": [
                    {
                      "color": "Preto"
                    }
                ]
              },
              {
                "id": 37,
                "sku": "sku-37",
                "path": "tenis-corrida-rosa",
                "name": "Tênis Corrida - Rosa ",
                "image": "media/shoes-7.jpg",
                "price": 315.0,
                "filter": [
                    {
                      "color": "Rosa"
                    }
                ]
              },
              {
                "id": 38,
                "sku": "sku-38",
                "path": "tenis-rosa",
                "name": "Tênis Rosa Feminino",
                "image": "media/shoes-8.jpg",
                "price": 281.0,
                "filter": [
                    {
                      "color": "Rosa"
                    }
                ]
              },
              {
                "id": 39,
                "sku": "sku-39",
                "path": "tenis-casual",
                "name": "Tênis Casual Bege",
                "image": "media/shoes-9.jpg",
                "price": 198.0,
                "specialPrice": 180.9,
                "filter": [
                    {
                      "color": "Bege"
                    }
                ]
              },
              {
                "id": 40,
                "sku": "sku-40",
                "path": "tenis-corrida-feminino-azul",
                "name": "Tênis Corrida Feminino Azul",
                "image": "media/shoes-10.jpg",
                "price": 329.0,
                "filter": [
                    {
                      "color": "Azul"
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
                    <h1>Calçados</h1>
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