import ToDoList from '../components/dashboard/ToDoList';
import Calendar from '../components/dashboard/Calendar';

const currentProjects = [
  {
    title: 'Denri Ad',
    progress: 50,
    description: 'Advertising campaign for Denri products.',
    priority: 'High',
    deadline: 'Sep 30, 2024',
  },
  {
    title: 'Diani Vlog',
    progress: 35,
    description: 'Travel vlog series in Diani Beach.',
    priority: 'Medium',
    deadline: 'Oct 5, 2024',
  },
  {
    title: 'Diani Vlog',
    progress: 35,
    description: 'Travel vlog series in Diani Beach.',
    priority: 'Medium',
    deadline: 'Oct 5, 2024',
  },
];

const Dashboard = () => {
  return (
    <div className="grid grid-cols-7 gap-2 mt-3 text-sm">
      <div className="col-span-5">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            {currentProjects.map((project) => (
              <div
                key={project.title}
                className="border border-slate-100 bg-slate-100/80 rounded p-3 flex flex-col gap-4 relative min-h-40"
              ></div>
            ))}
          </div>
          <div className="min-h-[23rem] bg-slate-100 rounded"></div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <ToDoList />
        <Calendar />
      </div>
    </div>
  );
};

export default Dashboard;
