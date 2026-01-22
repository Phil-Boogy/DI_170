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

--Write a query to get the film ID, title, description, year of release and rental rate in ascending order according to their rental rate.
SELECT film_id, title, description, release_year, rental_rate 
FROM film
ORDER BY rental_rate asc;

--Write a query to get the address, and the phone number of all customers living in the Texas district, these details can be found in the “address” table.
SELECT address, phone
FROM address
WHERE district = 'Texas';

--Write a query to retrieve all movie details where the movie id is either 15 or 150.
SELECT * 
FROM film
WHERE film_id in (15, 150);

--Write a query which should check if your favorite movie exists in the database. Have your query get the film ID, title, description, length and the rental rate, these details can be found in the “film” table.
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title = 'Ghostbusters';

--Write a query to get the film ID, title, description, length and the rental rate of all the movies starting with the two first letters of your favorite movie.
SELECT film_id, title, description, length, rental_rate 
FROM film 
WHERE title ILIKE 'Gh%';

--Write a query which will find the 10 cheapest movies.
SELECT * 
FROM film
ORDER BY rental_rate ASC
LIMIT 10

--Not satisfied with the results. Write a query which will find the next 10 cheapest movies.
-- Bonus: Try to not use LIMIT.
SELECT * 
FROM film
ORDER BY rental_rate ASC
LIMIT 10
OFFSET 10;

-- Write a query which will join the data in the customer table and the payment table. You want to get the first name and last name from the curstomer table, as well as the amount and the date of every payment made by a customer, ordered by their id (from 1 to…).
SELECT customer.customer_id, customer.first_name, customer.last_name, payment.amount, payment.payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id asc;

-- You need to check your inventory. Write a query to get all the movies which are not in inventory.
SELECT film_id, title
FROM film
WHERE film_id NOT IN (SELECT film_id FROM inventory);

-- Write a query to find which city is in which country.
SELECT city.city, country.country 
FROM city
RIGHT JOIN country
ON city.country_id = country.country_id
ORDER BY country asc

-- You want to be able to see how your sellers have been doing? Write a query to get the customer’s id, names (first and last), the amount and the date of payment ordered by the id of the staff member who sold them the dvd.
SELECT customer.customer_id, 
CONCAT (customer.first_name, ' ' ,customer.last_name) AS customer_name, 
payment.amount, 
payment.payment_date, 
CONCAT (staff.first_name, ' ', staff.last_name) AS staff_name, 
payment.staff_id
FROM payment
INNER JOIN customer ON payment.customer_id = customer.customer_id
INNER JOIN staff ON staff.staff_id = payment.staff_id
ORDER BY payment.staff_id asc;


