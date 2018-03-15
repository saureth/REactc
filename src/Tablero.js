import React , {Component} from 'react';
import './Tablero.css';
import Carta from './Carta';

export default class Tabler extends Component{
	render(){
		return(
			<div className="tablero">
				{
					this.props.baraja.map( (carta) => <Carta icono={carta.icono} /> )
				}
			</div>
		);
	}
};