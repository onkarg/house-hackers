SELECT properties.name, properties.description, properties.address,
properties.city, properties.state, properties.zip, properties.img_url,
properties.loan, properties.mortgage, properties.rent
FROM properties
INNER JOIN users ON properties.owner_id=users.id
WHERE users.email = $1