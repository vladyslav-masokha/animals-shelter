import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'

const Copyright = () => {
	return (
		<Typography variant='body2' color='text.secondary' align='center'>
			{'Copyright © '}
			<Link to='/' color='inherit'>
				SaveTheAnimals
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export { Copyright }
