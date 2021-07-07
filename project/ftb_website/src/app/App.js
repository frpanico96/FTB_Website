import './styles/app.css';

//Components
import Form from '../form/form';
import Home from '../home/home';

var loginPage = true;
var homePage = false;

function App() {

  return (
    <div className="container-fluid form-container">
      {renderElement()}
    </div>
  );
}

function renderElement(){
  if(loginPage){
    return (
            <div className="row">
              <div className="col-sm-4 version-col align-items-star" align="left">
                ftbstudio_version: 0.0.1
              </div>
              <div className="col-sm-4">
                <Form />
              </div>
              <div className="col-sm-4"></div>
            </div>
    );
  } else if(homePage){
    return (
        <div>
          <Home />
        </div>
    )
  } 
}

export default App;
