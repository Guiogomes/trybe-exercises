import React from 'react';
import Order from './Order';


class OrderList extends React.Component {
	render () {
		const orderProducts = [{
				id: 102,
				user: "cena@gmail.com",
				product: "Razer Headphone",
				price: {
					value: 99.99,
					currency: "dollars"
				}
    	}, {
				id: 77,
				user: "cena@gmail.com",
				product: "Monster 500mL",
				price: {
					value: 9.99,
					currency: "dollars"
				}
    	}
		]
		return (
			orderProducts.map((product) => (
				<div key = {product.id}>
					<Order order = {product}/>
				</div>		
			)));
	}
}


export default OrderList;