import React from "react";
import "./HomePage.scss";
import Navbar from "../../components/Navbar/Navbar";
import { useEffect } from "react";

// SwiperJs for Carousel
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";


// Particles js Configuration file
import particles from "../../particlesjs-config";

//Countup Animation
import CountUp from 'react-countup';

function HomePage(props) {
	useEffect(() => {
		tsParticles.load("tsparticles", particles);
	});
	return (
		<>
			<main className="homepage">
				<section className="header padding ">
					<div className="header__brand " id="tsparticles">
						<img
							src="./heroSection.svg"
							alt=""
							className="header__brand__icon"
						/>
						<p className="header__brand__description">
						Wyvern is a revolutionary service team that brings high quality, affordable rates, and efficiency together. We can guarantee you a great experience with us. Wyvern offers over 10 different services, all of them provided by the best individuals in the industry. With our simple commissioning system, we can get you a quote for a request in a matter of minutes. Let your dreams come true with Wyvern.
						</p>
					</div>
				</section>


				{/* Wrapper for background */}
				<div className="wrapper-top">

                    
					{/* Stats Section */}

					
					<section className="stats padding">
						<div className="stats__container">
							<div className="stats__container__item">
								<h2 className="stats__container__item__counter">
                                <Ticker end={100} duration={1} suffix=" +"/>
								</h2>
								<p className="stats__container__item__description">
									Unique Clients
								</p>
							</div>
							<div className="stats__container__border"></div>
							<div className="stats__container__item">
								<h2 className="stats__container__item__counter">
                                <Ticker end={100} duration={1} suffix=" +"/>
								</h2>
								<p className="stats__container__item__description">
									Freelancers
								</p>
							</div>
						</div>
					</section>

					{/* Services Section */}
					<section className="services padding">
						<h2 className="services__heading">OUR SERVICES</h2>
						<div className="services__container">
							<div className="services__container__item card-hover">
								<div className="services__container__item__illustration">
									<img
										src="./web development.png"
										alt=""
										className="services__container__item__illustration__image"
									/>
								</div>
								<div className="services__container__item__description">
									<h3 className="services__container__item__description__heading">
										Web Development
									</h3>
									<p className="services__container__item__description__details">
										Wyvern provides high quality services to create your website. From UI Design to Database development, we will handle everything.
									</p>
								</div>
							</div>
							<div className="services__container__item card-hover">
								<div className="services__container__item__illustration">
									<img
										src="./plugin.png"
										alt=""
										className="services__container__item__illustration__image"
									/>
								</div>
								<div className="services__container__item__description">
									<h3 className="services__container__item__description__heading">
										Plugin Development
									</h3>
									<p className="services__container__item__description__details">
										Wyvern has professional plugin developers to create custom, and quality plugins for your Minecraft Server.
									</p>
								</div>
							</div>
							<div className="services__container__item card-hover">
								<div className="services__container__item__illustration">
									<img
										src="./minecraft configuration.png"
										alt=""
										className="services__container__item__illustration__image"
									/>
								</div>
								<div className="services__container__item__description">
									<h3 className="services__container__item__description__heading">
										Minecraft Configuration 
									</h3>
									<p className="services__container__item__description__details">
										Wyvern has experienced Configurator to help you configure any Minecraft plugins you need.
									</p>
								</div>
							</div>
							<div className="services__container__item card-hover">
								<div className="services__container__item__illustration">
									<img
										src="./Discord Bot.png"
										alt=""
										className="services__container__item__illustration__image"
									/>
								</div>
								<div className="services__container__item__description">
									<h3 className="services__container__item__description__heading">
										Discord Bot Development
									</h3>
									<p className="services__container__item__description__details">
									Wyvern has professional bot developers experienced in creating custom and fully functional discord bots for you need.
									</p>
								</div>
							</div>
							<div className="services__container__item card-hover">
								<div className="services__container__item__illustration">
									<img
										src="./design.png"
										alt=""
										className="services__container__item__illustration__image"
									/>
								</div>
								<div className="services__container__item__description">
									<h3 className="services__container__item__description__heading">
										Design
									</h3>
									<p className="services__container__item__description__details">
									Wyvern has amazing graphic designers and illustrators that can make creative and visual appealing graphics.
									</p>
								</div>
							</div>
							<div className="services__container__item card-hover">
								<div className="services__container__item__illustration">
									<img
										src="./minecraft design.png"
										alt=""
										className="services__container__item__illustration__image"
									/>
								</div>
								<div className="services__container__item__description">
									<h3 className="services__container__item__description__heading">
										Minecraft Design
									</h3>
									<p className="services__container__item__description__details">
									Wyvern has the best artists to create Minecraft assets. A fully custom skin to represent you, a fully custom texture pack, and Minecraft Models to make your Minecraft server stand out.
									</p>
								</div>
							</div>
						</div>
					</section>
				</div>

				{/* Features Section */}
				<section className="features padding">
					<h2 className="features__heading">OUR FEATURES</h2>
					<div className="features__container">
						<div className="features__container__item card-hover">
							<img
								src="./quality.png"
								alt=""
								className="features__container__item__icon"
							/>
							<h3 className="features__container__item__heading">
								Quality
							</h3>
							<p className="features__container__item__details">
								Wyvern Team has the best freelancer in the industry to provide you with high quality works for your need.
							</p>
						</div>
						<div className="features__container__item card-hover">
							<img
								src="./AFFORDABLE.png"
								alt=""
								className="features__container__item__icon"
							/>
							<h3 className="features__container__item__heading">
								Affordable
							</h3>
							<p className="features__container__item__details">
								Wyvern strive to make our services affordable so everyone can make their dreams come true.
							</p>
						</div>
						<div className="features__container__item card-hover">
							<img
								src="./EFFICIENT.png"
								alt=""
								className="features__container__item__icon"
							/>
							<h3 className="features__container__item__heading">
								Efficient 
							</h3>
							<p className="features__container__item__details">
								Wyvern strive to make every commission delivered on-time. If the freelancer is unable to complete within your deadline, you are able to receive a full refund. 
							</p>
						</div>
						<div className="features__container__item card-hover">
							<img
								src="PROFESSIONAL.png"
								alt=""
								className="features__container__item__icon"
							/>
							<h3 className="features__container__item__heading">
								Professional 
							</h3>
							<p className="features__container__item__details">
								Wyvern has a professional staff team that is always willing to help you with any problem that you face, contact us on our discord server.
							</p>
						</div>
					</div>
				</section>

				{/* Reviews Section */}
				<section className="reviews padding">
					<h2 className="reviews__heading">OUR REVIEWS</h2>

					<div className="reviews__carousel">
						<img
							src="./btn-prev.png"
							alt="btn-prev"
							className="prev"
						/>
						<Swiper
							slidesPerView={1}
							spaceBetween={30}
							slidesPerGroup={1}
							loop={true}
							loopFillGroupWithBlank={true}
							navigation={{
								nextEl: ".next",
								prevEl: ".prev",
							}}
							modules={[Navigation]}
							className="mySwiper"
							breakpoints={{
								// when window width is >= 768px
								768: {
									slidesPerView: 2,
								},
							}}
						>
							<SwiperSlide>
								<div className="reviews__carousel__item">
									<div className="reviews__carousel__item__stars">
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
									</div>
									<p className="reviews__carousel__item__details">
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to
									</p>
									<h2 className="reviews__carousel__item__name">
										Jason Mark
									</h2>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="reviews__carousel__item">
									<div className="reviews__carousel__item__stars">
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
									</div>
									<p className="reviews__carousel__item__details">
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to
									</p>
									<h2 className="reviews__carousel__item__name">
										Jason Mark
									</h2>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="reviews__carousel__item">
									<div className="reviews__carousel__item__stars">
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
									</div>
									<p className="reviews__carousel__item__details">
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to
									</p>
									<h2 className="reviews__carousel__item__name">
										Jason Mark
									</h2>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								{" "}
								<div className="reviews__carousel__item">
									<div className="reviews__carousel__item__stars">
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
										<img
											src="./star.png"
											alt=""
											className="reviews__carousel__item__stars__star"
										/>
									</div>
									<p className="reviews__carousel__item__details">
										Lorem Ipsum is simply dummy text of the
										printing and typesetting industry. Lorem
										Ipsum has been the industry's standard
										dummy text ever since the 1500s, when an
										unknown printer took a galley of type
										and scrambled it to
									</p>
									<h2 className="reviews__carousel__item__name">
										Jason Mark
									</h2>
								</div>
							</SwiperSlide>
						</Swiper>
						<img src="./btn-next.png" alt="" className="next" />
					</div>
					<a href="https://discord.com/invite/RqSrvBefHE" className="btn btn-primary">
						Join Our Discord
					</a>
				</section>
			</main>
		</>
	);
}
import "./HomePage.scss";
import Ticker from "../../components/Ticker/Ticker";

export default HomePage;
