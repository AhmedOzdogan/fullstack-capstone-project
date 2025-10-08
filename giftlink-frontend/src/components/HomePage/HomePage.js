import "./Home.css";

function HomePage() {
  return (
    <div className="container my-5">
      <div className="text-center">
        <h1 className="display-4 mb-3">GiftLink</h1>

        <h2 className="mb-4">Share Gifts and Joy!</h2>

        <p className="lead mb-4">
          "The manner of giving is worth more than the gift." - Pierre Corneille
        </p>

        <a href="/app" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </div>
  );
}

export default HomePage;
