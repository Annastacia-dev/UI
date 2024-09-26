// import { FaPaperclip, FaCalendar } from 'react-icons/fa';
// import { MdOutlineStickyNote2 } from "react-icons/md";
// import { MdLowPriority } from "react-icons/md";

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

const daysDifference = (dateStr) => {
  const date = new Date(dateStr);
  const today = new Date();
  const timeDifference = date.getTime() - today.getTime();
  return Math.ceil(timeDifference / (1000 * 3600 * 24));
};

const priority = (time) => {
  switch (true) {
    case time < 7:
      return 'high';
    case time >= 7 && time < 14:
      return 'medium';
    default:
      return 'low';
  }
};

const Dashboard = () => {
  return (
    <div className="grid grid-cols-7 gap-2 mt-5 text-sm">
      <div className="col-span-5">
        <div className="flex flex-col gap-2">
          <div className="grid grid-cols-3 gap-2">
            {currentProjects.map((project) => (
              <div
                key={project.title}
                className="border border-slate-100 bg-slate-100/80 rounded p-3 flex flex-col gap-4 relative min-h-40"
              >
                {/* <h5 className="font-semibold">{project.title}</h5>

                <div className='flex items-center gap-2 text-[9px]'>
                  <p className={`flex items-center gap-2 py-1 px-3 font-medium text-center  border rounded capitalize ${daysDifference(project.deadline) < 7 ? 'bg-red-600 text-white': 'border-slate-700'}`}>
                    <MdLowPriority />
                    { priority(daysDifference(project.deadline))}
                  </p>

                  <p className={`flex items-center gap-2 py-1 px-3 font-medium text-center border rounded ${daysDifference(project.deadline) < 7 ? 'border-red-600 text-red-600': 'border-slate-700'}`}>
                    <FaCalendar />
                    { project.deadline}
                  </p>
                </div>

                <div className="w-full bg-slate-200 rounded-full h-1 mt-3">
                  <div
                    className={`bg-slate-800 h-1 rounded-full transition-all duration-300`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>

                <div className="flex gap-2 absolute right-2 bottom-3">
                  <FaPaperclip className="cursor-pointer text-md" title="Attachments" />
                  <MdOutlineStickyNote2 className="cursor-pointer text-md" title="Notes" />
                </div> */}
              </div>
            ))}
          </div>
          <div className="min-h-[23rem] bg-slate-100 rounded"></div>
        </div>
      </div>
      <div className="col-span-2 flex flex-col gap-2">
        <div className="min-h-60 bg-slate-100 rounded"></div>
        <div className="min-h-[18rem] bg-slate-100 rounded"></div>
      </div>
    </div>
  );
};

export default Dashboard;
