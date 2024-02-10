import { Google as GoogleIcon } from '@mui/icons-material'
import { Button } from '@mui/material'
import { Auth } from 'firebase/auth'
import { handleGoogleSignIn } from '../logic/AuthLogic'

interface SignInWithGoogleProps {
	auth: Auth
}

const SignInWithGoogle: React.FC<SignInWithGoogleProps> = ({ auth }) => {
	return (
		<Button
			variant='contained'
			color='primary'
			startIcon={<GoogleIcon />}
			onClick={() => handleGoogleSignIn(auth)}
		>
			Увійти через Google
		</Button>
	)
}

export { SignInWithGoogle }
