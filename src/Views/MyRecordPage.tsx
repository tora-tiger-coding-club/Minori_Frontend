import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios, { delayResponse: 200 });
mock.onGet('/api/record/user_id').reply(200, [
  {
    record_id: 1,
    user_id: 1,
    anime_id: 1,
    status: '시청 완료',
    current_episode: 11,
    started_at: '2023-01-01',
    created_at: '2023-01-01',
    updated_at: '2023-01-02',
    deleted_at: null,
    rank: 1,
    title: '86',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 11,
    totalEpisodes: 11,
    imageUrl: '/img/1.webp',
  },
  {
    record_id: 2,
    user_id: 1,
    anime_id: 2,
    status: '시청 중',
    current_episode: 6,
    started_at: '2023-02-01',
    created_at: '2023-02-01',
    updated_at: '2023-02-05',
    deleted_at: null,
    rank: 2,
    title: '91 Days',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 6,
    totalEpisodes: 12,
    imageUrl: '/img/1.webp',
  },
  {
    record_id: 3,
    user_id: 1,
    anime_id: 3,
    status: '시청 완료',
    current_episode: 25,
    started_at: '2023-03-01',
    created_at: '2023-03-01',
    updated_at: '2023-03-25',
    deleted_at: null,
    rank: 3,
    title: 'Amagami SS',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 25,
    totalEpisodes: 25,
    imageUrl: '/img/1.webp',
  },
  {
    record_id: 4,
    user_id: 1,
    anime_id: 4,
    status: '시청 중',
    current_episode: 1,
    started_at: '2023-04-01',
    created_at: '2023-04-01',
    updated_at: '2023-04-01',
    deleted_at: null,
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
    record_id: 5,
    user_id: 1,
    anime_id: 5,
    status: '시청 완료',
    current_episode: 24,
    started_at: '2023-05-01',
    created_at: '2023-05-01',
    updated_at: '2023-05-24',
    deleted_at: null,
    rank: 5,
    title: 'Blue Lock',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 24,
    totalEpisodes: 24,
    imageUrl: '/img/1.webp',
  },
  {
    record_id: 6,
    user_id: 1,
    anime_id: 6,
    status: '시청 중',
    current_episode: 7,
    started_at: '2023-06-01',
    created_at: '2023-06-01',
    updated_at: '2023-06-07',
    deleted_at: null,
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
    record_id: 7,
    user_id: 1,
    anime_id: 7,
    status: '시청 완료',
    current_episode: 12,
    started_at: '2023-07-01',
    created_at: '2023-07-01',
    updated_at: '2023-07-12',
    deleted_at: null,
    rank: 7,
    title: 'Gamers!',
    notes: 'Add notes',
    editLink: 'Edit + More',
    type: 'TV',
    episodesWatched: 12,
    totalEpisodes: 12,
    imageUrl: '/img/1.webp',
  }
]);

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

const AnimeList: React.FC = () => {
  const [animeList, setAnimeList] = useState<Anime[]>([]);
  const userId = 'user_id'; 

  useEffect(() => {
    axios.get(`/api/record/${userId}`)
      .then(response => {
        setAnimeList(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, [userId]);

  const handleIncrement = (index: number) => {
    const updatedList = [...animeList];
    if (updatedList[index].episodesWatched < updatedList[index].totalEpisodes) {
      updatedList[index].episodesWatched += 1;
    }
    setAnimeList(updatedList);
  };

  return (
    <div className='container mt-4'>
      <table className='table table-striped'>
        <tbody>
          {animeList.map((anime, index) => (
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
                <button
                  onClick={() => handleIncrement(index)}
                  className='btn btn-outline-primary btn-sm ms-2'
                >
                  +
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimeList;
