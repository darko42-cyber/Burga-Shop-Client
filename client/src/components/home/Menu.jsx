import React from "react";
import MenuCard from "./MenuCard";
import burga1 from "../../assets/burger1.png";
import burga2 from "../../assets/burger2.png";
import burga3 from "../../assets/burger3.png";
const Menu = () => {
	const addToCart = (itemNum) => {};
	return (
		<section id="menu">
			<h1>MENU</h1>
			<div>
				<MenuCard
					ItemNum={1}
					burgaSrc={burga1}
					price={50}
					title="Veg Cheese Burga"
					handler={addToCart}
					delay={0.3}
				/>
				<MenuCard
					ItemNum={2}
					burgaSrc={burga2}
					price={100}
					title="Cheese Burga"
					handler={addToCart}
					delay={0.5}
				/>
				<MenuCard
					ItemNum={3}
					burgaSrc={burga3}
					price={200}
					title="Cheese Burga with French Fries"
					handler={addToCart}
					delay={0.8}
				/>
			</div>
		</section>
	);
};

export default Menu;
