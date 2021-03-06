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
            categories: []
        };
    }

    componentDidMount() {
        this.getCategories();
    }

    async getCategories() {
        const response = await api.get('categories/list');
        console.log(response)
        this.setState((state, props) => ({
          categories: this.state.categories(response.data)
        }));
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
                    <Filters />
                </div>
                <div className="right">
                    <h1>Sapatos</h1>
                    <div className="row view"> 
                        <div>
                            <GridIcon className='grid_icon selected'/>
                            <ListIcon className='grid_icon'/>
                        </div>
                        <div className="order_by">
                            ORDENAR POR
                            <select>
                                <option>Selecione</option>
                            </select>
                        </div>
                    </div>

                    <div className="products">
                        <ProductCard />
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