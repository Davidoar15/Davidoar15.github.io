import { NavLink } from "react-router-dom";

function Landing() {

    return (
      <div>
          <h1>WELCOME</h1>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, exercitationem labore iusto molestiae omnis, perspiciatis minima sunt inventore reprehenderit dolores asperiores? Voluptas excepturi soluta quidem dolorem et cupiditate error eaque.
            </p>
          </div>
          <NavLink to={"/survey"}>
            <button>Start</button>
          </NavLink>
      </div>
    );
  }
  
export default Landing;