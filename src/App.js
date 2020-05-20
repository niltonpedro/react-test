import React, { useEffect, useState } from "react";
import api from './services/api';

import "./styles.css";



function App() {  
  const [ repositories, setNewRepositorie] = useState([]);

  useEffect(() => {
    api.get('/repositories').then(response => {
      setNewRepositorie(response.data)
    })
  }, [])

  async function handleAddRepository() {
    const response = await api.post('/repositories', {
      title: `Repo actual ${Date.now()}`,
	    url: "https://github.com/niltonpedro/git-finder",
	    techs: ["Reactjs", "express", "github"]
    })

    const repo = response.data;

    setNewRepositorie([...repositories, repo])
  }

  async function handleRemoveRepository(id) {

    await api.delete(`/repositories/${id}`)

    setNewRepositorie(repositories.filter( repo => repo.id !== id))

  }

  return (
    <div>
      <ul data-testid="repository-list">
        { repositories.map( repository => (
            <li key={repository.id}>
              { repository.title }
              <button onClick={() => handleRemoveRepository(repository.id)}>
                Remover
              </button>
            </li>
        ))}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
