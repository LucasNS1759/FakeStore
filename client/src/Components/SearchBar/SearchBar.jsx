
import Filter from "../Filter/Filter";

const SearchBar = () => {
  return (
    <div className="flex justify-center   my-2">
      <div>
        <div>
          <input
            className="input input-bordered join-item mx-2"
            placeholder="Search"
          />
        </div>
      </div>
      <Filter />

      <div className="indicator">
        <button className="btn join-item">Search</button>
      </div>
    </div>
  );
};

export default SearchBar;
