import React from 'react'
import Tilt from 'react-parallax-tilt'
import './style.css'

const TiltComponent = (props) => {
	return (
		<Tilt tiltMaxAngleX={1.5} tiltMaxAngleY={1.5} perspective={1500}>
			<div className='tiltComponent'>{props.children}</div>
		</Tilt>
	)
}

export default TiltComponent
