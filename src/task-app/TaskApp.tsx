import AddTask from './AddTask.tsx';
import TaskList from './TaskList.tsx';
import { TasksProvider } from './TasksContext.tsx';

export default function TaskApp() {
  return (
    <TasksProvider>
      <h1>Day off in Kyoto</h1>
      <AddTask />
      <TaskList />
    </TasksProvider>
  );
}
