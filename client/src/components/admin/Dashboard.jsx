import React from "react";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJs, ArcElement, Legend, Tooltip } from "chart.js";

ChartJs.register(ArcElement, Legend, Tooltip);
const Box = ({ title, value }) => {
	return (
		<div>
			<h4>
				{title === "Income" && "$"}
				{value}
			</h4>
			<p> {title} </p>
		</div>
	);
};
const Dashboard = () => {
	const data = {
		labels: ["Preparing", "Shipped", "Delivered"],
		datasets: [
			{
				label: "# of orders",
				data: [1, 2, 3],
				backgroundColor: [
					"rgba(159,63,176,0.1)",
					"rgba(78,63,176,0.2)",
					"rgba(157,0,60,0.3)",
				],
				borderColor: ["rgb(159,63,176)", "rgb(78,63,176)", "rgb(157,0,60)"],
				borderWidth: 1,
			},
		],
	};
	return (
		<section className="dashboard">
			<main>
				<article>
					<Box title="Users" value={232} />
					<Box title="Orders" value={232} />
					<Box title="Income" value={232} />
				</article>
				<section>
					<div>
						<Link to="/admin/orders">View Orders</Link>
						<Link to="/admin/users">View Users</Link>
					</div>
					<aside>
						<Doughnut data={data} />
					</aside>
				</section>
			</main>
		</section>
	);
};

export default Dashboard;
