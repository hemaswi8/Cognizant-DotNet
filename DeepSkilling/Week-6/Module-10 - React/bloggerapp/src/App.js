import "./App.css";
import Books from "./Books";
import Blogs from "./Blogs";
import Courses from "./Courses";

function App() {
  return (
    <div className="container">
      <div className="box">
        <Courses />
      </div>

      <div className="box">
        <Books />
      </div>

      <div className="box">
        <Blogs />
      </div>
    </div>
  );
}

export default App;