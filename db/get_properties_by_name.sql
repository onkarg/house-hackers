SELECT properties.*
FROM properties
JOIN users ON properties.owner_id=users.id
WHERE users.name LIKE $1