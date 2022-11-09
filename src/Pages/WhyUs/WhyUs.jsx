import React from "react";
import "./WhyUs.scss";

import { useEffect } from "react";

// Particles js Configuration file
import particles from "../../particlesjs-config";

//Image Imports
import image1 from "../../assets/1.png";
import image2 from "../../assets/2.png";
import image3 from "../../assets/3.png";
import image4 from "../../assets/4.png";
import image5 from "../../assets/5.png";

function WhyUs(props) {
	useEffect(() => {
		tsParticles.load("particles", particles);
	});
	return (
		<>
			<div className="why-us">
				<div className="why-us__header padding" id="particles">
					<h1 className="why-us__header__heading">Why US</h1>
				</div>
				<div className="why-us__body padding">
					<div className="why-us__body__row1">
						<div className="why-us__body__row1__description">
							<h2 className="why-us__body__row1__description__heading">
								Qualified
							</h2>
							<p className="why-us__body__row1__description__details">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</p>
						</div>
						<div className="why-us__body__row1__illustration">
							<img
								src={image1}
								alt=""
								className="why-us__body__row1__illustration__image"
							/>
						</div>
					</div>

					<div className="why-us__body__row2">
						<div className="why-us__body__row2__illustration">
							<img
								src={image2}
								alt=""
								className="why-us__body__row2__illustration__image"
							/>
						</div>
						<div className="why-us__body__row2__description">
							<h2 className="why-us__body__row2__description__heading">
								Qualified
							</h2>
							<p className="why-us__body__row2__description__details">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</p>
						</div>
					</div>

					<div className="why-us__body__row1">
						<div className="why-us__body__row1__description">
							<h2 className="why-us__body__row1__description__heading">
								Qualified
							</h2>
							<p className="why-us__body__row1__description__details">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</p>
						</div>
						<div className="why-us__body__row1__illustration">
							<img
								src={image3}
								alt=""
								className="why-us__body__row1__illustration__image"
							/>
						</div>
					</div>

					<div className="why-us__body__row2">
						<div className="why-us__body__row2__illustration">
							<img
								src={image4}
								alt=""
								className="why-us__body__row2__illustration__image"
							/>
						</div>
						<div className="why-us__body__row2__description">
							<h2 className="why-us__body__row2__description__heading">
								Qualified
							</h2>
							<p className="why-us__body__row2__description__details">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</p>
						</div>
					</div>

					<div className="why-us__body__row1">
						<div className="why-us__body__row1__description">
							<h2 className="why-us__body__row1__description__heading">
								Qualified
							</h2>
							<p className="why-us__body__row1__description__details">
								Lorem Ipsum is simply dummy text of the printing
								and typesetting industry. Lorem Ipsum has been
								the industry's standard dummy text ever since
								the 1500s, when an unknown printer took a galley
								of type and scrambled it to make a type specimen
								book. It has survived not only five centuries,
								but also the leap into electronic typesetting,
								remaining essentially unchanged. It was
								popularised in the 1960s with the release of
								Letraset sheets containing Lorem Ipsum passages,
								and more recently with desktop publishing
								software like Aldus PageMaker including versions
								of Lorem Ipsum
							</p>
						</div>
						<div className="why-us__body__row1__illustration">
							<img
								src={image5}
								alt=""
								className="why-us__body__row1__illustration__image"
							/>
						</div>
					</div>
					<a href="#" className="btn btn-primary">
						Join Our Discord
					</a>
				</div>
			</div>
		</>
	);
}

export default WhyUs;
