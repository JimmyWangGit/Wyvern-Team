import React from 'react';
import './Footer.scss'

function Footer(props) {
    return (
        <div>
            
			<section className="footer">
				<div className="footer__socials">
					<a href="https://twitter.com/WyvernTeamMC" target='_blank'>
						<img
							src="./twitter.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://www.youtube.com/channel/UCsJ1-h4ylvA8U7J-FAHaLNw" target='_blank'>
						<img
							src="./youtube.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
					<a href="https://discord.com/invite/RqSrvBefHE" target='_blank'>
						<img
							src="./discord.png"
							alt=""
							className="footer__socials__icon"
						/>
					</a>
				</div>
				<p className="footer__copyrights-text">Copyright © 2022 Wyvern Team. All Rights Reserved.</p>
			</section>
        </div>
    );
}

export default Footer;