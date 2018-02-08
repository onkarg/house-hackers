DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username varchar(255),
  name varchar(255),
  email varchar(255),
  authid varchar(255)
);

INSERT INTO users (username, name, email, authid)
VALUES
('bobvill23', 'Bob Vill', 'b67ob@vil98l.com', 'asldfkjoiuqwerjh987234lknxcfluij'),
('daveyjohn98', 'Dave Johnson', 'd34ave@john45son.com', '097823asldfkjoiuqwerjh987234lknxcfluijfd'),
('stephcurrywanabe', 'Steph Brown', 'st12eph@br23own.com', '123lkjdf34asldfkjoiuqwerjh987234lknxc');