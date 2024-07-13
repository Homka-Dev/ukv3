import React from 'react'
import "./HeaderStyle/css/style.css"
import { FaDiscord } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import Link from 'next/link';
import { FaHouseChimney } from "react-icons/fa6";
import { RxValueNone } from "react-icons/rx";
import { FaServer } from "react-icons/fa";
import { FaCoins } from "react-icons/fa";


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

			<nav>
				<Link className='link__1 links' href="/"><FaHouseChimney /></Link>
				<Link className='link__2 links' href="/rules"><RxValueNone/></Link>
				<Link className='link__3 links' href="/server"><FaServer/></Link>
				<Link className='link__4 links' href="/shop"><FaCoins/></Link>
			</nav>
		</header>
	)
}
