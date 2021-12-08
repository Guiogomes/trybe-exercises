INSERT INTO sakila.actor (first_name, last_name)
    SELECT first_name, last_name FROM sakila.staff;
SELECT * FROM sakila.actor
WHERE actor_id BETWEEN 200 AND 203;

INSERT INTO sakila.staff
(first_name, last_name, address_id, store_id, `active`, username)
VALUE ('Marco', 'Baêta', 245, 1, 1, 'marcoBaeta');

SELECT * FROM sakila.staff;

INSERT INTO sakila.staff
	(first_name, last_name, address_id, store_id, `active`, username)
VALUES
	('Karina', 'Silveira', 246, 1, 1, 'KaSilveira'),
	('Capi', 'Etheriel', 247, 1, 2, 'pontoBarra');

SELECT * FROM sakila.staff;

INSERT INTO sakila.actor (first_name, last_name)
	SELECT first_name, last_name FROM sakila.customer
    LIMIT 5;
SELECT * FROM sakila.actor;

INSERT INTO sakila.category
	(name)
VALUES
	('Romantic'),
    ('Comedy'),
    ('Horror');
SELECT * FROM sakila.category;

SELECT * FROM sakila.store;

INSERT INTO sakila.store
	(manager_staff_id, address_id)
VALUE
	(3,3);
