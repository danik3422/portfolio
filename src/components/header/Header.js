import Fragments from '../fragments/Fragments'
import pdf from './cv/file.pdf'
import './style.css'
const Header = () => {
	return (
		<>
			<header className='header'>
				<Fragments>
					<div className='header__wrapper'>
						<h1 className='header__title'>
							<strong>
								Hi, my name is <em>Daniel</em>
							</strong>
							<br />a Frontend Developer
						</h1>
						<div className='header__text'>
							<p>with passion for learning and creating.</p>
						</div>
						<a
							href={pdf}
							download='Danylo_Syloats_CV'
							target='_blank'
							rel='noreferrer'
							className='btn'
						>
							Download CV
						</a>
					</div>
				</Fragments>
			</header>
		</>
	)
}
export default Header
