import React, { useState, useEffect } from 'react';
import Header from '../../shared/header/Header';
import '../../shared/shared.scss';
import api from '../../services/connect';
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb';
import Filters from '../filters/Filters';
import ProductCard from '../../shared/product-card/Product-Card';
import Footer from '../../shared/footer/Footer';

import {ReactComponent as GridIcon} from '../../assets/grid-icon.svg';
import {ReactComponent as ListIcon} from '../../assets/list-icon.svg';
import {ReactComponent as ALeftIcon} from '../../assets/arrow-left.svg';
import {ReactComponent as ARightIcon} from '../../assets/arrow-right.svg';

export default class Home extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          categories : [],
          products: [],
          list: []
        };
    }

    componentDidMount() {
        this.getAll();
    }

    async getAll() {
        const response = await api.get('products/1');

        if(response) {
          this.setState({
            products: response.data.items
          });
        }

        console.log(this.state.products);
    }

    /*createCards(group) {
        const getList = [];
        group.map((prod) => {

              let moneyMoneyMoney = prod.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
              getList.push(<div className="p_card" key={prod.id}>
                                <div className="photo_prod"><img src={`../${prod.image}`} /></div>
                                <p>{prod.name}</p>
                                <p className="price">{moneyMoneyMoney}</p>
                                <button onClick={() => this.addToCart( `${prod.id}` ) }>COMPRAR</button>
                            </div>);                
        });
        this.updateProducts(getList);
    }

    updateProducts(newList) {
      this.setState({ ...this.state.list, newList  });
    }*/

    render() {         
        console.log('na home',this.state.products)

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
                        <ProductCard toShow={this.state.products}/>
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