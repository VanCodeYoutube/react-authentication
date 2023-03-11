import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='loginCard'>
        <div className='loginContent'>
          <div className='headerArea'>
            <h2>VanCodeEstoque</h2>
          </div>
          <div className='formArea'>
            <form>
              <div>
                <input type="text" placeholder='Email'/>
              </div>
              <div>
                <input type="password" placeholder='Senha'/>
              </div>
              <button>Login</button>
            </form>
          </div>
          <div className='forgotPassword'>
            <a href='#'>Recupere sua senha</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
