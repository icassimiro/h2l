
import './App.css';
import Background from './Background';
import Board from './Board';
import Boardt from './Boardt';
import Construction from './Construction';
import Copy from './Copy';
import Habitacional from './Habitacional';
import Habtext from './Habtext';
import Header from './Header';

import Infos from './Infos';
import Logo from './Logo';
import Scroll from './Scroll';

import Texthl from './Texthl';


function App() {
  return (
    <div>
      <Header />

      <Background />
      <Habitacional />
      
      <Habtext/>
      <Texthl />
      <Board />


      <Boardt />

      <Construction />
     
      <Logo />

      <Infos />



      <Copy />
      <Scroll />

    </div>
  );
}

export default App;
