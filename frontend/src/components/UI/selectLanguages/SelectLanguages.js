import './style.css'
const SelectLanguages = () => {
	return (
		<div className='lang-selector'>
			<div className='lang-selector-item lang-selector-item-pl'>
				<div className='lang-selector-flag'>UKR</div>
				<div className='lang-selector-icon'>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<rect
							width='24'
							height='24'
							fill='white'
							fill-opacity='0.01'
						></rect>
						<path
							fill-rule='evenodd'
							clip-rule='evenodd'
							d='M12.6402 4.23173L12 3.69824L11.3598 4.23173L5.35984 9.23173C4.93556 9.58529 4.87824 10.2159 5.2318 10.6401C5.58537 11.0644 6.21593 11.1217 6.64021 10.7682L12 6.30166L17.3598 10.7682C17.7841 11.1217 18.4147 11.0644 18.7682 10.6401C19.1218 10.2159 19.0645 9.58529 18.6402 9.23173L12.6402 4.23173ZM11.3598 19.7682L12 20.3017L12.6402 19.7682L18.6402 14.7682C19.0645 14.4146 19.1218 13.784 18.7682 13.3598C18.4147 12.9355 17.7841 12.8782 17.3598 13.2317L12 17.6982L6.64021 13.2317C6.21593 12.8782 5.58537 12.9355 5.2318 13.3598C4.87824 13.784 4.93556 14.4146 5.35984 14.7682L11.3598 19.7682Z'
						></path>
					</svg>
				</div>
			</div>
			<div className='lang-selector-dropdown'>ds</div>
		</div>
	)
}
export default SelectLanguages
