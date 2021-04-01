import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import {
  KaryawanIndex,
  AddKaryawan,
  EditKaryawan
} from './pages'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/promise/karyawanindex'>
          <KaryawanIndex />
        </Route>
        <Route path='/promise/addkaryawan'>
          <AddKaryawan />
        </Route>
        <Route path='/promise/editkaryawan/:id'>
          <EditKaryawan />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
