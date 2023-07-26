import linkIcon from '../../../img/icons/link.svg'
import './style.css'
const BtnSiteLink = (props) => {
	return (
		<a
			href={props.link}
			target='_blank'
			rel='noreferrer'
			className='btn-outline'
		>
			<img src={linkIcon} alt='' />
			View
		</a>
	)
}
export default BtnSiteLink
