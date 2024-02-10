<<<<<<< HEAD
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Copyright = () => {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			// {...props}
		>
			{'Copyright © '}
			<Link to='/' color='inherit'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export { Copyright }
=======
import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Copyright = () => {
	return (
		<Typography
			variant='body2'
			color='text.secondary'
			align='center'
			// {...props}
		>
			{'Copyright © '}
			<Link to='/' color='inherit'>
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export { Copyright }
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
