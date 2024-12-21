import TaskCard from './TaskCard';

function App() {
  const tasks = [
    {
      id: 1,
      status: 'pending',
      dueDate: '2024-12-31',
      assigneeName: 'John Doe',
    },
    {
      id: 2,
      status: 'done',
      completedAtDate: '2024-12-20',
      assigneeName: 'Jane Smith',
    },
    // Add more tasks as needed
  ];

  return (
    <div>
      <h1>Task Management</h1>
      <div className="pending-tasks">
        {tasks.filter(task => task.status === 'pending').map(task => (
          <TaskCard
            key={task.id}
            dueDate={task.dueDate}
            assigneeName={task.assigneeName}
            status={task.status}
          />
        ))}
      </div>
      <div className="done-tasks">
        {tasks.filter(task => task.status === 'done').map(task => (
          <TaskCard
            key={task.id}
            completedAtDate={task.completedAtDate}
            assigneeName={task.assigneeName}
            status={task.status}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
