SELECT * FROM northwind.order_details;
UPDATE northwind.order_details
SET discount = 15
WHERE id <> 0;