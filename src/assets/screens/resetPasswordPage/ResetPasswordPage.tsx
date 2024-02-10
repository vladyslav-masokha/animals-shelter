import { TextField } from '@mui/material'
import { useState } from 'react'
import styles from '../../ui/Form/Form.module.scss'
import { AuthBtnResetPassword } from '../../ui/Form/buttons/AuthBtnResetPassword'
import { handleEmailBlur } from '../../ui/Form/handleBlurLogic/HandleEmailBlur'
import { helperTextEmailLogic } from '../../ui/Form/helperLogic/HelperTextEmailLogic'
import { handleEmailChange } from '../../ui/Form/logic/AuthLogic'
import { handleResetPassword } from '../../ui/Form/logic/ResetPasswordService'
import { useTitleLogic } from './logic/titleLogic'

const ResetPasswordPage = () => {
	const [email, setEmail] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	useTitleLogic()

	const handleResetClick = () => handleResetPassword(email, setErrorMessage)

	return (
		<div className={styles.form}>
			<h2 className={styles.title}>Відновлення пароля</h2>
			{errorMessage && (
				<div className={styles.errorMessage}>{errorMessage}</div>
			)}
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
				onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
					handleEmailChange(e, { setEmail })
				}
				onBlur={() => handleEmailBlur(email, setIsEmailValid)}
			/>

			<AuthBtnResetPassword handleResetClick={handleResetClick} />
		</div>
	)
}

export { ResetPasswordPage }
