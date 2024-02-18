import { useEffect } from 'react'

interface useTitleLogicProps {
	namePage: string
}

const useTitleLogic: React.FC<useTitleLogicProps> = ({ namePage }) => {
	useEffect(() => {
		document.title = `${namePage} - Притулок для тварин`
		return () => {
			document.title = 'Головна - Притулок для тварин'
		}
	}, [])

	return null
}

export { useTitleLogic }
