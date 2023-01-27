import React from "react";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
import burger3 from "../../assets/burger3.png";
import { Link } from "react-router-dom";

const CartItem = ({ value, title, img, increment, decrement }) => {
	return (
		<div className="cartItem">
			<div>
				<h4> {title} </h4>
				<img src={img} alt="Item" />
			</div>
			<div>
				<button onClick={decrement}>-</button>
				<input type="number" readOnly value={value} />
				<button onClick={increment}>+</button>
			</div>
		</div>
	);
};
const Cart = () => {
	function money(amount) {
		return amount.toLocaleString("en-US", {
			style: "currency",
			currency: "usd",
		});
	}
	const increment = () => {};
	const decrement = () => {};
	return (
		<section className="cart">
			<main>
				<CartItem
					title="cheese burger"
					img={burger1}
					value={0}
					increment={() => increment(1)}
					decrement={() => decrement(1)}
				/>
				<CartItem
					title="Veg cheese burger"
					img={burger2}
					value={2}
					increment={() => increment(2)}
					decrement={() => decrement(2)}
				/>
				<CartItem
					title="cheese burger with french fries"
					img={burger1}
					value={3}
					increment={() => increment(3)}
					decrement={() => decrement(3)}
				/>
				<article>
					<div>
						<h4>Sub Total</h4>
						<p> {money(2000)} </p>
					</div>
					<div>
						<h4>Tax</h4>
						<p> {money(2000 * 0.18)} </p>
					</div>
					<div>
						<h4>Shipping Charges</h4>
						<p> {money(200)} </p>
					</div>
					<div>
						<h4>Total</h4>
						<p> {money(2000 + 2000 * 0.18 + 200)} </p>
					</div>
					<Link to="/shipping">Checkout</Link>
				</article>
			</main>
		</section>
	);
};

export default Cart;
