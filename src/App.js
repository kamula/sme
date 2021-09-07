import Header from './components/Header'
import Footer from './components/Footer'
import ServiceScreen from './screens/ServiceScreen'
import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router className="App">
      <Header/>
      <main >
        <Route path="/" component={HomeScreen} exact />
        <Route path="/about" component={AboutScreen} />{" "}
        <Route path="/services" component={ServiceScreen} />
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
