import React from 'react';
import Header from '../header/Header';
import Breadcrumb from '../../shared/breadcrumb/Breadcrumb';
import Filters from '../../pages/filters/Filters';
import Footer from '../../shared/footer/Footer';

export default class NotImplemented extends React.Component {
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
                    <h3>Componente não implementado...</h3>
                </div>
            </div>
            <Footer />
            </>
        );
    }
}