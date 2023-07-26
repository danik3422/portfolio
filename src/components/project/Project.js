import BtnGitHub from '../UI/btnGitHub/BtnGitHub'
import BtnSiteLink from '../UI/btnSiteLink/BtnSiteLink'
import TiltComponent from '../tilt/TiltComponent'
import './style.css'

const Project = ({ index, title, img, skills, gradient, site, repos }) => {
	const projectSkills = [...skills]
	return (
		<TiltComponent>
			<div className='project-card'>
				<div className='project-card_description'>
					<div className='project-card_header'>
						<h2>
							<a href='#' target='__blank' rel='noopener norefferer'>
								{title}
							</a>
						</h2>
						<ul className='project-card_tags'>
							{projectSkills.map((skill) => {
								return <li>{skill}</li>
							})}
						</ul>
					</div>

					<div className='project-card_buttons'>
						<BtnSiteLink link={site} />
						<BtnGitHub link={repos} />
					</div>
				</div>
				<div
					className='project-card_img'
					style={{
						background: `${gradient}`,
					}}
				>
					<img src={img} alt={title} />
				</div>
			</div>
		</TiltComponent>
	)
}
export default Project
