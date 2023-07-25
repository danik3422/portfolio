import { useTranslation } from 'react-i18next'
import Project from '../components/project/Project'

import axios from 'axios'
import { useEffect, useState } from 'react'
import Loading from '../components/UI/loading/Loading'

const Projects = () => {
	const { t } = useTranslation(['common'])

	const [loading, setLoading] = useState(true)
	const [projects, setProjects] = useState([])

	useEffect(() => {
		axios
			.get('http://localhost:3001/projects')
			.then((response) => {
				setProjects(response.data)
				setLoading(false)
			})
			.catch((err) => {
				console.log(err)
				setLoading(false)
			})
	}, [])

	return (
		<main className='project-section'>
			<div className='container'>
				<h2 className='title-1'>{t('project-title')}</h2>
				{loading ? (
					<Loading />
				) : (
					<div className='projects'>
						{projects.map((project) => {
							return (
								<Project
									repos={project.gitHubLink}
									site={project.webSiteLink}
									key={project._id}
									title={project.title}
									index={project._id}
									skills={project.skills}
									gradient={project.gradient}
									img={project.img}
								/>
							)
						})}
					</div>
				)}
			</div>
		</main>
	)
}

export default Projects
