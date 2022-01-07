SELECT 'This is SQL Exercise, Practice and Solution';
SELECT 1 AS numberOne, 2 AS numberTwo, 3 AS numberThree;
SELECT 10 + 15;
SELECT 10 * 15;
SELECT * FROM Scientists;
SELECT * FROM Scientists.Projects;
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;
SELECT * FROM Scientists.Scientists
	ORDER BY Name;
SELECT * FROM Scientists.Projects
	ORDER BY Name DESC;
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' para ser concluído.') FROM Scientists.Projects;
SELECT Name, Hours FROM Scientists.Projects
	ORDER BY Hours DESC LIMIT 3;
SELECT * FROM Scientists.AssignedTo;
SELECT DISTINCT Project FROM Scientists.AssignedTo;
SELECT Name FROM Scientists.Projects
	ORDER BY Hours DESC LIMIT 1;
SELECT Name FROM Scientists.Projects
	ORDER BY Hours LIMIT 1 OFFSET 1;
SELECT * FROM Scientists.Projects
	ORDER BY Hours LIMIT 5;
SELECT CONCAT('Existem ', COUNT(Name), ' cientistas na tabela Scientists')
	FROM Scientists.Scientists;

