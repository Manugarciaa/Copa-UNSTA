import LogoEquipoA1 from "../assets/LogoEquipoA1.webp";

const TeamRow = ({ team, index }) => {
  return (
    <tr className={`text-white border-b-2 border-gray-300`} style={{ borderBottomColor: 'rgba(255, 255, 255, 0.1)' }}>
      <td className="px-2 py-1 sm:px-6 sm:py-3 flex items-center">
        {index < 2 ? (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-yellow-700 to-yellow-200 shadow-md mr-3">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
        ) : index < 4 ? (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-gray-400 to-gray-00 shadow-md mr-3">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
        ) : index < 6 ? (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-orange-00 shadow-md mr-3">
            <span className="text-white font-bold text-lg">{index + 1}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-white to-yellow-100 shadow-md mr-3">
            <span className="text-gray-600 font-bold text-lg">{index + 1}</span>
          </div>
        )}
      </td>
      <td className="px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">
        {team.logo && <img src={team.logo} className="h-12 sm:h-12 mr-3 sm:mr-3" />}
      </td>
      <td className="px-2 py-1 sm:px-3 sm:py-2 text-center text-3xl">{team.name}</td>
      <td className="px-2 py-1 sm:px-3 sm:py-2 font-bold text-center text-xl">{team.points}</td>
      <td className="px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.played}</td>
      <td className="px-2 py-1 sm:px-3 sm:py-2 text-center text-xl">{team.goalDifference}</td>
    </tr>
  );
};

const GroupTable = ({ groupName, teams }) => {
  const sortedTeams = teams.sort((a, b) => b.points - a.points);
  return (
    <div className="flex flex-col items-center mb-10 sm:mb-16">
      <div className="w-full flex justify-center mb-5">
        <b className="text-white text-4xl sm:text-4xl">{groupName}</b>
      </div>
      <table className="w-full">
        <thead>
          <tr className="text-white">
            <th className="px-2 py-1 text-xl">#</th>
            <th className="px-2 py-1 text-xl">Escudo</th>
            <th className="px-2 py-1 text-xl">Equipo</th>
            <th className="px-2 py-1 text-xl">PTS</th>
            <th className="px-2 py-1 text-xl">PJ</th>
            <th className="px-2 py-1 text-xl">DIF</th>
          </tr>
        </thead>
        <tbody>
          {sortedTeams.map((team, index) => (
            <TeamRow key={index} team={team} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const Tournament = () => {
  const groups = [
    {
      groupName: 'Grupo A',
      teams: [
        { name: 'Equipo A1', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo A2', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo A3', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo A4', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo A5', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo A6', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo A7', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo A8', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
      ],
    },
    {
      groupName: 'Grupo B',
      teams: [
        { name: 'Equipo B1', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo B2', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo B3', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo B4', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo B5', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo B6', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo B7', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
        { name: 'Equipo B8', points: 0, played: 0, goalDifference: 0, logo: LogoEquipoA1 },
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center text-white">
      <h1 className="flex-1 font-poppins font-semibold text-[32px] text-white leading-[35px] xl:text-[50px] xl:leading-[75px] mb-5">
        <span className="text-gradient">Fase de grupos</span>
      </h1>
      {groups.map((group, index) => (
        <GroupTable key={index} groupName={group.groupName} teams={group.teams} />
      ))}
    </div>
  );
};

export default Tournament;