-- Consulta feita através de pesquisa no stackoverflow
-- utilizando subquery e renomeclatura.
-- disponível em:
-- https://stackoverflow.com/questions/36870753/mysql-order-by-limit-offset-statements-how-to-offset-firts-and-only-then-so
SELECT * FROM
	(SELECT id FROM northwind.products LIMIT 5 OFFSET 40) AS products
ORDER BY id;

