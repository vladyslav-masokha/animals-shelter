import { Link } from 'react-router-dom'
import { Animal } from '../IAnimal'
import styles from './AnimalsCard.module.scss'

interface AnimalCardProps {
	animals: Animal[]
}

const AnimalCard: React.FC<AnimalCardProps> = ({ animals }) => {
	return (
		<>
			{animals.length !== 0 ? (
				animals.map(animal => (
					<Link to={`/${animal.id}`} className={styles.card} key={animal.id}>
						<img
							className={styles.cardImage}
							src={animal.image}
							alt={animal.name}
						/>

						<div className={styles.cardInfo}>
							<h3 className={styles.name}>{animal.name}</h3>
						</div>
					</Link>
				))
			) : (
				<p className={styles.not_animals}>Тваринки не знайдені!</p>
			)}
		</>
	)
}

export { AnimalCard }
