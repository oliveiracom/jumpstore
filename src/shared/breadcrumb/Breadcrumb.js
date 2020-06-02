import React from 'react';
import './breadcrumb.scss';

export default class Breadcrumb extends React.Component {
    render() {
        return(
            <div id="breadcrumb"> Página Inicial > <span className="current">Sapatos</span></div>
        );
    }
}