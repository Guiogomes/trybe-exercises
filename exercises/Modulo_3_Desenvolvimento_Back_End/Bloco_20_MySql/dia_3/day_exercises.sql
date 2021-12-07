USE PecasFornecedores;

SELECT * FROM Pecas
WHERE upper(name) LIKE upper('gr%');

SELECT * FROM Fornecimentos
WHERE peca = 2
ORDER BY Fornecedor;

SELECT peca, Preco, Fornecedor FROM Fornecimentos
WHERE Fornecedor LIKE '%N%';

SELECT * FROM Fornecedores
WHERE UPPER(name) LIKE UPPER('%ltda%');

SELECT COUNT(*) FROM Fornecedores
WHERE UPPER(code) LIKE UPPER('%f%');

SELECT * FROM Fornecimentos
WHERE Preco BETWEEN 15 AND 40
ORDER BY Preco;

SELECT * FROM Vendas
WHERE order_date BETWEEN '2018/04/15' AND '2019/07/30';