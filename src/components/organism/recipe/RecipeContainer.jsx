import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import RecipeDetail from "./RecipeDetail";
import RecipeListing from "./RecipeListing";

export default function RecipeContainer() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RecipeListing />}></Route>
          <Route path="/recipe/:label" element={<RecipeDetail />}></Route>
        </Routes>
      </Router>
    </>
  );
}
