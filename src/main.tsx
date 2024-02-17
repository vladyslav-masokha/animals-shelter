import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { AboutPage } from './assets/screens/aboutPage/AboutPage.tsx'
import { DonationPage } from './assets/screens/donationPage/DonationPage.tsx'
import { ErrorPage } from './assets/screens/errorPage/ErrorPage.tsx'
import { HomePage } from './assets/screens/homePage/HomePage.tsx'
import { LoginPage } from './assets/screens/loginPage/LoginPage.tsx'
import { RegisterPage } from './assets/screens/registerPage/RegisterPage.tsx'
import { ResetPasswordPage } from './assets/screens/resetPasswordPage/ResetPasswordPage.tsx'
import { UserProfilePage } from './assets/screens/userProfilePage/UserProfilePage.tsx'
import './firebase.ts'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={HomePage} />
				<Route path='/profile' component={UserProfilePage} />
				<Route path='/donation' component={DonationPage} />
				<Route path='/about' component={AboutPage} />
				<Route path='/login' component={LoginPage} />
				<Route path='/register' component={RegisterPage} />
				<Route path='/reset' component={ResetPasswordPage} />
				<Route path='*' component={ErrorPage} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>
)
