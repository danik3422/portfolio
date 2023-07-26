import { useTranslation } from 'react-i18next'
import { Tooltip } from 'react-tippy'
import Header from '../components/header/Header'
import { backSkills, frontSkills } from '../helpers/skillsArray'

const Home = () => {
	const { t } = useTranslation(['home'])

	return (
		<main className='main-content'>
			<div className='container'>
				<Header />
				<div className='content-list'>
					<h2 className='title-2'>Frontend</h2>
					<ul className='content-list__logo'>
						{frontSkills.map((skills, index) => {
							return (
								<Tooltip
									key={index}
									title={skills.name}
									position='top'
									trigger='mouseenter'
								>
									<li className='content-list__logo-item'>
										<img className='logo' src={skills.logo} alt={skills.alt} />
									</li>
								</Tooltip>
							)
						})}
					</ul>
					<h2 className='title-2'>Backend</h2>
					<ul className='content-list__logo'>
						{backSkills.map((skills, index) => {
							return (
								<Tooltip
									key={index}
									title={skills.alt}
									position='top'
									trigger='mouseenter'
								>
									<li className='content-list__logo-item'>
										<img className='logo' src={skills.logo} alt={skills.alt} />
									</li>
								</Tooltip>
							)
						})}
					</ul>
				</div>
			</div>
		</main>
	)
}

export default Home
