import { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { TbBrandZoom } from 'react-icons/tb';
import { SiGooglemeet } from 'react-icons/si';
import { BiLogoMicrosoftTeams } from 'react-icons/bi';
import { FaLocationDot } from 'react-icons/fa6';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [hoveredDay, setHoveredDay] = useState(null);
  const [modalMeeting, setModalMeeting] = useState([]);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const meetings = [
    {
      datetime: new Date(2024, 8, 11, 10, 0),
      title: 'Denri Meeting',
      type: 'online',
      provider: 'google',
      link: 'https://zoom.us/j/123456789',
    },
    {
      datetime: new Date(2024, 8, 30, 10, 0),
      title: 'Team Meeting',
      type: 'online',
      provider: 'Zoom',
      link: 'https://zoom.us/j/123456789',
    },
    {
      datetime: new Date(2024, 8, 30, 15, 0),
      title: 'Project Update',
      type: 'on-site',
      location: 'mint & salt, CBD',
    },
    // Add more meetings as needed
  ];

  const meetingLogo = (provider) => {
    switch (provider.toLowerCase()) {
      case 'zoom':
        return <TbBrandZoom />;
      case 'google':
        return <SiGooglemeet />;
      case 'teams':
        return <BiLogoMicrosoftTeams />;
      default:
        break;
    }
  };

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const handlePrevMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1, 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      (prevDate) => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1, 1)
    );
  };

  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();
  const daysInMonth = getDaysInMonth(
    currentDate.getFullYear(),
    currentDate.getMonth()
  );
  const today = new Date();

  const daysArray = [...Array(daysInMonth).keys()].map((day) => day + 1);
  const paddedDaysArray = Array(firstDayOfMonth).fill(null).concat(daysArray);

  const handleMouseEnter = (day) => {
    const date = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      day
    );
    const dayMeetings = meetings.filter(
      (meeting) => meeting.datetime.toDateString() === date.toDateString()
    );
    setModalMeeting(dayMeetings);
    setHoveredDay(day);
  };

  const handleMouseLeave = () => {
    setModalMeeting([]);
    setHoveredDay(null);
  };

  return (
    <div className="h-60 bg-slate-50 border border-gray-100 rounded shadow-md px-4 py-2 text-xs relative">
      <div className="flex items-center justify-between">
        <button
          onClick={handlePrevMonth}
          className="text-primary hover:underline"
        >
          <FaArrowLeft />
        </button>
        <h2 className="font-semibold">{`${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`}</h2>
        <button
          onClick={handleNextMonth}
          className="text-primary hover:underline"
        >
          <FaArrowRight />
        </button>
      </div>

      <table className="w-full border-collapse mt-3 rounded">
        <thead>
          <tr>
            {daysOfWeek.map((day) => (
              <th
                key={day}
                className="p-2 font-semibold border-b border-gray-300 rounded"
              >
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paddedDaysArray
            .reduce((acc, day, index) => {
              if (index % 7 === 0) acc.push([]);
              acc[acc.length - 1].push(day);
              return acc;
            }, [])
            .map((week, weekIndex) => (
              <tr key={weekIndex}>
                {week.map((day, dayIndex) => {
                  const date = new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                    day
                  );
                  const isToday = date.toDateString() === today.toDateString();
                  const isOutsideMonth =
                    day === null || day < 1 || day > daysInMonth;
                  const dayMeetings = meetings.filter(
                    (meeting) =>
                      meeting.datetime.toDateString() === date.toDateString()
                  );

                  return isOutsideMonth ? (
                    <td key={dayIndex} className="text-center p-2 border"></td>
                  ) : (
                    <td
                      key={dayIndex}
                      className={`relative text-center p-2 border cursor-pointer ${dayMeetings.length > 0 ? 'bg-violet-500/15' : isToday ? 'bg-black text-white hover:bg-black' : ''}`}
                      onMouseEnter={() => handleMouseEnter(day)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <button>{day}</button>

                      {hoveredDay === day && modalMeeting.length > 0 && (
                        <div className="absolute bottom-0 right-0 z-10 bg-slate-50 border rounded shadow-md p-4 min-w-72 min-h-44 capitalize">
                          <h5 className="font-semibold">
                            {date.toDateString()}
                          </h5>
                          <hr className="my-2" />
                          <div className="flex flex-col items-start gap-4 mt-2">
                            {modalMeeting.map((meeting, index) => (
                              <div
                                key={index}
                                className="flex flex-col gap-2 items-start border-l-4 border-slate-400 px-4"
                              >
                                <p className="text-gray-600">
                                  {meeting.datetime.toLocaleTimeString([], {
                                    hour: '2-digit',
                                    minute: '2-digit',
                                  })}
                                </p>
                                <h3 className="font-semibold">
                                  {meeting.title}
                                </h3>

                                <p>
                                  {meeting.type === 'online' ? (
                                    <p className="flex items-center gap-2">
                                      {meetingLogo(meeting.provider)}{' '}
                                      <a
                                        href={meeting.link}
                                        className="text-blue-500"
                                      >
                                        Join Meeting
                                      </a>
                                    </p>
                                  ) : (
                                    <div className="flex items-center gap-2">
                                      <FaLocationDot /> {meeting.location}
                                    </div>
                                  )}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </td>
                  );
                })}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
