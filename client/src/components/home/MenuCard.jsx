import React from "react";

import { motion } from "framer-motion";

const MenuCard = ({ ItemNum, burgaSrc, price, title, handler, delay = 0 }) => {
	function money(amount) {
		return amount.toLocaleString("en-US", {
			style: "currency",
			currency: "usd",
		});
	}

	return (
		<motion.div
			className="menuCard"
			initial={{ x: "-100%", opacity: 0 }}
			whileInView={{ x: 0, opacity: 1 }}
			transition={{ delay }}>
			<div>Item {}</div>

			<main>
				<img src={burgaSrc} alt={ItemNum} />
				<h5> {money(price)} </h5>
				<p> {title} </p>
				<button onClick={() => handler(ItemNum)}> Buy Now </button>
			</main>
		</motion.div>
	);
};

export default MenuCard;
