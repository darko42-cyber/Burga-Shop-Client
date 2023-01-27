import React from "react";
import { Country, State } from "country-state-city";
const Shipping = () => {
	return (
		<div className="shipping">
			<main>
				<h1>Shipping Details</h1>
				<form>
					<div>
						<label>H.NO</label>
						<input type="text" placeholder="Enter House NO" />
					</div>
					<div>
						<label>City</label>
						<input type="text" placeholder="Enter City" />
					</div>

					<div>
						<label>Country</label>
						<select>
							<option value="">country</option>
							{Country &&
								Country.getAllCountries().map((i) => (
									<option value={i.isoCode} key={i.isoCode}>
										{" "}
										{i.name}{" "}
									</option>
								))}
						</select>
					</div>
					<div>
						<label>State</label>
						<select>
							<option value="">state</option>
							{State &&
								State.getStatesOfCountry("GH").map((i) => (
									<option key={i.isoCode} value={i.isoCode}>
										{" "}
										{i.name}{" "}
									</option>
								))}
						</select>
					</div>
					<div>
						<label>Pin Code</label>
						<input type="number" placeholder="Enter Pin Code" />
					</div>
					<div>
						<label>Phone NO</label>
						<input type="number" placeholder="Enter Phone NO" />
					</div>
					<button>Confirm Order</button>
				</form>
			</main>
		</div>
	);
};

export default Shipping;
