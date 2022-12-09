import { setLanguage, setDarkMode } from "../stores/site"
import { useSelector, useDispatch } from 'react-redux';


function Footer() {

	const dispatch = useDispatch()
	const { dark, language } = useSelector(state => state.site)
	const languages = ['tr', 'en']

	const handleLanguage = lang => {
		dispatch(setLanguage(lang))
	}

	return (
		<div>
			footer
			<div>
				{languages.map((lang, index) => (
					<button onClick={() => handleLanguage(lang)} className={lang === language ? 'active' : ''} key={index}>{lang}</button>
				))}
			</div>
			<div>
				<button onClick={() => dispatch(setDarkMode())}>
					{dark ? 'Light Moda geç' : 'Dark moda geç'}
				</button>
			</div>
		</div>
	)
}

export default Footer