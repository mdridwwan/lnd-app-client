import BsLogo from "../../img/Bs_Logo.png";
import Login from "../../img/Login.jpg";

function LandingIntro() {
  return (
    <div className="hero min-h-full rounded-l-xl bg-base-200">
      <div className="hero-content py-12">
        <div className="max-w-md">
          <div>
            <img className="w-full" alt="BS-Logo" src={BsLogo}></img>
          </div>
          <div className="text-center mt-12">
            <img
              src={Login}
              alt="Dashwind Admin Template"
              className="w-1/2 inline-block"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingIntro;
