import { useCallback } from 'react'
import Particles from 'react-particles'
import { loadFull } from 'tsparticles'
import particlesConfig from '../../helpers/particlesConfig'
const ParticlesBackground = () => {
	const particlesInit = useCallback(async (engine) => {
		await loadFull(engine)
	}, [])

	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			options={{ ...particlesConfig }}
		/>
	)
}

export default ParticlesBackground
