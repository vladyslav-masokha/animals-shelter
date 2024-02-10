import { useEffect } from 'react'

const useTitleLogic = () => {
	useEffect(() => {
		document.title = 'Логін - Притулок для тварин'
		return () => {
			document.title = 'Головна - Притулок для тварин'
		}
	}, [])

	return null
}

export { useTitleLogic }
