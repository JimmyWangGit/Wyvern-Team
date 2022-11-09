import React from "react";
import "./Freelancer.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function FreelancerTOS(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="freelancer-tos">
				<div className="freelancer-tos__header padding" id="particles">
					<h1 className="freelancer-tos__header__heading">
						Freelancer Terms of Service
					</h1>
				</div>
				<div className="freelancer-tos__body">

                    <p className="document">
                    <h2 className="bold">Guidelines</h2>
					<br />
                    1. Like every other team, Wyvern has some rules, and
					guidelines each Wyvern freelancer has to follow. <br />
					You are required to deliver on time. You and the client
					discuss a deadline which both parties agree to, but you are
					required to deliver on time. The deadline can be altered
					based on the client’s response time. NB: the client can
					request a full refund if you fail to deliver on time. <br />
					<br />
					2. You are required to revise the project. Meaning that you
					are required to fix all issues and problems with the product
					for no extra charge. <br />
					<br />
					3. Only the management will handle payments. Freelancers
					will only be paid after the commission has been completed.{" "}
					<br />
					<br />
					4. The client may receive a partial refund if they are
					unsatisfied with the product. <br />
					<br />
					5. Wyvern can remove, or suspend you from the team if you
					fail to deliver a certain standard or follow these rules and
					regulations.
                    </p>
				</div>
			</div>
		</>
	);
}

export default FreelancerTOS;
