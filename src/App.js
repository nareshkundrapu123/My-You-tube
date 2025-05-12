import { Provider } from 'react-redux';
import './App.css'
import Body from './components/Body';
import Head from './components/Head';
import Store from './utils/Store';
function App() {
  return (
    <Provider store={Store}>
    <div>
    

      <Head/>   
     <Body/>
  

     {/* 
     
     
     
     */}
    </div>
    </Provider>
  );
}

export default App;
