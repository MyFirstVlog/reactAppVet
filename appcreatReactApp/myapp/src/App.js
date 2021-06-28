import {Link, Route, useLocation, Switch } from "wouter";
import './App.css';
import Pagina from './pages/pagina'

function App() {
  return(
    <Switch>
          <Route path="/" component={()=> <Pagina title='Pets' entity = 'pets' />} /> 
          <Route path="/vets" component={()=> <Pagina title='Vets' entity = 'vets' />} />
          <Route path="/owners" component={()=> <Pagina title='Owners' entity = 'owners' />} />
          <Route path="/consults" component={()=> <Pagina title='Consults' entity = 'consults' />} />
   </Switch>

  )
 
}

export default App;
