import LogoEquipoA1 from "../assets/LogoEquipoA1.webp";

const TeamRow = ({ team, index }) => {
  return (
    <tr className={`text-white border-b border-${index % 2 === 0 ? 'gray-200' : 'gray-500'}`}>
      <td className="px-4 py-2 flex items-center">
        {index < 2 ? (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 mr-2">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
        ) : index < 4 ? (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-400 mr-2">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
        ) : index < 6 ? (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-orange-700 mr-2">
            <span className="text-white font-bold">{index + 1}</span>
          </div>
        ) : (
          <div className="flex items-center justify-center w-6 h-6 rounded-full bg-crema mr-2">
            <span className="text-black font-bold">{index + 1}</span>
          </div>
        )}
      </td>
      <td> {team.logo && <img src={team.logo} className="h-8 mr-2" />}</td>
      <td className="px-2 py-1 text-center">{team.name}</td>
      <td className="px-2 py-1 font-bold text-center">{team.points}</td>
      <td className="px-2 py-1 text-center">{team.played}</td>
      <td className="px-2 py-1 text-center">{team.goalDifference}</td>
    </tr>
  );
};

const GroupTable = ({ groupName, teams }) => {
  const sortedTeams = teams.sort((a, b) => b.points - a.points);
  return (
    <div className="flex flex-col items-center mb-6">
      <h2 className="text-white text-lg mb-2">Grupo {groupName}</h2>
      <table className="w-full">
        <thead>
          <tr className="text-white">
            <th className="px-2 py-1">#</th>
            <th className='px-2 py-1'></th>
            <th className="px-2 py-1">Equipo</th>
            <th className="px-2 py-1">PTS</th>
            <th className="px-2 py-1">PJ</th>
            <th className="px-2 py-1">DIF</th>
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
      groupName: 'A',
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
      groupName: 'B',
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
      <h1 className="flex-1 font-poppins font-semibold text-[32px] text-white leading-[35px] xl:text-[50px] xl:leading-[75px]">
        <span className="text-gradient">Fase de grupos</span>
      </h1>
      {groups.map((group, index) => (
        <GroupTable key={index} groupName={group.groupName} teams={group.teams} />
      ))}
      {/* <div className="absolute z-[1] w-[40%] h-[20%] rounded-full orange__gradient bottom-40" /> */}
    </div>
  );
};

export default Tournament;