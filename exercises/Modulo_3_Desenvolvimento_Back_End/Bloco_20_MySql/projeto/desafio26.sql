DELETE FROM northwind.order_details
WHERE unit_price > 100000
AND id <> 0;