import './styles/app.css';

//Components
import Form from '../form/form';

function App() {
  return (
    <div className="container-fluid form-container">
      <div className="row">
        <div className="col-sm-4 version-col align-items-star" align="left">
            ftbstudio_version: 0.0.1
        </div>
        <div className="col-sm-4">
          <Form />
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default App;
