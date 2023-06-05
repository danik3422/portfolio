import './styles/main.css'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/footer/Footer'
import Navigation from './components/navigation/Navigation'
import Home from './pages/Home'
import Project from './pages/Project'
import Projects from './pages/Projects'
import ScrollToTop from './utils/scrollToTop'

function App() {
	return (
		<div className='App'>
			<BrowserRouter>
				<ScrollToTop />
				<Navigation />

				<Routes>
					<Route path='/' element={<Home />} />
					{/* <Route path='/' element={<ContactModal />} /> */}
					<Route path='/projects' element={<Projects />} />
					<Route path='/project/:id' element={<Project />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	)
}

export default App
