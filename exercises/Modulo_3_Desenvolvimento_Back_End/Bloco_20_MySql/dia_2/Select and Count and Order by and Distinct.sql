SELECT * FROM sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(DISTINCT last_name) FROM sakila.actor;
-- SELECT * FROM sakila.address
-- ORDER BY district ASC, address DESC;--
SELECT * FROM sakila.actor
ORDER BY last_name, first_name DESC;