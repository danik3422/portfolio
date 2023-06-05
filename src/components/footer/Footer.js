import github from './../../img/icons/gitHub.svg'
import linkedin from './../../img/icons/linkedIn.svg'

import './style.css'
const Footer = () => {
	return (
		<footer className='footer'>
			<div className='container'>
				<div className='footer__wrapper'>
					<ul className='social'>
						<li className='social__item'>
							<a
								href='https://github.com/danik3422'
								target='_blank'
								rel='noreferrer'
							>
								<img src={github} alt='Link' />
							</a>
						</li>

						<li className='social__item'>
							<a
								href='https://www.linkedin.com/in/danylo-syloats-a31704199/'
								target='_blank'
								rel='noreferrer'
							>
								<img src={linkedin} alt='Link' />
							</a>
						</li>
					</ul>
					<div className='copyright'>
						<p>{`Copyright © 2023 Danylo Syloats. All rights reserved.`} </p>
					</div>
				</div>
			</div>
		</footer>
	)
}
export default Footer
