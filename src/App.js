//COMPONENTS
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Switch } from 'react-router-dom';
//PAGES
import Resume from './pages/Resume';
import About from './pages/About';
import Projects from './pages/Projects';
import styled from 'styled-components';

const Div = styled.div`
    text-align: center;
`

function App() {
  //URL HEROKU for Backend
  const URL="https://proj-mock-portfolio.herokuapp.com/";
  // const URL="http://localhost:4000/";

  return (
    <Div className="App">
      <Header />
      <Switch>
        <Route exact path="/">
          <About URL={URL}/>
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/projects">
          <Projects URL={URL}/>
        </Route>
      </Switch>
      < Footer />
    </Div>
  );
}

export default App;
