import reactLogo from '../assets/react.svg'

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="https://react.dev" target='_blank'>
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <div className="heading">
        <h1>Learn React</h1>
      </div>
      <div className="navigation">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/learn">Learn</a>
      </div>
    </nav>
  )
}
