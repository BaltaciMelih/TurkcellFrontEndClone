import Counter from './components/Counter'
import CounterActions from './components/CounterActions'
import { connect } from "react-redux"
import Header from './components/Header'
import Footer from './components/Footer'
import {
	BrowserRouter as Router,

} from 'react-router-dom';

const mapStateToProps = state => ({
	dark: state.site.dark,

})
function App({ dark}) {

	return (
		<Router>
			<div className={dark ? 'dark' : 'light'}>
				<Header/>
				<Counter />
				<CounterActions />
	
				
	
				<Footer/>
			</div>
		</Router>
	);
}

export default connect(mapStateToProps)(App);
