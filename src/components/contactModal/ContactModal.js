import './style.css'

const ContactModal = () => {
	return (
		<>
			<div className='backdrop'>
				<div className='sidebar__container'>
					<svg
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
						<li>Contact</li>
						<li>About me</li>
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
					<div className='sidebar__footer'></div>
				</div>
			</div>
		</>
	)
}
export default ContactModal
