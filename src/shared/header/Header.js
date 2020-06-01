import React from 'react';
import logo from '../../assets/logo-webjump.png';
import './Header.scss';


export default class Header extends React.Component {
    render() {
        return(
                <header>
                    <div id="login"> <p class="container">Acesse sua Conta ou Cadastre-se</p></div>
                    <div class="container row">
                        <div id="brand"> <img src={logo}></img></div>
                        <div class="search">
                            <form>
                                <input type="text" name="search"></input>
                                <input type="submit" value="BUSCAR"></input>
                            </form>
                        </div>
                    </div>
                    
                    <div id="menu">
                        <ul class="container">
                            <li><a href="#">Página Inicial</a></li>
                            <li><a href="#">Camisetas</a></li>
                            <li><a href="#">calças</a></li>
                            <li><a href="#">Sapatos</a></li>
                            <li><a href="#">Contato</a></li>
                        </ul>
                    </div>                
                </header>
        );
    }
}