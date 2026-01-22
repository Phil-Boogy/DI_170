--All items, ordered by price (lowest to highest).
select * from items order by price asc

--Items with a price above 80 (80 included), ordered by price (highest to lowest).
select * from items where price >= 80 order by price desc;

--The first 3 customers in alphabetical order of the first name (A-Z) – exclude the primary key column from the results.
SELECT first_name, last_name FROM customer ORDER BY first_name asc LIMIT 3;

--All last names (no other columns!), in reverse alphabetical order (Z-A)
SELECT last_name FROM customer ORDER BY last_name desc;

--In the dvdrental database write a query to select all the columns from the “customer” table.
select * from customer

--Write a query to display the names (first_name, last_name) using an alias named “full_name”.
select (first_name, last_name) as full_name from customer 

--Write a query to select all the create_date from the “customer” table (there should be no duplicates).
select create_date from customer

--Write a query to get all the customer details from the customer table, it should be displayed in descending order by their first name.
select * from customer ORDER BY first_name DESC;