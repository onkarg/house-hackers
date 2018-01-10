DROP TABLE IF EXISTS houses CASCADE;

CREATE TABLE IF NOT EXISTS houses (
  id SERIAL PRIMARY KEY,
  name varchar(120),
  description varchar(500),
  address varchar(500),
  city varchar(100),
  state varchar(50),
  zip int,
  img_url varchar(555),
  loan int,
  mortgage int,
  rent int,
  owner_id int REFERENCES users(id)
);

INSERT INTO houses (name, description, address, city, state, zip, img_url, loan, mortgage, rent, owner_id)
VALUES
('Family House', 'Amazing house on the river', '123 Villa Dr', 'Bobville', 'BA', 12345, 'https://cdn.houseplans.com/product/o2d2ui14afb1sov3cnslpummre/w1024.jpg?v=15', 255000, 1500, 2000, 1),
('Bum House', 'Not amazing house on the river', '987 Bum Dr', 'Boringville', 'BV', 98765, 'https://zachselwyn.files.wordpress.com/2015/01/run-down-house.jpg', 40000, 300, 500, 2),
('Dream House', 'Dream place on the beach', '111 Gold Dr', 'Pleasant', 'AB', 11111, 'https://static.dezeen.com/uploads/2017/08/clifton-house-project-architecture_dezeen_hero-1.jpg', 900000, 3000, 5000, 3)