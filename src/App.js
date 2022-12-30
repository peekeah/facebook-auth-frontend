import './App.css';

function App() {

  const handleLogin = async() => {
    window.open('http://localhost:5000/auth/facebook', '_self');
  }

  return (
      <div className="container d-flex flex-column justify-content-center align-items-center" style={{ height: '100vh' }} onClick={handleLogin}>
        <div className="bg-dark text-light p-5" style={{ borderRadius: '12px' }}>
        <h1 className="mb-4">Facebook Auth App</h1>
        <div className="d-flex justify-content-center">
        <button className="p-2 btn btn-primary" onClick={() => handleLogin()}>
          Login with Facebook
        </button>
        </div>
        </div>
      </div>
  );
}

export default App;
