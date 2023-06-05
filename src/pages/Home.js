import Header from '../components/header/Header'
import { backSkills, frontSkills } from '../helpers/skillsArray'

const Home = () => {
	return (
		<>
			<Header />
			<main className='section'>
				<div className='container'>
					<div className='content-list'>
						<h2 className='title-2'>Frontend</h2>
						<ul className='content-list__logo'>
							{frontSkills.map((skills) => {
								return (
									<li className='content-list__logo-item'>
										<img className='logo' src={skills.logo} alt={skills.alt} />
									</li>
								)
							})}
						</ul>
						<h2 className='title-2'>Backend</h2>
						<ul className='content-list__logo'>
							{backSkills.map((skills) => {
								return (
									<li className='content-list__logo-item'>
										<img className='logo' src={skills.logo} alt={skills.alt} />
									</li>
								)
							})}
						</ul>
					</div>
				</div>
			</main>
		</>
	)
}

export default Home
