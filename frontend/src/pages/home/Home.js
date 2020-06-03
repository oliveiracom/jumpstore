import React from 'react';
import Header from '../../shared/header/Header';
import '../../shared/shared.scss';
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb';
import Filters from '../filters/Filters';
import ProductCard from '../../shared/product-card/Product-Card';
import Footer from '../../shared/footer/Footer';
import api from '../../services/connect';
import {ReactComponent as GridIcon} from '../../assets/grid-icon.svg';
import {ReactComponent as ListIcon} from '../../assets/list-icon.svg';
import {ReactComponent as ALeftIcon} from '../../assets/arrow-left.svg';
import {ReactComponent as ARightIcon} from '../../assets/arrow-right.svg';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
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
              },
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
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    async getCategories() {
        const response = await api.get('categories/list');
        this.setState((state, props) => ({
          categories: this.state.categories(response.data)
        }));
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
                    <h1>Roupas</h1>
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

                    <div className="pagination">
                        <ul>
                            <li><ALeftIcon className='navigate_icon'/></li>
                            <li>1</li>
                            <li>2</li>
                            <li className="current">3</li>
                            <li>4</li>
                            <li>5</li>
                            <li><ARightIcon className='navigate_icon'/></li>
                        </ul>                        
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}