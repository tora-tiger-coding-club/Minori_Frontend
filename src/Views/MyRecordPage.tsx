import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface Anime {
  rank: number;
  title: string;
  notes: string;
  editLink: string;
  type: string;
  episodesWatched: number;
  totalEpisodes: number;
  imageUrl: string;
}

const animeList: Anime[] = [
  {
    rank: 1,
    title: '86',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 1,
    totalEpisodes: 11,
    imageUrl: '/img/1.webp',
  },
  {
    rank: 2,
    title: '91 Days',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 1,
    totalEpisodes: 12,
    imageUrl: '/img/1.webp',
  },
  {
    rank: 3,
    title: 'Amagami SS',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 3,
    totalEpisodes: 25,
    imageUrl: '/img/1.webp',
  },
  {
    rank: 4,
    title: 'Blend S',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 1,
    totalEpisodes: 12,
    imageUrl: '/img/1.webp',
  },
  {
    rank: 5,
    title: 'Blue Lock',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 9,
    totalEpisodes: 24,
    imageUrl: '/img/1.webp',
  },
  {
    rank: 6,
    title: 'Blue Period',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 7,
    totalEpisodes: 12,
    imageUrl: '/img/1.webp',
  },
  {
    rank: 7,
    title: 'Gamers!',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 1,
    totalEpisodes: 12,
    imageUrl: '/img/1.webp',
  },
];

const AnimeList: React.FC = () => {
  return (
    <div className='container mt-4'>
      <table className='table table-striped'>
        <tbody>
          {animeList.map((anime) => (
            <tr key={anime.rank}>
              <td className='align-middle'>{anime.rank}</td>
              <td className='align-middle' colSpan={3}>
                <img
                  src={anime.imageUrl}
                  alt={anime.title}
                  style={{ width: '50px', height: 'auto', marginRight: '10px' }}
                />
                <div>{anime.title}</div>
                <div className='text-muted'>{anime.notes}</div>
              </td>
              <td className='align-middle text-end text-primary'>{anime.editLink}</td>
              <td className='align-middle'>{anime.type}</td>
              <td className='align-middle'>
                {anime.episodesWatched} / {anime.totalEpisodes}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeList;
