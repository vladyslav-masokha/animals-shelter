import { useEffect } from 'react'

interface useTitleLogicProps {
	namePage: string
	id: number | null
}

const useTitleLogic: React.FC<useTitleLogicProps> = ({ namePage, id }) => {
	useEffect(() => {
		document.title = `${namePage} - Притулок для тварин`
		return () => {
			document.title = 'Головна - Притулок для тварин'
		}
	}, [id, namePage])

	return null
}

export { useTitleLogic }
