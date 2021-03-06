const pool = require('./connection.js');

const fetchDogs = () => {
  const queryStr = `SELECT dog.name, breed.breed
                    FROM (SELECT name, breed_id FROM dogs) AS dog
                    JOIN (SELECT breed, breed_id FROM breeds) AS breed
                    ON dog.breed_id = breed.breed_id`;
  return pool.query(queryStr).then((data) => data.rows);
};

const fetchDog = (name) => {
  const queryStr = `SELECT dog.name, breed.breed
                    FROM (SELECT name, breed_id FROM dogs) AS dog
                    JOIN (SELECT breed, breed_id FROM breeds) AS breed
                    ON dog.breed_id = breed.breed_id
                    WHERE dog.name = $1`;
  return pool.query(queryStr, [name]).then((data) => {
    if (data.rows.length === 0) {
      return `Dog with the name ${name} does not exist`;
    }
    return data.rows;
  });
};

const addDog = (name, breed_id) => {
  const queryStr = 'INSERT INTO dogs (name, breed_id) VALUES ($1, $2)';
  return pool.query(queryStr, [name, breed_id]).then((response) => response);
};

const fetchBreeds = () => {
  const queryStr = 'SELECT * FROM breeds';
  return pool.query(queryStr).then((data) => data.rows);
};

module.exports = {
  fetchDogs,
  fetchDog,
  addDog,
  fetchBreeds
};
