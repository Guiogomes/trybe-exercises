SET SQL_SAFE_UPDATES = 0;

UPDATE sakila.actor
SET first_name = 'JULES'
WHERE first_name = 'JULIA';

SELECT * FROM sakila.actor
WHERE first_name = 'JULES';

UPDATE sakila.category
SET name = 'Science Fiction'
WHERE name='Sci-Fi';

SELECT * FROM sakila.category;

UPDATE sakila.film
SET replacement_cost = 25.00
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13');

SELECT * FROM sakila.film
WHERE replacement_cost = 25;

UPDATE sakila.film
SET replacement_cost = (
CASE 
	WHEN length BETWEEN 0 AND 100 THEN 10.00
    WHEN length > 100 THEN 20.00
    ELSE replacement_cost
END);
SELECT replacement_cost FROM sakila.film;

DELETE FROM sakila.film_text
WHERE title = 'ACADEMY DINOSAUR';

DELETE FROM sakila.film_actor
WHERE actor_id = 7; -- actor_id = 7 é o Id de GRACE

DELETE FROM sakila.actor
WHERE first_name = 'GRACE';

SELECT actor_id FROM sakila.actor
WHERE first_name='KARL';

DELETE FROM sakila.film_actor
WHERE actor_id=12;
DELETE FROM sakila.actor
WHERE first_name='KARL';

SELECT * FROM sakila.film_text;
DELETE FROM sakila.film_text
WHERE description LIKE '%saga%';

TRUNCATE sakila.film_actor;
TRUNCATE sakila.film_category;