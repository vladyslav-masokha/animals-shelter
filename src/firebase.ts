import { initializeApp } from 'firebase/app'

const firebaseConfig = {
	apiKey: 'AIzaSyDWn9m9iTcmVivkjMea_ea61HJ65vptlb4',
	authDomain: 'savetheanimals-58f69.firebaseapp.com',
	projectId: 'savetheanimals-58f69',
	storageBucket: 'savetheanimals-58f69.appspot.com',
	messagingSenderId: '636428552791',
	appId: '1:636428552791:web:e16a7bacd67952544a3112',
}

const app = initializeApp(firebaseConfig)
export { app }
