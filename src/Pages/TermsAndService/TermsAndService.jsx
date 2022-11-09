import React from "react";
import "./TermsAndService.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

function TermsAndService(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="tos">
				<div className="tos__header padding" id="particles">
					<h1 className="tos__header__heading">Terms of Service</h1>
				</div>
				<div className="tos__body padding">
					<p className="document">
						This is the terms of the service agreement between
						Wyvern and its Clients. This agreement will now be
						referred to as a “Contract”. When you order a service
						from Wyvern, you agree to have read, acknowledged,
						accepted, and are bound by this Contract. Breach of this
						Contact can lead to your Service's suspension, along
						with all funds in Wyvern. You will also be disallowed
						access to Wyvern’s services. <br />
						<br />
						<span className="bold-head">DEFINITIONS</span><br /> <br />
						1.1 The following definitions apply to this Contract:
						<br /> <br />
						<span className="bold">"Compnay"</span> refers to the respected company, and seller of
						this agreement, Wyvern.
						<br /> <br />
						<span className="bold">"Client"</span> refers to the Customer. A person, or entity
						that has transacted funds to the Company, by purchasing
						a Service from the Company’s platform.
						<br /> <br />
						<span className="bold">"Service"</span> means the product, goods, and services that
						are purchasable through Wyvern’s platform. <br /> <br />
						<span className="bold">"Contract"</span> refers to this legal documentation, the Terms
						of Service agreement. This documentation is legally
						binding.
						<br /> <br /> <span className="bold">"Terminate"</span> means that a Client or a
						Service purchased by that Client is Terminated, and shut
						down. It means that the service or
						
						account is no longer usable and has been deleted, or
						banned.<br /> <br /> <span className="bold">"Team"</span> means the Team that executes the work of
						each Commission. The Team is a part of the Company.
						<br /> <br /> <span className="bold">"Commission"</span> means an order, or request
						where a Client is requesting a premade product or a
						custom-created Service by the Team.
						<br /> <br /> <span className="bold">"Freelancer"</span> means a third-party worker.
						Freelancers conducts work on their own terms.
						<br /> <br />
						<br /> <br />
						<span className="bold-head">AGREEMENT</span> <br /> <br />
						2.1 The Company requires a one hundred (100) percent
						upfront payment. The Team will not conduct, or do any
						work before the full payment of the invoice has been
						paid.
						<br /> <br /> 2.2 The Company requires all clients to
						pay a ten (10) percent handling fee. This fee goes
						directly to keeping the Company operational, and ahead
						of its competitors.
						<br /> <br /> 2.3 All payments are to be paid directly
						to the invoice created specifically for each Commission,
						and Client. Under no circumstances shall the Client
						attempt to transact funds, or payment to a Team member
						directly.
						<br /> <br /> 2.4 The Company keeps backups of all
						products and Services created. However, the Company is
						not responsible, and therefore can not be held
						accountable if the backups become lost, deleted, or
						altered. It is the responsibility of each Client to keep
						their own backups of the product for each Commission.
						<br /> <br /> 2.5 The Company is allowed to use any work
						from a Commission in a showcase, on our social media, or
						portfolio. The Client can respectfully request for the
						Service not to be featured in a post, or showcase, but
						this would be at the full discretion of the Company.
						<br /> <br /> 2.6 All Services provided by the Company
						is an extension, meaning Company-owned products. The
						Client is not allowed to re-sell a Service under any
						circumstances. The Client may request permission to
						resell a Service, but this is at the full discretion of
						the Company, and the Team member who executed the work.
						<br /> <br /> 2.7 The Company is not responsible, and
						therefore can not be held accountable for third-party
						issues. Freelancers are not a part of the Team, and
						therefore the Company can not be held accountable in the
						case of an issue arising. All Commissions outside of the
						Company’s platform are not related to or conducted by
						the Team.
						<br /> <br /> 2.8 The Company does not offer any refunds
						after the final product, and Commission is completed.
						Read more below § 3.0 - Refund Policy.
						<br /> <br /> 2.9 The Team will only create, and conduct
						work matching the original Commission details.
						Additional requests, addition, or changes to a
						Commission will result in an extra charge. The Company
						recommends that the Client is as specific as possible.
						Details that have been forgotten in the original
						Commission details will also count as an additional
						charge.
						<br /> <br /> 2.10 The Company has the utmost right to
						mark a Commission as completed if the Client does not
						respond, or give any sign of life for fourteen (14)
						days. If these 14 days pass without any response from
						the Client, the Commission will be marked as completed
						and will be closed. If this happens, the Client will
						have no claim to a finished version of the product, or
						to a refund.
						<br /> <br /> 2.11 The Company has the right to change
						these Terms of Service at any given moment, without any
						alert or warning.
						<br /> <br /> 2.12 The Company reserves the right to
						deny to provide Services to any person, company, or
						entity. The Company can decline a request for any reason
						or no reason at all. <br /> <br />
						2.13 If a Client requests a Service that is not allowed
						within the governing law, or this Contract, they may get
						permanently banned from using the Company’s Services.
						<br /> <br />
						<br /> <br /> <span className="bold-head">REFUND POLICY</span>
						<br /> <br /> 3.1 Refunds may be given, but the refunded
						amount will be at the full discretion of the Company.
						The Company will only provide refunds when the following
						requirements/circumstances are met: <br /> <br />
						(i) Missed deadline, the Client may request a full
						refund. <br /> <br />
						(ii) Unsatisfactory product. If the product is of a poor
						standard, or the Client is not satisfied with the final
						result, they may dispute, and receive a refund for up to
						seventy (70) percent.
					</p>
				</div>
			</div>
		</>
	);
}
import "./TermsAndService.scss";

export default TermsAndService;
