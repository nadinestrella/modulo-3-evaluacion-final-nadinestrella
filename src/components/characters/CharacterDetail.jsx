import React from 'react';
import { useParams } from 'react-router-dom';

function CharacterDetail({ characters }) {
  const { id } = useParams();
  const findElement = characters.find((item) => item.id === id);

  return (
    <div>
      <img src={findElement.image} alt="" />
      <h3>{findElement.name}</h3>
      <p>{findElement.house}</p>
      <p>{findElement.alive}</p>
      <p>{findElement.gender}</p>
      <p>{findElement.species}</p>
      <ul>
        {findElement.alternate_names.map((nam, i) => (
          <li key={i}> {nam}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterDetail;
