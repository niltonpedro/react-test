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
    // TODO
  }

  async function handleRemoveRepository(id) {
    // TODO
  }

  return (
    <div>
      <ul data-testid="repository-list">
        { repositories.map( repository => (
            <li>
              { repository.title }
              <button onClick={() => handleRemoveRepository(1)}>
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

{/* <li>
    Repositório 1
    
 </li> */}