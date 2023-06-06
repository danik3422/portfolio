import Fragments from '../fragments/Fragments'
import './style.css'
const Header = () => {
	return (
		<>
			<Fragments>
				<header className='header'>
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
						<a href='#!' className='btn'>
							Download CV
						</a>
					</div>
				</header>
			</Fragments>
		</>
	)
}
export default Header
