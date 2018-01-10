DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  name varchar(120),
  email varchar(240)
);

INSERT INTO users (name, email)
VALUES
('Bob Vill', 'b67ob@vil98l.com'),
('Dave Johnson', 'd34ave@john45son.com'),
('Steph Brown', 'st12eph@br23own.com');