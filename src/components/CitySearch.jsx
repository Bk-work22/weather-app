const CityInput = ({ city, setCity }) => (
  <>
    <div className="city-search">
      <h5 className=" text-base mb-2">Enter City Below</h5>
      <input
        required
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
        className="py-3 md:w-[70%] w-10/12 px-4 input bg-transparent rounded-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-10 outline-none border border-white border-opacity-65 text-white"
      />
    </div>
  </>
);

export default CityInput;
