import CourseGoal from "./components/CourseGoal.tsx";
import GoalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList.tsx";

export type CourseGoal = {
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


  function handleDeleteGoal(id: number) {
    setGoals(prevGoals => prevGoals.filter((goal => goal.id !== id)) )
  }




  return (
    <main>
      <Header image={{ src: GoalsImg, alt: "Goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <button onClick={handleAddGoal}>Add Goal </button>
     <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>

    </main>
  );
}
