USE Pixar;

SELECT * FROM Movies;

INSERT INTO
	Movies (title, director, `year`, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);
    
SELECT * FROM BoxOffice;

INSERT INTO
	BoxOffice(movie_id, rating, domestic_sales, international_sales)
VALUE
	(9, 6.8, 450000000, 370000000);
    
UPDATE Movies
SET director= 'Andrew Staton'
WHERE id = 9;

UPDATE Movies
SET title = 'Ratatouille',
`year` = 2007
WHERE id = 3;

INSERT INTO BoxOffice
	(movie_id, rating, domestic_sales, international_sales)
VALUES
	(8, 8.5, 300000000, 250000000),
    (10, 7.4, 460000000, 510000000),
    (11, 9.9, 290000000, 280000000);
    
-- Achar o filme WALL-E
SELECT * FROM Movies
WHERE title = 'WALL-E';
-- Deletando WALL-E
DELETE FROM BoxOffice
WHERE movie_id = 11;
DELETE FROM Movies
WHERE id = 11;

-- achar os filmes de Andrew Staton
SELECT * FROM Movies
WHERE director = 'Andrew Staton';
-- Deletar os filmes de Andrew Staton
DELETE FROM BoxOffice
WHERE movie_id IN (2,9);
DELETE FROM Movies
WHERE director = 'Andrew Staton';

-- achando os filmes que lucraram mais de 400 milhões
SELECT * FROM BoxOffice
WHERE domestic_sales > 400000000;
-- Atualizando os filmes com mais de 400 milhões de lucro interno
UPDATE BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

-- achando os filmes que lucraram menos de 300 milhões
-- no mercado internacional e 200 milhões no interno
SELECT * FROM BoxOffice
WHERE domestic_sales > 200000000
AND international_sales < 300000000;
-- atualizando os filmes que lucraram menos de 300 milhões
-- no mercado internacional e 200 milhões no interno
UPDATE BoxOffice
SET rating = 6.0
WHERE domestic_sales > 200000000
AND international_sales < 300000000;

-- ACHANDO OS FILMES COM MENOS DE 100 MIN DE DURAÇÃO
SELECT * FROM Movies
WHERE length_minutes < 100;
-- DELETANDO DO BOXOFFICE E DOS MOVIES OS FILMES PELOS ID`s
DELETE FROM BoxOffice
WHERE movie_id IN (1,6,7,8);
DELETE FROM Movies
WHERE id IN (1,6,7,8);

