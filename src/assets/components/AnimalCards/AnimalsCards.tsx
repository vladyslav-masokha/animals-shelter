import { Animal } from '../IAnimal'
import { AnimalCard } from './AnimalCard'
import styles from './AnimalsCard.module.scss'

interface AnimalCardProps {
	animals: Animal[] | Animal
}

const AnimalsCards: React.FC<AnimalCardProps> = ({ animals }) => {
	return (
		<div className={styles.cards}>
			{Array.isArray(animals) ? <AnimalCard animals={animals} /> : null}
		</div>
	)
}

export { AnimalsCards }
