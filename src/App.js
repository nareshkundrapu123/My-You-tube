import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import Store from './utils/Store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Maincontainer from './components/Maincontainer';
import WatchPage from './components/WatchPage';


const appRouter= createBrowserRouter([{

    path:"/",
    element: <Body/>,
    children:[
      {
        path:"/",
        element: <Maincontainer/>
      },
      {
        path:"watch",
        element:<WatchPage/>,
      }
    ]


}])
function App() {
  return (
    <Provider store={Store}>
    <div>
    

      <Head/>   
      <RouterProvider router={appRouter}/>

    
    </div>
    </Provider>
  );
}

export default App;
