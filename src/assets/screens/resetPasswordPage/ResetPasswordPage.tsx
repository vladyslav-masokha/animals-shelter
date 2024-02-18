import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import styles from '../../ui/Form/Form.module.scss'
import { AuthBtnResetPassword } from '../../ui/Form/buttons/AuthBtnResetPassword'
import { handleEmailBlur } from '../../ui/Form/handleBlurLogic/HandleEmailBlur'
import { helperTextEmailLogic } from '../../ui/Form/helperLogic/HelperTextEmailLogic'
import { handleEmailChange } from '../../ui/Form/logic/AuthLogic'
import { handleResetPassword } from '../../ui/Form/logic/ResetPasswordService'
import { ErrorMessages } from '../globalLogic/errorMessageLogic'
import { useTitleLogic } from '../globalLogic/titleLogic'

const ResetPasswordPage = () => {
	const [email, setEmail] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	useTitleLogic({ namePage: 'Відновлення пароля', id: null })

	const handleResetClick = () => handleResetPassword(email, setErrorMessage)
	const handleEmailInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
		handleEmailChange(e, { setEmail })

	return (
		<div className={styles.form}>
			<Typography className={styles.title}>Відновлення пароля</Typography>
			<ErrorMessages errorMessage={errorMessage} />

			<TextField
				required
				type='email'
				id='outlined-basic'
				label='Електрона пошта'
				variant='outlined'
				value={email}
				error={!isEmailValid}
				helperText={helperTextEmailLogic(isEmailValid)}
				className='resetField'
				onChange={handleEmailInputChange}
				onBlur={() => handleEmailBlur(email, setIsEmailValid)}
			/>

			<AuthBtnResetPassword handleResetClick={handleResetClick} />
		</div>
	)
}

export { ResetPasswordPage }
