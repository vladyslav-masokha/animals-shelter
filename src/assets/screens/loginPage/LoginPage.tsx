import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import styles from '../../ui/Form/Form.module.scss'
import { FormBody } from '../../ui/Form/FormBody'
import { AuthBtnForgotPassword } from '../../ui/Form/buttons/AuthBtnForgotPassword'
import { AuthBtnLogin } from '../../ui/Form/buttons/AuthBtnLogin'
import { SignInWithGoogle } from '../../ui/Form/buttons/AuthBtnSignInWithGoogle'
import { handleLogin } from '../../ui/Form/logic/LoginService'
import { useTitleLogic } from './logic/titleLogic'

const LoginPage = () => {
	const history = useHistory()
	const auth = getAuth()
	const [user] = useAuthState(auth)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true)

	useTitleLogic()

	useEffect(() => {
		if (user) history.push('/')
	}, [user, history])

	const handleLoginClick = () =>
		handleLogin(email, password, setEmail, setPassword, setErrorMessage)

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<h2 className={styles.title}>Логін</h2>
				{errorMessage && (
					<div className={styles.errorMessage}>{errorMessage}</div>
				)}

				<FormBody
					email={email}
					password={password}
					setEmail={setEmail}
					setPassword={setPassword}
					isEmailValid={isEmailValid}
					isPasswordValid={isPasswordValid}
					setIsEmailValid={setIsEmailValid}
					setIsPasswordValid={setIsPasswordValid}
				/>

				<AuthBtnForgotPassword />

				<AuthBtnLogin
					handleLoginClick={handleLoginClick}
					isEmailValid={isEmailValid}
					isPasswordValid={isPasswordValid}
				/>

				<SignInWithGoogle auth={auth} />
			</div>
		</form>
	)
}

export { LoginPage }
