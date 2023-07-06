import './styles/main.css'

import { Suspense, useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ContactModal from './components/contactModal/ContactModal'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'
import ScrollToTop from './utils/scrollToTop'

function App() {
	const [modalActive, setActiveModal] = useState(false)
	const handleOpenModal = () => {
		setActiveModal(true)
		document.body.style.overflowY = 'hidden'
	}

	const handleCloseModal = () => {
		setActiveModal(false)
		document.body.style.overflowY = 'visible'
	}

	return (
		<Suspense fallback={null}>
			<div className='App'>
				<div className='app-container'>
					<BrowserRouter>
						<ScrollToTop />
						<Navigation onClick={handleOpenModal} />

						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/projects' element={<Projects />} />
							<Route path='/project/:id' element={<Project />} />
						</Routes>
						<Footer />
					</BrowserRouter>
					{modalActive && (
						<ContactModal isOpen={modalActive} onClose={handleCloseModal} />
					)}
				</div>
			</div>
		</Suspense>
	)
}

export default App
