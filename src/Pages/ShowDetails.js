import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
const ShowDetails = () => {
  const { state } = useLocation();
  const show = state && state.show;

  if (!show) {
    return <div className="text-red-500">Show not found</div>;
  }

  return (

    <div className="bg-gray-900 p-6 rounded-md shadow-md items-center">
<Link to={`/Movie`}><button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-8' >
  Back
</button></Link>
      <h2 className="text-2xl font-bold mb-4">{show.name}</h2>
      <p className="text-gray-300 mb-2">Genres: {show.genres.join(', ')}</p>
      <p className="text-gray-300 mb-2">Type: {show.type}</p>
      <p className="text-gray-300 mb-2">Status: {show.status}</p>
      <p className="text-gray-300 mb-2">Language: {show.language}</p>
      <p className="text-gray-300 mb-2">
        Premiere Date: {show.premiered} - End Date: {show.ended || 'Ongoing'}
      </p>
      <p className="text-gray-300 mb-2">Summary: {show.summary}</p>

      
    </div>
  );
};

export default ShowDetails;
