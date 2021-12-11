USE Pixar;
SELECT * FROM Movies;
SELECT * FROM BoxOffice;
SELECT * FROM Theater;

-- SELECT t1.coluna, t2.coluna
-- FROM tabela1 AS t1
-- INNER JOIN tabela2 AS t2
-- ON t1.coluna_em_comum = t2.coluna_em_comum;

SELECT filmes.title, vendas.domestic_sales, vendas.international_sales 
FROM Movies AS filmes
INNER JOIN BoxOffice AS vendas
ON filmes.id = vendas.movie_id;

SELECT filmes.title, vendas.domestic_sales, vendas.international_sales
FROM Movies AS filmes
INNER JOIN BoxOffice AS vendas
ON filmes.id = vendas.movie_id
WHERE vendas.international_sales > vendas.domestic_sales;

SELECT filmes.title, avaliacao.rating FROM Movies AS filmes
INNER JOIN BoxOffice AS avaliacao
ON filmes.id = avaliacao.movie_id
ORDER BY avaliacao.rating DESC;

SELECT cinema.* FROM Theater AS cinema
LEFT JOIN Movies AS filme
ON cinema.id = filme.theater_id
ORDER BY cinema.name;

SELECT filmes.*, cinemas.* FROM Movies AS filmes
RIGHT JOIN Theater AS cinemas
ON filmes.theater_id = cinemas.id
ORDER BY cinemas.name;

SELECT filmes.* FROM Movies AS filmes
INNER JOIN BoxOffice AS nota
ON nota.rating > 8 AND filmes.id = nota.movie_id;
