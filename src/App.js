import './App.css';
import './index.css'
import Page from './components/Page'

import { library } from "@fortawesome/fontawesome-svg-core";
import { faBars, faCode , faBarsStaggered,faCertificate ,faProjectDiagram,faRectangleList} from "@fortawesome/free-solid-svg-icons";
import { faClose,faSort,faStar } from "@fortawesome/free-solid-svg-icons";
library.add(faBars,faClose, faCode,faBarsStaggered,faCertificate,faProjectDiagram,faRectangleList,faSort,faStar );
function App() {
  return (
    <>
    <Page/>
   
    </>
  );
}

export default App;
