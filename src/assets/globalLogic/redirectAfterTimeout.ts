import { User } from 'firebase/auth'
import { History, LocationState } from 'history'

interface redirectAfterTimeoutProps {
	user: User | null | undefined
	history: History<LocationState>
}

const redirectAfterTimeout = ({
	user,
	history,
}: redirectAfterTimeoutProps): void => {
	setTimeout(() => {
		if (user) history.push('/')
	}, 1000)
}

export { redirectAfterTimeout }
