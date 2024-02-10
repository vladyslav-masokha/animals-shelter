import { useEffect } from 'react'

const useTitleLogic = () => {
	useEffect(() => {
		document.title = 'Скинути пароль - Притулок для тварин'
		return () => {
			document.title = 'Головна - Притулок для тварин'
		}
	}, [])
}

export { useTitleLogic }
