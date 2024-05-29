import Partido from '../components/Partido';
import '../partidos.css'; // Import the CSS file

const Partidos = () => {
    const matches = [
      { team1: 'BVB', team2: 'PSG', result: '2:0' },
      { team1: 'BVB', team2: 'RMA', date: '01 jun.' },
      { team1: 'BAY', team2: 'RMA', result: '3:4' }
    ];
  
    return (
      <div className="flex flex-col items-center justify-center">
        {matches.map((match, index) => (
          <div key={index} className="flex items-center justify-between w-full max-w-md px-4 py-2 mb-4 bg-white rounded-lg shadow-md">
            <div className="flex items-center">
              <img src={`/${match.team1}.png`} alt={match.team1} className="w-8 h-8 mr-2" />
              <span className="text-lg font-bold">{match.team1}</span>
            </div>
            <div className="flex flex-col items-center">
              {match.result && <span className="text-2xl font-bold">{match.result}</span>}
              {match.date && <span className="text-sm text-gray-500">{match.date}</span>}
            </div>
            <div className="flex items-center">
              <span className="text-lg font-bold">{match.team2}</span>
              <img src={`/${match.team2}.png`} alt={match.team2} className="w-8 h-8 ml-2" />
            </div>
          </div>
        ))}
        <div className="flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-full shadow-lg">
          <img src="/trofeo.png" alt="Trofeo" className="w-10 h-10" />
        </div>
      </div>
    );
  };
  
export default Partidos;