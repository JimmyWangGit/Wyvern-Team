import React from "react";
import "./OperationsDocument.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function OperationsDocument(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="operations-document">
				<div
					className="operations-document__header padding"
					id="particles"
				>
					<h1 className="operations-document__header__heading">
						Operations Guide
					</h1>
				</div>
				<div className="operations-document__body padding">
					<p className="document">
						Hello. Welcome to the Wyvern Team’s Operations Guide.
						This document will inform you of our operations, how we
						conduct work, and how you can potentially succeed in our
						team. If you have any questions regarding the
						information in this document, please refer your queries
						to the person who contacted you. We hope that you find
						our operations interesting and that you want to “jump
						aboard” our team.
						<hr className="divider" />
						<span className="bold-head">About Wyvern.</span>
						<br />
						Wyvern is a service team that focuses on quality in each
						commission. A service team is a group of individuals
						(freelancers) who conduct commissions from clients,
						found by the team management. Wyvern will always work in
						your best interest, to ensure that you receive plenty of
						commissions and compensation for the work. Wyvern will
						do all the advertisement, and background works to find
						clients. Wyvern will also help you keep these clients,
						and make them into your personal recurring customers. In
						return, Wyvern takes a small percentage of the
						commissioned quote for each commission. Wyvern sees this
						as fair trade, you get customers and do not have to
						worry about finding clients, and advertising, and in
						return the team gets a small percentage for finding you,
						customers.
						<hr className="divider" />
						<span className="bold-head">Why work with us?</span>
						<br />
						Our team has multiple, and notable qualifications to
						ensure that we stay ahead of the competition and get a
						lot of customers. We make sure that all of the aspects
						of our industry are in order at all times.
						<br />
						<br />
						<span className="bold">Qualifications</span>
						<br />
						Firstly, we are a qualified business. Wyvern is a
						legally registered business in California, United
						States. Wyvern has made sure that all documents and
						papers are in order, meaning you can list Wyvern as an
						actual work experience. Wyvern has all materials, plans,
						and marketing strategies in order so we can grow the
						team instantly, yet also receive enough customers for
						each freelancer.
						<br />
						<br />
						<span className="bold">Freedom</span>
						<br />
						Secondly, you can choose your own hours. You decide when
						to work, or if you want to work at all. As long as you
						finish the commissions you claim within the agreed
						deadline (between you and the customer). You are able to
						work with other service teams, including your own
						personal services. You decide how much you want for a
						commission. The sky is the limit.
						<br />
						<br />
						<span className="bold">Cuts, and taxes.</span>
						<br />
						Thirdly, Wyvern strives to help team members grow their
						personal economy and keep most of the commission. Wyvern
						only takes 10% of each commission. The 10% is invested
						directly back into the team to increase the marketing
						and find more clients.
						<br />
						<br />
						<span className="bold">Flexible payments.</span>
						<br />
						Fourthly, Wyvern offers flexible payments and payout
						gateways. We can process your PayPal payout request in
						an instant, meaning as soon as you are done working, you
						will get paid. Wyvern can also conduct payouts using
						Xoom, Remitly, Cashapp, and so on. These payments will
						however have a small delay since they will have to be
						manually wired.
						<br />
						<br />
						<span className="bold">
							Advertisement, and marketing.
						</span>
						<br />
						Fifthly, Wyvern has a marketing strategy on the level of
						other successful businesses, and beyond. We aim to
						always get the best, and most clients within a period of
						time. We use forums, influencers, blogs, and websites
						that are full of customers, seeking professional
						freelancers that can provide them with great services.
						<br />
						<br />
						<span className="bold">We listen.</span>
						<br />
						Lastly, Wyvern always listens to the team. We are always
						working on implementing your feedback to improve the
						team overall. We listen to your response, and
						suggestions to ensure that you are comfortable and love
						the workspace.
						<hr className="divider" />
						<span className="bold-head">How we operate.</span>
						<br />
						Wyvern has a great system for commissions, and how
						freelancers can select their own price. Wyvern will
						always work in the team’s best interest, and to help you
						get recurring customers, and build a larger reputation.
						<br />
						<br />
						<span className="bold">Commission Information</span>
						<br />
						1. For every commission received, you are able to send
						your own choosable price, the timeframe needed to
						complete, and how many revisions you will do. All
						freelancers are required to provide at least one
						revision. You can also send a note explaining your
						quote, or it could be anything like this.
						<br /> 2.Clients have the same freedom as our
						freelancers. They are able to choose how they want to
						work with you, they can either accept, deny, or
						negotiate your offer.

						
						<hr className="divider" />
						<span className="bold-head">
                        Thank you.
						</span>

						<br />
						As we have mentioned on multiple occasions, we always
						work in your best interest, to find you the most clients
						possible. We are here to help you earn more, and build a
						larger reputation. If you have any issues, concerns, or
						questions regarding any part of this document, please
						refer them to the person who contacted you.
					</p>
				</div>
			</div>
		</>
	);
}

export default OperationsDocument;
