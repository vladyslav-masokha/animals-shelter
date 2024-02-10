import { useEffect } from 'react'

const useTitleLogic = () => {
	useEffect(() => {
		document.title = 'Реєстрація - Притулок для тварин'
		return () => {
			document.title = 'Головна - Притулок для тварин'
		}
	}, [])
}

export { useTitleLogic }
