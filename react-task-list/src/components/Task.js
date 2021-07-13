const tasks = [
  { id: 1, text: "hello" },
  { id: 2, text: "you" },
  { id: 4, text: "dummy," },
  { id: 5, text: "there" },
  { id: 6, text: "we" },
  { id: 7, text: "go" },
];

const Task = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3 key={task.id}>{task.text}</h3>
      ))}
    </>
  );
};

export default Task;
