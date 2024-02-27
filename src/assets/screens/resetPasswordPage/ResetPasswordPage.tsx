import { TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { MessageLogic } from '../../globalLogic/messageLogic'
import { useTitleLogic } from '../../globalLogic/titleLogic'
import styles from '../../ui/Form/Form.module.scss'
import { AuthBtnResetPassword } from '../../ui/Form/buttons/AuthBtnResetPassword'
import { handleEmailBlur } from '../../ui/Form/handleBlurLogic/HandleEmailBlur'
import { helperTextEmailLogic } from '../../ui/Form/helperLogic/HelperTextEmailLogic'
import { handleEmailChange } from '../../ui/Form/logic/AuthLogic'
import { handleResetPassword } from '../../ui/Form/logic/ResetPasswordService'

const ResetPasswordPage = () => {
	const [successMessage, setSuccessMessage] = useState<string | null>(null)
	const [errorMessage, setErrorMessage] = useState<string | null>(null)

	const [email, setEmail] = useState<string>('')
	const [isEmailValid, setIsEmailValid] = useState<boolean>(true)

	useTitleLogic({ namePage: 'Відновлення пароля', id: null })

	const handleResetClick = () =>
		handleResetPassword(email, setSuccessMessage, setErrorMessage)

	return (
		<div className={styles.form}>
			<Typography className={styles.title}>Відновлення пароля</Typography>
			<MessageLogic
				successMessage={successMessage}
				errorMessage={errorMessage}
			/>

			<TextField
				required
				type='email'
				id='outlined-basic'
				label='Електрона пошта'
				variant='outlined'
				value={email}
				error={!isEmailValid}
				helperText={helperTextEmailLogic(isEmailValid)}
				className={styles.resetField}
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
