import { useTranslation } from 'react-i18next'
import pdf from './cv/file.pdf'

import './style.css'
const Header = () => {
	const { i18n, t } = useTranslation(['home'])

	return (
		<header className='header'>
			<div className='header__wrapper'>
				<h1 className='header__title'>
					<strong>
						{t('greeting')}
						<em>{t('name')}</em>
					</strong>
					<br />
					{t('profession')}
				</h1>
				<div className='header__text'>
					<p>{t('text')}</p>
				</div>
				<a
					href={pdf}
					download='Danylo_Syloats_CV'
					target='_blank'
					rel='noreferrer'
					className='btn'
				>
					{t('cv')}
				</a>
			</div>
		</header>
	)
}
export default Header
