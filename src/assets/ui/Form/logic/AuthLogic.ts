<<<<<<< HEAD
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

interface handleUserNameChangeProps {
	setUserName: (userName: string) => void
}

interface handleEmailChangeProps {
	setEmail: (email: string) => void
}

interface handlePasswordChangeProps {
	setPassword: (password: string) => void
}

const handleUserNameChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setUserName }: handleUserNameChangeProps
) => setUserName(e.target.value)

const handleEmailChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setEmail }: handleEmailChangeProps
) => setEmail(e.target.value)

const handlePasswordChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setPassword }: handlePasswordChangeProps
) => setPassword(e.target.value)

const handleGoogleSignIn = async (auth: Auth) => {
	const provider = new GoogleAuthProvider()
	await signInWithPopup(auth, provider)
}

export {
	handleEmailChange,
	handleGoogleSignIn,
	handlePasswordChange,
	handleUserNameChange,
}
=======
import { Auth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

interface handleUserNameChangeProps {
	setUserName: (userName: string) => void
}

interface handleEmailChangeProps {
	setEmail: (email: string) => void
}

interface handlePasswordChangeProps {
	setPassword: (password: string) => void
}

const handleUserNameChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setUserName }: handleUserNameChangeProps
) => setUserName(e.target.value)

const handleEmailChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setEmail }: handleEmailChangeProps
) => setEmail(e.target.value)

const handlePasswordChange = (
	e: React.ChangeEvent<HTMLInputElement>,
	{ setPassword }: handlePasswordChangeProps
) => setPassword(e.target.value)

const handleGoogleSignIn = async (auth: Auth) => {
	const provider = new GoogleAuthProvider()
	await signInWithPopup(auth, provider)
}

export {
	handleEmailChange,
	handleGoogleSignIn,
	handlePasswordChange,
	handleUserNameChange,
}
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
