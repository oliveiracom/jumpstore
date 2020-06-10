import React from 'react';
import logo from '../../assets/logo-webjump.png';
import './Header.scss';
import { Link } from "react-router-dom";
import api from '../../services/connect';


export default class Header extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            searchQuery : '',
            categories : []
        }
    }

    componentDidMount() {
        this.getCategories();
    }

    async getCategories() {
        const response = await api.get('list');
        if(response) {
          this.setState({
            categories: response.data
          });
        }
    }

    handleInput(event) {
        this.setState({searchQuery: event.target.value});
    }
    handleSearch(event) {
        event.preventDefault();
        console.log('procurar por ', this.state.searchQuery);

    }


    render() {
        let showLink = [];

        this.state.categories.map((cat) => 
            showLink.push(
                <li key={cat.id}><Link to={`/produtos/${cat.path}`}>{cat.name}</Link></li>
            )
        );

        return(
                <header>
                    <div id="login"> <p className="container"><Link to="/login">Acesse sua Conta</Link> ou <Link to="/signup">Cadastre-se</Link></p></div>
                    <div className="container row">
                        <div id="brand"> <img src={logo} alt="JumpStore" /></div>
                        <div className="search">
                            <form onSubmit={this.handleSearch}>
                                <input type="text" name="search" value={this.state.searchQuery} onChange={this.handleInput.bind(this)}></input>
                                <input type="submit" value="BUSCAR"></input>
                            </form>
                        </div>
                    </div>
                    
                    <div id="menu">
                        <div className="container">
                            <ul>
                                <li><Link to="/">Página Inicial</Link></li>
                                {showLink}
                                <li><Link to="/contato">Contato</Link></li>
                            </ul>
                        </div>
                    </div>                
                </header>
        );
    }
}