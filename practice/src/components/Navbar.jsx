// import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="w-full bg-white border-b">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <div className="flex items-center space-x-6">
            <a href="#" className="text-lg font-semibold text-gray-800">
              {props.title}
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              Home
            </a>

            <a
              href="#"
              className="text-gray-600 hover:text-gray-900 text-sm font-medium"
            >
              {props.about}
            </a>
          </div>

          {/* Right section - Search */}
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
            />
            <button className="border border-gray-400 px-3 py-1 rounded text-sm hover:bg-gray-100">
              Search
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Navbar.propTypes = {
//     title: PropTypes.string.isRequired,
//     about: PropTypes.string
// }
// Navbar.defaultProps ={
//     title: "set title here",
//     about: "set about here"
// }