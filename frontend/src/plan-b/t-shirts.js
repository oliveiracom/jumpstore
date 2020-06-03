import React from 'react';

import Header from '../shared/header/Header';
import '../shared/shared.scss';
import Breadcrumb from '../shared/breadcrumb/Breadcrumb';
import Filters from '../pages/filters/Filters';
import Footer from '../shared/footer/Footer';
import ProductCard from '../shared/product-card/Product-Card';
import {ReactComponent as GridIcon} from '../assets/grid-icon.svg';
import {ReactComponent as ListIcon} from '../assets/list-icon.svg';

export default class Shirts extends React.Component {
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
    render() {

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
                    <h1>Camisetas</h1>
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
                        <ProductCard /> 
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}