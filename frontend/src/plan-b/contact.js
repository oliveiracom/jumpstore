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
                    <h1>Contato</h1>
                    

                    <div className="products">
                        Escreva para jumpstore@gmail.com
                    </div>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}