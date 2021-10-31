import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Form from './pages/Form';



function App() {
  const URL = 'https://first-trial-portfolio.herokuapp.com/'
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects  url={URL}/>
        </Route>
        <Route path="/about">
          <About  url={URL}/>
        </Route>
        <Route path="/form">
          <Form/>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
