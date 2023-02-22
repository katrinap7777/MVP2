BEGIN TRANSACTION;

CREATE TABLE product (
    id SERIAL PRIMARY KEY,
    title text,
    description text,
    price money,
    image text
);

COMMIT;


