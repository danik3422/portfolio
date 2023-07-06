const About = (props) => {
	return (
		<>
			<div className='sidebar__contact'>
				<h1 className='sidebar__contact-title'>{props.title}</h1>
				<div className='sidebar__contact-data'>
					<p>{props.text}</p>
					<p>{props.stack}</p>
				</div>
			</div>
		</>
	)
}
export default About
