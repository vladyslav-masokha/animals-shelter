<<<<<<< HEAD
import { TextField } from '@mui/material'
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
import { useTitleLogic } from './logic/TitleLogic'

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

	useTitleLogic()

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

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<h2 className={styles.title}>Реєстрація</h2>
				{errorMessage && (
					<div className={styles.errorMessage}>{errorMessage}</div>
				)}

				<div className={styles.formBody}>
					<TextField
						required
						type='text'
						id='outlined-basic'
						label={`Ім'я користувача`}
						variant='outlined'
						value={userName}
						error={!isUserNameValid}
						helperText={helperTextUserNameLogic(isUserNameValid)}
						onBlur={() => handleUserNameBlur(userName, setIsUserNameValid)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUserNameChange(e, { setUserName })
						}
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
=======
import { TextField } from '@mui/material'
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
import { useTitleLogic } from './logic/TitleLogic'

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

	useTitleLogic()

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

	return (
		<form className={styles.form}>
			<div className='wrapper'>
				<h2 className={styles.title}>Реєстрація</h2>
				{errorMessage && (
					<div className={styles.errorMessage}>{errorMessage}</div>
				)}

				<div className={styles.formBody}>
					<TextField
						required
						type='text'
						id='outlined-basic'
						label={`Ім'я користувача`}
						variant='outlined'
						value={userName}
						error={!isUserNameValid}
						helperText={helperTextUserNameLogic(isUserNameValid)}
						onBlur={() => handleUserNameBlur(userName, setIsUserNameValid)}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
							handleUserNameChange(e, { setUserName })
						}
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
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
