import { Logo } from '../components';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';


export const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>

      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            natus similique nisi repellat ex ullam corporis, ipsum accusantium
            dicta dolorum soluta animi. Quidem nostrum impedit, corrupti sed
            tempore illum ipsa! Incidunt ab reprehenderit laudantium, explicabo,
            omnis accusantium ipsum ipsa assumenda quo cum, ducimus maiores
            quibusdam odit. Quidem et modi impedit.
          </p>

          <button className="btn btn-hero">login / register</button>
        </div>

        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};
