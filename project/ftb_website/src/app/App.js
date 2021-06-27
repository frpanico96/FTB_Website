import './styles/app.css';

//Components
import Form from '../form/form';

function App() {
  return (
    <div className="container-fluid form-container">
      <div className="row align-items-center">
        <div className="col-sm-4"></div>
        <div className="col-sm-4">
          <Form />
        </div>
        <div className="col-sm-4"></div>
      </div>
    </div>
  );
}

export default App;
