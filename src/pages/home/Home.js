import React from 'react';
import Header from '../../shared/header/Header';
import '../../shared/shared.scss';
import Filters from '../filters/Filters';

export default class Home extends React.Component {
    render() {
        return(
            <>
            <Header />
            <div class="wrapper container row">
                <Filters />
                <div>
                    <h1>Sapatos</h1>
                    <div class="row"> 
                        icones lista 
                        Ordenar por #dropdown#
                    </div>

                    <div class="products">
                        <div class="card">
                            <img></img>
                            <h3>Tênis X</h3>
                            <p class="price">R$ 299,90</p>
                            <button>Comprar</button>
                        </div>
                    </div>

                    <div class="pagination"> 1 2 3</div>
                </div>
            </div>
            </>
        );
    }
}