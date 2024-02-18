import { useEffect, useState } from 'react'
import { Animal } from './components/IAnimal'

const useFetchData = (url: string) => {
	const [data, setData] = useState<Animal[]>([])
	useEffect(() => {
		fetch(url)
			.then(res => res.json())
			.then(data => setData(data))
			.catch(error => console.error('Error fetching data:', error))
	}, [url])
	return data
}

export { useFetchData }
