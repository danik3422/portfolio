import { useTranslation } from 'react-i18next'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import './style.css'

import { NavLink } from 'react-router-dom'

const Navigation = ({ onClick }) => {
	const notActiveLink = 'nav-list__link'
	const activeLink = 'nav-list__link nav-list__link--active'
	const { i18n, t } = useTranslation(['common'])

	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value)
	}
	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>Web Developer</strong> portfolio
					</NavLink>

					<BtnDarkMode />
					<select
						value={localStorage.getItem('i18nextLng')}
						onChange={handleLanguageChange}
					>
						<option value='en'>ENG</option>
						<option value='pl'>PLN</option>
						<option value='uk'>UKR</option>
					</select>

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? activeLink : notActiveLink
								}
							>
								{t('home')}
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/projects'
								className={({ isActive }) =>
									isActive ? activeLink : notActiveLink
								}
							>
								{t('project')}
							</NavLink>
						</li>

						<button className='btn nav-list__item--contact' onClick={onClick}>
							{t('contact')}
						</button>
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navigation
