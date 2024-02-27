import { Typography } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import { MessageLogic } from '../../globalLogic/messageLogic'
import { redirectAfterTimeout } from '../../globalLogic/redirectAfterTimeout'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import styles from '../../ui/Form/Form.module.scss'
import { FormBody } from '../../ui/Form/FormBody'
import { AuthBtnForgotPassword } from '../../ui/Form/buttons/AuthBtnForgotPassword'
import { AuthBtnLogin } from '../../ui/Form/buttons/AuthBtnLogin'
import { SignInWithGoogle } from '../../ui/Form/buttons/AuthBtnSignInWithGoogle'
import { handleLogin } from '../../ui/Form/logic/LoginService'

const LoginPage = () => {
	const history = useHistory()
	const auth = getAuth()
	const [user] = useAuthState(auth)
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')

	const [successMessage, setSuccessMessage] = useState<string | null>(null)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true)

	useTitleLogic({ namePage: 'Авторизація', id: null })
	redirectAfterTimeout({ user, history })

	const handleLoginClick = () =>
		handleLogin(
			email,
			password,
			setEmail,
			setPassword,
			setSuccessMessage,
			setErrorMessage
		)

	const messageProps = { successMessage, errorMessage }
	const btnLoginProps = { handleLoginClick, isEmailValid, isPasswordValid }
	const formProps = {
		email,
		password,
		setEmail,
		setPassword,
		isEmailValid,
		isPasswordValid,
		setIsEmailValid,
		setIsPasswordValid,
	}

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<div className={styles.formGaps}>
					<Typography className={styles.title}>Логін</Typography>

					<MessageLogic {...messageProps} />
					<FormBody {...formProps} />
					<AuthBtnForgotPassword />
					<AuthBtnLogin {...btnLoginProps} />
					<SignInWithGoogle auth={auth} />
				</div>
			</div>
		</form>
	)
}

export { LoginPage }
