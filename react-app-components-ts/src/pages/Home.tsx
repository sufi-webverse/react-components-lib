import Posts from "./business-components/Posts";

const Home = () => {
  return (
    <>
      <div className="text-center">
        <h3>3x2 grid:</h3>
        <div className="grid grid-rows-1 text-white">
          <div className="bg-slate-800">1</div>
          <div className="bg-teal-800">2</div>
          <div className="bg-orange-600">3</div>
          <div className="bg-slate-800">4</div>
          <div className="bg-teal-600">5</div>
        </div>
      </div>
      <br />
      <div className="text-center">
        <h3>2 columns grid:</h3>
        <div className="grid grid-cols-2 text-white">
          <div className="bg-purple-800">1</div>
          <div className="bg-pink-800">2</div>
          <div className="bg-pink-800">3</div>
          <div className="bg-purple-800">4</div>
        </div>
      </div>

      <div className="text-center">
        <h3>3x2 grid, flow densely by row:</h3>
        <div className="grid grid-flow-dense grid-cols-3 grid-rows-3 gap-2 text-white">
          <div className="col-span-2 bg-slate-800">1</div>
          <div className="col-span-2 bg-teal-800">2</div>
          <div className="bg-orange-600">3</div>
          <div className="bg-slate-800">4</div>
          <div className="bg-teal-600">5</div>
        </div>
      </div>

      <Posts />
    </>
  );
};

export default Home;
