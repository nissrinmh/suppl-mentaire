import logo from './logo.svg';
const Header=()=>{
    return(
      <div className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />
        <div className='menu'>
        <a
            className="App-link"
            href="  "
            target="_blank"
          >
            Home
          </a>
          <a className="App-link"href="  "target="_blank">About US</a>
          <a className="App-link"href="  "target="_blank">Service</a>
          <a className="App-link"href="  "target="_blank">Blog</a>
        </div>
        <div >
          <button className='button'>Sign in</button>
          <button className='but'>log in</button>
        </div>
      </div>
    )
  }
export default Header