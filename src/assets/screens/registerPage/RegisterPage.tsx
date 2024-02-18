import { TextField, Typography } from '@mui/material'
import { getAuth } from 'firebase/auth'
import { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useHistory } from 'react-router-dom'
import styles from '../../ui/Form/Form.module.scss'
import { FormBody } from '../../ui/Form/FormBody'
import { AuthBtnRegister } from '../../ui/Form/buttons/AuthBtnRegister'
import { SignInWithGoogle } from '../../ui/Form/buttons/AuthBtnSignInWithGoogle'
import { handleUserNameBlur } from '../../ui/Form/handleBlurLogic/HandleUserNameBlur'
import { helperTextUserNameLogic } from '../../ui/Form/helperLogic/HelperTextUserNameLogic'
import { handleUserNameChange } from '../../ui/Form/logic/AuthLogic'
import { handleRegister } from '../../ui/Form/logic/RegisterService'
import { ErrorMessages } from '../globalLogic/errorMessageLogic'
import { useTitleLogic } from '../globalLogic/titleLogic'

const RegisterPage = () => {
	const history = useHistory()
	const auth = getAuth()
	const [user] = useAuthState(auth)
	const [userName, setUserName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [errorMessage, setErrorMessage] = useState<string | null>(null)
	const [isUserNameValid, setIsUserNameValid] = useState<boolean>(true)
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
	const [isPasswordValid, setIsPasswordValid] = useState<boolean>(true)

	useTitleLogic({ namePage: 'Реєстрація' })

	useEffect(() => {
		if (user) history.push('/')
	}, [user, history])

	const handleRegisterClick = () =>
		handleRegister(
			userName,
			email,
			password,
			setEmail,
			setPassword,
			setErrorMessage
		)

	const handleUserNameInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		handleUserNameChange(e, { setUserName })

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<Typography className={styles.title}>Реєстрація</Typography>
				<ErrorMessages errorMessage={errorMessage} />

				<div className={styles.formBody}>
					<TextField
						required
						type='text'
						id='outlined-basic-1'
						label="Ім'я користувача"
						variant='outlined'
						value={userName}
						error={!isUserNameValid}
						helperText={helperTextUserNameLogic(isUserNameValid)}
						onBlur={() => handleUserNameBlur(userName, setIsUserNameValid)}
						onChange={handleUserNameInputChange}
					/>
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
					<AuthBtnRegister
						handleRegisterClick={handleRegisterClick}
						isEmailValid={isEmailValid}
						isPasswordValid={isPasswordValid}
					/>
					<SignInWithGoogle auth={auth} />
				</div>
			</div>
		</form>
	)
}

export { RegisterPage }
