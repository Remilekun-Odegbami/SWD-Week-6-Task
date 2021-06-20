import {BrowserRouter as  Router, Switch, Route} from 'react-router-dom'
import Home from "./Pages/Home";
import UserPosts from "./Pages/UserPost";
import PostsList from "./Pages/PostsList";
import ErrorPage from './Pages/404';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavBar from './Pages/NavBar';
import Create from './Pages/Create';
import { protectedRoute } from './components/protectedRoute';
import '../src/App.css';



const App = () => {


  return(
   <div className="content">
      <Router> 
      <NavBar />
    <Switch>
     
       {/* render home component */}
      <protectedRoute exact path="/home"
        component={Home} />

        {/* render user post component */}
       <protectedRoute path="/userposts/:userid"
         component={UserPosts } />
       
        {/* render Posts component */}
       <protectedRoute exact path="/postList"
        component={PostsList } />
      
        {/* render Register component */}
       <Route exact path="/register"
        component={Register}/>
       {/* render Login component */}
       <Route exact path ="/login">
        component={Login}
       </Route> 
       {/* render Error component */}
       <protectedRoute exact path='/create'
        component={Create }/>
       
       <Route  >
        <ErrorPage />
       </Route>
    </Switch>
    </Router>
   </div>
  )
}

export default App;
