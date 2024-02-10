<<<<<<< HEAD
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
=======
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
>>>>>>> 6f1c8987f7e568d0d8904d19fb930456a6d641bc
