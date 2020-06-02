import React from 'react';

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
            <div>
                Lista { this.state.category }
                
            </div>
        );
    }
}