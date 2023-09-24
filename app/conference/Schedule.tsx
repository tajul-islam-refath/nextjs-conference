interface Schedule {
  day: string;
  intervals: [];
}

interface Props {
  schedules: Schedule[];
}

const Schedules: React.FC<Props> = ({ schedules }) => {
  console.log(schedules);
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  return (
    <>
      {schedules &&
        schedules.map((sched: Schedule, i) => (
          <Schedule key={i} schedule={sched} />
        ))}
    </>
  );
};

const Schedule: React.FC<{ schedule: Schedule }> = ({ schedule }) => {
  const options: any = { year: "numeric", month: "long", day: "numeric" };
  const allSessions = schedule.intervals.flatMap(
    (interval: any) => interval.sessions
  );

  return (
    <>
      {schedule && (
        <div className="schedule-card">
          <div className="schedule-card__top">
            <h3 className="date">
              {new Date(schedule.day).toLocaleDateString("en-US", options)}
            </h3>
            <h5 className="day">
              {new Date(schedule.day).toLocaleDateString("en-US", {
                weekday: "long",
              })}
            </h5>
          </div>
          <div className="schedule-card__">
            <ul>
              {allSessions &&
                allSessions.map((session) => (
                  <li>
                    duration: {session.begin}-{session.end}
                    <br />
                    {session.type}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Schedules;
