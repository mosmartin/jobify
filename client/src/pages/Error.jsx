import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

export const Error = () => {
  return <Wrapper className="full-page">
      <div>
        <img src={img} alt="404" className="img" />

        <h3>🤷‍♂️ Page Not Found!</h3>

        <p>
            The page you are looking for does not exist or has been moved.
        </p>

        Link to <Link to="/">Home</Link>
      </div>
  </Wrapper>;
};
