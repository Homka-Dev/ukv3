import React from 'react'
import "./HeaderStyle/css/style.css"
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";


export default function HeaderComponent() {
	return (
		<header className='header__wrapper'>
			
			<img className="Header__Logo"  src="/image/Logo.png"/>
			<div className='header_icons__container'>
				<FaDiscord  className='discord_icons'/>
				<FaTelegramPlane className='telegram_icons'/>
			</div>
			<img className='header_circle' src="/image/Circle.png"></img>
			<p className='circle-text'>Приєднуйся до гри</p>
			<img className='lines-left' src='/image/lines-left.png'></img>
		</header>
	)
}
