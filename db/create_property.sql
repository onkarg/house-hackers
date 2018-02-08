INSERT INTO properties (name, description, address, city, state, zip, img_url, loan, mortgage, rent, owner_id)
VALUES ( $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11 )
RETURNING *;