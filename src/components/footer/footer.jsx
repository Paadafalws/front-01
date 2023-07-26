import React, { Component } from 'react';
import paulo from '../../Imagens/paulo.jpg'
import './footer.css'; // Estilos personalizados para a sidebar

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <footer className="page-footer font-small teal pt-1">
                    <div className="col-md-12 mt-md-2 mt-3">
                        <img src={paulo} className='fotome' alt="seios"></img>
                        <h6 className="text-uppercase font-weight-bold">Django Rest Framework/React Js</h6>
                        <p>Aplicação criada e desenovlvida por : Paulo Ricardo Moraes camargo</p>

                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;