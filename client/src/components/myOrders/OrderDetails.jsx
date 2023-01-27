import React from "react";

const OrderDetails = () => {
	return (
		<section className="orderDetails">
			<main>
				<h1>Order Details</h1>
				<div>
					<h1>Shipping</h1>
					<p>
						<b>Address</b>
						{"hs312384234"}
					</p>
				</div>
				<div>
					<h1>Contact</h1>
					<p>
						<b>name</b>
						{"Emmanuel"}
					</p>
					<p>
						<b>Phone</b>
						{"0247281285"}
					</p>
				</div>
				<div>
					<h1>Status</h1>
					<p>
						<b>Order Status</b>
						{"Processing"}
					</p>
					<p>
						<b>Placed At</b>
						{"22-02-2023"}
					</p>
					<p>
						<b>Delivered At</b>
						{"22-03-2023"}
					</p>
				</div>
				<div>
					<h1>Payment</h1>
					<p>
						<b>Payment Method</b>
						{"Online"}
					</p>
					<p>
						<b>Payment Ref</b>
						{"fhshe542"}
					</p>
					<p>
						<b>Delivered At</b>
						{"22-03-2023"}
					</p>
				</div>
				<div>
					<h1>Amount</h1>
					<p>
						<b>Payment Method</b>
						{"Online"}
					</p>
					<p>
						<b>Items Total</b>${3223}
					</p>
					<p>
						<b>Shipping charges</b>${453}
					</p>
					<p>
						<b>Tax</b>${53}
					</p>
					<p>
						<b>Total Amount</b>${45366}
					</p>
				</div>

				<article>
					<h1>Ordered Items</h1>

					<div>
						<h4>Cheese Burger</h4>

						<div>
							<span>{12}</span> x <span>{23}</span>
						</div>
					</div>
					<div>
						<h4>Veg Burger</h4>

						<div>
							<span>{7}</span> x <span>{18}</span>
						</div>
					</div>
					<div>
						<h4>Burger fries</h4>

						<div>
							<span>{5}</span> x <span>{50}</span>
						</div>
					</div>
					<div>
						<h4>Sub Total</h4>
						<div style={{ fontWeight: 800 }}>${3352}</div>
					</div>
				</article>
			</main>
		</section>
	);
};

export default OrderDetails;
