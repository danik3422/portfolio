import { useTranslation } from 'react-i18next'
import Project from '../components/project/Project'

import { projects } from './../helpers/projectArray'

const Projects = () => {
	const { t } = useTranslation(['common'])

	return (
		<main className='section'>
			<div className='container'>
				<h2 className='title-1'>{t('project')}</h2>
				<ul className='projects'>
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								img={project.img}
								title={project.title}
								index={index}
							/>
						)
					})}
				</ul>
			</div>
		</main>
	)
}

export default Projects
