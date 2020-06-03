import React from 'react';
import { Link } from 'react-router-dom';

export default class Filters extends React.Component {
    constructor() {
        super();

        this.state = {
        }

    }
    render() {
        let options = [];

        /*this.props.list.map((item, index) => 
            options.push(
                <li key={index}>{item}</li>
            )
        );*/
        

        return(
            <div id="filters">
                <h4>FILTRE POR</h4>

                <h5>CATEGORIAS</h5>
                <ul>                    
                    <li>Roupas</li>
                    <li>Sapatos</li>
                </ul>
                <h5>CORES</h5>
                <div className="color_filter">
                    <button className="color__red"></button>
                    <button className="color__orange"></button>
                    <button className="color__blue"></button>
                </div>

                <h5>Tipo</h5>
                <ul>
                    <li>Corrida</li>
                    <li>Caminhada</li>
                    <li>Casual</li>
                    <li>Social</li>
                </ul>
                
            </div>
        );
    }
}