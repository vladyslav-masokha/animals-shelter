import { TextField } from '@mui/material'
import styles from './Form.module.scss'
import { handleEmailBlur } from './handleBlurLogic/HandleEmailBlur'
import { handlePasswordBlur } from './handleBlurLogic/HandlePasswordBlur'
import { helperTextEmailLogic } from './helperLogic/HelperTextEmailLogic'
import { HelperTextPasswordLogic } from './helperLogic/HelperTextPasswordLogic'
import { handleEmailChange, handlePasswordChange } from './logic/AuthLogic'

// type setSate<T> = void

interface FormBodyProps {
	email: string
	password: string
	setEmail: (email: string) => void
	setPassword: (password: string) => void
	isEmailValid: boolean
	isPasswordValid: boolean
	setIsEmailValid: (email: boolean) => void
	setIsPasswordValid: (password: boolean) => void
}

const FormBody: React.FC<FormBodyProps> = ({
	email,
	password,
	setEmail,
	setPassword,
	isEmailValid,
	isPasswordValid,
	setIsEmailValid,
	setIsPasswordValid,
}) => {
	const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		handleEmailChange(e, { setEmail })

	const handlePasswordInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		handlePasswordChange(e, { setPassword })

	return (
		<div className={styles.formBody}>
			<TextField
				required
				type='email'
				id='outlined-basic'
				label='Електрона пошта'
				variant='outlined'
				value={email}
				error={!isEmailValid}
				helperText={helperTextEmailLogic(isEmailValid)}
				onChange={handleEmailInputChange}
				onBlur={() => handleEmailBlur(email, setIsEmailValid)}
			/>

			<TextField
				required
				id='outlined-password-input'
				label='Пароль'
				type='password'
				autoComplete='current-password'
				value={password}
				error={!isPasswordValid}
				helperText={HelperTextPasswordLogic(isPasswordValid)}
				onChange={handlePasswordInputChange}
				onBlur={() => handlePasswordBlur(password, setIsPasswordValid)}
			/>
		</div>
	)
}

export { FormBody }
