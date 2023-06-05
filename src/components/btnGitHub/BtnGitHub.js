import gitIcon from './../../img/icons/gitHub-black.svg'
const BtnGitHub = (props) => {
	return (
		<a
			href={props.link}
			target='_blank'
			rel='noreferrer'
			className='btn-outline'
		>
			<img src={gitIcon} alt='' />
			GitHub repo
		</a>
	)
}
export default BtnGitHub
