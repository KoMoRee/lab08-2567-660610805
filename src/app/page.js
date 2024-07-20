import Header from "./components/Header";
import TaskInput from "./components/TaskInput";
import Task from "./components/Task";
import Footer from "./components/Footer";

export default function Home() {

  const tasks = [
    {id: 1, title: "Read a book", isDone: true},
    {id: 2, title: "Take a shower", isDone: false},
    {id: 3, title: "Sleep", isDone: false},
  ];


  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">

        {/* task input */}
        <TaskInput />

        {/* task 1*/}
        <Task prop={tasks[0]} />
        {/* task 2*/}
        <Task prop={tasks[1]} />
        {/* task 3*/}
        <Task prop={tasks[2]} />
      </div>

      {/* //footer section */}
      <Footer fullName="Atip Poonkatevit" studentId="660610805" year="2024" />
    </div>
  );
}
