import Navbar_Item from "./Navbar_Item";

function Navbar() {
  return (
    <div className="sidebar w-60 bg-gray-800 text-white p-4 fixed top-0 left-0 bottom-0">
      <Navbar_Item newPath="/" header="Search for a city" />
      <Navbar_Item newPath="/my_cities" header="My cities" />
    </div>
  );
}

export default Navbar;
