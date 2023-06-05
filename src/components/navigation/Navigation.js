import { useState } from 'react'
import BtnDarkMode from '../btnDarkMode/BtnDarkMode'
import './style.css'

import { NavLink } from 'react-router-dom'

const Navigation = () => {
	const notActiveLink = 'nav-list__link'
	const activeLink = 'nav-list__link nav-list__link--active'
	const [modalActive, setActiveModal] = useState(false)
	const modalHandler = () => {
		if (modalActive !== true) {
			setActiveModal(true)
		} else {
			setActiveModal(false)
		}
	}

	return (
		<nav className='nav'>
			<div className='container'>
				<div className='nav-row'>
					<NavLink to='/' className='logo'>
						<strong>Freelancer</strong> portfolio
					</NavLink>

					<BtnDarkMode />

					<ul className='nav-list'>
						<li className='nav-list__item'>
							<NavLink
								to='/'
								className={({ isActive }) =>
									isActive ? activeLink : notActiveLink
								}
							>
								Home
							</NavLink>
						</li>
						<li className='nav-list__item'>
							<NavLink
								to='/projects'
								className={({ isActive }) =>
									isActive ? activeLink : notActiveLink
								}
							>
								Projects
							</NavLink>
						</li>
						{/* <NavLink to='/' className='nav-list__link'> */}
						<li className='btn nav-list__item--contact' onClick={modalHandler}>
							Contacts
						</li>
						{/* </NavLink> */}
					</ul>
				</div>
			</div>
		</nav>
	)
}
export default Navigation
