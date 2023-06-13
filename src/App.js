import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import './App.css';
import NewJobComponent from './components/NewJob/NewJobComponent';
import ViewJobComponent from './components/ViewJob/ViewJobComponent';
import EditJobComponent from './components/EditJob/EditJobComponent';
import HomeComponent from './components/HomeComponent/HomeComponent';
import JobDetails from './components/JobDetails';

function App() {
  return (
    <Router>
      <div className='navs'>
        <Link to="/new">New Job Adding</Link><br/>
        <Link to="/edit">Edit Job</Link><br/>
        <Link to="/view">View Job</Link>
        <Link to="/jobdetails"></Link>
      </div>
      <Routes>
        <Route exact path="/" element={<HomeComponent/>}></Route>
        <Route exact path="/new" element={<NewJobComponent/>}></Route>
        <Route exact path="/view" element={<ViewJobComponent/>}></Route>
        <Route exact path="/edit" element={<EditJobComponent/>}></Route>
        <Route exact path="/jobdetails" element={<JobDetails/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
