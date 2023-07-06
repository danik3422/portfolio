const Contact = (props) => {
	return (
		<>
			<div className='sidebar__contact'>
				<h1 className='sidebar__contact-title'>{props.text}</h1>
				<div className='sidebar__contact-data'>
					<p>danylo.syloats@gmail.com</p>
					<p>Warsaw, Poland</p>
				</div>
			</div>
		</>
	)
}
export default Contact
