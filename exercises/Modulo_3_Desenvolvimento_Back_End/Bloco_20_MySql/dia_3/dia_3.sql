/*pegar algo específico*/
SELECT * FROM sakila.customer
WHERE email='LEONARD.SCHOFIELD@sakilacustomer.org';

/*usando where,and, order by*/

SELECT CONCAT(first_name,' ', last_name) FROM sakila.customer
WHERE active IS NOT true
AND store_id=2
AND first_name <> 'KENNETH'
ORDER BY first_name, last_name;

/*Pegando informações com igual ou maior e o operador
OR*/

SELECT title, description, release_year, replacement_cost FROM sakila.film
WHERE rating = 'G'
OR rating = 'PG-13'
OR rating = 'PG'
AND replacement_cost >= 18.00
ORDER BY replacement_cost DESC, title
LIMIT 100;

/*utilizando os operadores booleanos E COUNT*/

SELECT COUNT(*) FROM sakila.customer
WHERE active IS TRUE
AND store_id = 1;

SELECT * FROM sakila.customer
WHERE active IS FALSE
AND store_id = 1;

/*utilizando order e operador maior*/

SELECT * FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;
