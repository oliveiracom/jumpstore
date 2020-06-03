import React from 'react';
import Header from '../../shared/header/Header';
import '../../shared/shared.scss';
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb';
import Filters from '../filters/Filters';
import ProductCard from '../../shared/product-card/Product-Card';
import Footer from '../../shared/footer/Footer';
import {ReactComponent as GridIcon} from '../../assets/grid-icon.svg';
import {ReactComponent as ListIcon} from '../../assets/list-icon.svg';
import {ReactComponent as ALeftIcon} from '../../assets/arrow-left.svg';
import {ReactComponent as ARightIcon} from '../../assets/arrow-right.svg';

export default class Products extends React.Component {
    constructor() {
        super();

        this.state = {
            category : null
        }
    };

    componentDidMount() {
        const { match: { params } } = this.props;
        this.state.category = params.id;
    }

    getCategory() {
        if( this.state.category == null) {
            
        } else {
            return (<p>Mostra as paradin</p>);
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
                    <Filters />
                </div>
                <div className="right">
                 <h1>{this.state.category}</h1>
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
                        <ProductCard category="camisetas"/>
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