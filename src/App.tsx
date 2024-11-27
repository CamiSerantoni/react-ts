import CourseGoal from "./components/CourseGoal.tsx";
import GoalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";

type CourseGoal = {
  title: string;
  descriptions: string; 
  id: number;
}

export default function App() {

const [goals, setGoals] = useState<CourseGoal[]>([]);
function handleAddGoal(){

}

  return (
    <main>
      <Header image={{src: GoalsImg, alt: "Goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal </button>
      <CourseGoal title="Learn React + TS">Learn it from the ground up</CourseGoal>
    </main>
  );
}
