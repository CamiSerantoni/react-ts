import CourseGoal from "./components/CourseGoal.tsx";
import GoalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";

type CourseGoal = {
  title: string;
  description: string;
  id: number;
};

export default function App() {
  const [goals, setGoals] = useState<CourseGoal[]>([]);
  function handleAddGoal() {
    setGoals((prevGoals) => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: "learn React + TS",
        description: "Learn it from the ground up",
      };
      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: GoalsImg, alt: "Goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal </button>
      <ul>
        {goals.map((goal) => (
          <li>
            <CourseGoal key={goal.id} title={goal.title}>
              {" "}
              <p>learn it from the ground up</p>
            </CourseGoal>
          </li>
        ))}
      </ul>

      <CourseGoal title="Learn React + TS">
        Learn it from the ground up
      </CourseGoal>
    </main>
  );
}
