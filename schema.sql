CREATE TABLE IF NOT EXISTS dogs (
  dogs_id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  breed VARCHAR(200) NOT NULL
);