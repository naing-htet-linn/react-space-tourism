import { Link } from 'react-router-dom';
import './home.css';
const Home = () => {
  return (
    <section id="home">
      <div className="first d-flex">
        <h5 className="text-blue">so, you want to travel to</h5>
        <h1 className="text-white">space</h1>
        <p className="text-blue">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <div className="second">
        <Link to="/destination">explore</Link>
      </div>
    </section>
  );
};
export default Home;
