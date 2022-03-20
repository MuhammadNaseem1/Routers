import { Link, Outlet } from 'react-router-dom'

function Navbar()
{
    return (
        <>
          <h1>hello </h1>
            <ul>
              <li>
                <Link to="#">Home</Link>
              </li>
              <li>
                <Link to="blogs">Blogs</Link>
              </li>
              <li>
                <Link to="about">About</Link>
              </li>
            </ul>
          { <Outlet /> }
        </>
      )
}
export default Navbar;