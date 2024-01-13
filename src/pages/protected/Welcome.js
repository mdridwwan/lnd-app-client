import { Link } from "react-router-dom";
import TemplatePointers from "../../features/user/components/TemplatePointers";

function InternalPage() {
  return (
    <div className="hero h-4/5 bg-base-200">
      <div className="hero-content">
        <div className="max-w-md">
          <TemplatePointers />
          <Link to="/app/l&d-dashbord">
            <button className="btn bg-base-100 btn-outline">
              Get Started (L&D){" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default InternalPage;
