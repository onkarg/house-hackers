SELECT COUNT(id)
FROM properties
WHERE owner_id = $1;