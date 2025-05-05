import "./App.css";
import { AllTask } from "./components/AllTask";
import { ChangeTitle } from "./components/ChangeTitle";
import { Counter } from "./components/Counter";
import { ListOfQuestions } from "./components/FAQ/ListOfQuestions";
import { FilterMap } from "./components/FilterMap";
import { ClickingMovies } from "./components/netflix-app/ClickingMovies";
import { Movie } from "./components/netflix-app/Movie";
import { OneMovieSlider } from "./components/pokrocilySlider/OneMovieSlider";
import { Slider } from "./components/slider/Slider";

function App() {
  return (
    <>
      {/* <ListOfQuestions /> */}
      {/* <ClickingMovies /> */}
      {/* <Movie /> */}
      {/* <Counter /> */}
      {/* <AllTask /> */}
      {/* <FilterMap /> */}
      {/* <ChangeTitle /> */}
      {/* <Slider /> */}
      <OneMovieSlider className="slider" />
    </>
  );
}

export default App;
