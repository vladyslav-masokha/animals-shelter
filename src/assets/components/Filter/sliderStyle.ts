import { Slider, styled } from '@mui/material'

const sliderStyle = styled(Slider)({
	color: '#faff65',
	height: 8,
	'& .MuiSlider-track': {
		border: 'none',
	},
	'& .MuiSlider-thumb': {
		height: 24,
		width: 24,
		backgroundColor: '#fff',
		border: '2px solid currentColor',
		'&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
			boxShadow: 'inherit',
		},
		'&::before': {
			display: 'none',
		},
	},
})

export { sliderStyle }
