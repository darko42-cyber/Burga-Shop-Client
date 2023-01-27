import React from "react";

import me from "../../assets/darko.jpg";
const Users = () => {
	const arr = [1, 2, 3, 4];
	return (
		<section className="tableClass">
			<main>
				<table>
					<thead>
						<tr>
							<th>User Id</th>
							<th>Name</th>
							<th>Photos</th>
							<th>Role</th>
							<th>Since</th>
						</tr>
					</thead>
					<tbody>
						{arr.map((i) => (
							<tr key={i}>
								<td>5eo-72ah-adea</td>
								<td>Sam</td>
								<td>
									<img src={me} alt="User" />
								</td>
								<td> {"Admin"} </td>
								<td> {"23-02-2023"} </td>
							</tr>
						))}
					</tbody>
				</table>
			</main>
		</section>
	);
};

export default Users;
