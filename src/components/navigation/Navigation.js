import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import './style.css'

const Navigation = ({ onClick }) => {
	const notActiveLink = 'nav-list__link'
	const activeLink = 'nav-list__link nav-list__link--active'
	const { i18n, t } = useTranslation(['common'])
	const [mobileNav, setMobileNav] = useState(false)
	const handleLanguageChange = (e) => {
		i18n.changeLanguage(e.target.value)
	}

	const handleMobile = () => {
		setMobileNav(!mobileNav)
		document.body.style.overflowY = `${mobileNav ? 'visible' : 'hidden'}`
	}

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>DS</strong>
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

					<ul className={mobileNav ? 'nav-list active' : 'nav-list'}>
						{/* <li className='nav-list__item'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? activeLink : notActiveLink
								}
							>
								{t('home')}
							</NavLink>
						</li> */}
						<li className='nav-list__item'>
							<NavLink
								onClick={handleMobile}
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
						<div onClick={handleMobile} className='mobile-btn'>
							{mobileNav ? <AiOutlineClose size={25} /> : ''}
						</div>
					</ul>

					<div onClick={handleMobile} className='mobile-btn'>
						{mobileNav ? '' : <AiOutlineMenu size={25} />}
					</div>
				</div>
			</div>
		</nav>
	)
}
export default Navigation
