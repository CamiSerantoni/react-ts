import CourseGoal from "./components/CourseGoal.tsx";
import GoalsImg from "./assets/goals.jpg";
import Header from "./components/Header.tsx";
export default function App() {
  return (
    <main>
      <Header image={{src: GoalsImg, alt: "Goals" }}>
        <h1>Course Goals</h1>
      </Header>
      <CourseGoal title="Learn React + TS">Learn it from the ground up</CourseGoal>
    </main>
  );
}
