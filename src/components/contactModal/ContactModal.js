import { useState } from 'react'
import github from './../../img/icons/github-modal.svg'
import linkedin from './../../img/icons/linkedin-modal.svg'
import upwork from './../../img/icons/upwork.svg'
import './style.css'
const ContactModal = ({ isOpen, onClose }) => {
	const [isClosing, setIsClosing] = useState(false)

	const handleClose = () => {
		setIsClosing(true)
		setTimeout(() => {
			setIsClosing(false)
			onClose()
		}, 300)
	}
	if (!isOpen) {
		return null
	}
	return (
		<>
			<div
				className={`backdrop ${isClosing ? 'close' : ''}`}
				onClick={handleClose}
			></div>
			<div className={`sidebar__container ${isClosing ? 'close' : ''}`}>
				<svg
					className='sidebar__close'
					onClick={handleClose}
					stroke='currentColor'
					fill='currentColor'
					stroke-width='0'
					viewBox='0 0 24 24'
					class='sidebar_close'
					height='1em'
					width='1em'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path d='M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z'></path>
				</svg>
				<ul className='sidebar__nav'>
					<li className='sidebar__item--active'>Contact</li>
				</ul>
				<div className='sidebar__contact'>
					<h1 className='sidebar__contact-title'>
						Let's Build Something <br /> Together
					</h1>
					<div className='sidebar__contact-data'>
						<p>danylo.syloats@gmail.com</p>
						<p>Warsaw, Poland</p>
					</div>
				</div>
				<div className='sidebar__footer'>
					<a
						href='https://www.linkedin.com/in/danylo-syloats-a31704199/'
						target='__blank'
						rel='noopener norefferer'
					>
						<img src={linkedin} alt='Linkedin logo' />
					</a>
					<a
						href='https://www.linkedin.com/in/danylo-syloats-a31704199/'
						target='__blank'
						rel='noopener norefferer'
					>
						<img src={upwork} alt='UpWork logo' />
					</a>
					<a
						href='mailto:danylo.syloats@gmail.com'
						target='__blank'
						rel='noopener norefferer'
					>
						<svg
							stroke='currentColor'
							fill='currentColor'
							stroke-width='0'
							viewBox='0 0 24 24'
							height='1em'
							width='1em'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'></path>
						</svg>
					</a>
					<a
						href='https://github.com/danik3422'
						target='__blank'
						rel='noopener norefferer'
					>
						<img src={github} alt='GitHub logo' />
					</a>
				</div>
			</div>
		</>
	)
}
export default ContactModal
