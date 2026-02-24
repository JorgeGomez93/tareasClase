import { useState, useEffect } from 'react';
import '../styles/ranking.css';

export default function RankingPage() {
  const [ranking, setRanking] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRanking = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('http://localhost:8000/ranking');
        if (!response.ok) {
          throw new Error('Failed to fetch ranking');
        }
        const data = await response.json();
        setRanking(data);
      } catch (error) {
        console.error("Error fetching ranking:", error);
        // Optionally set an error state to show in the UI
      } finally {
        setIsLoading(false);
      }
    };

    fetchRanking();
  }, []); // Empty dependency array means this runs once on mount

  return (
    <main className="ranking-section">
      <section>
        <article>
          <h1 className="ranking-tittle">Ranking de Jugadores</h1>
          <table className="ranking-table">
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>Nombre</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="4">Cargando...</td>
                </tr>
              ) : (
                ranking.map((player) => (
                  <tr key={player.posicion}>
                    <td>{player.posicion}</td>
                    <td>
                      <img 
                        src={player.avatar || '/assets/icon/rana.webp'} 
                        alt={`Avatar de ${player.username}`}
                        style={{ width: '50px', height: '50px', borderRadius: '50%' }}
                      />
                    </td>
                    <td>{player.username}</td>
                    <td>{player.puntuacion_total}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </article>
      </section>
    </main>
  );
}
