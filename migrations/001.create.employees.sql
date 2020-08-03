CREATE TABLE employee (
  id SERIAL PRIMARY KEY NOT NULL,
  name TEXT NOT NULL,
  age INTEGER,
  address VARCHAR(80),
  city VARCHAR(50),
  phone INTEGER,
  department VARCHAR(50) 
);