CREATE TABLE students(
student_id SERIAL PRIMARY KEY,
first_name VARCHAR (50) NOT NULL,
last_name VARCHAR (100) NOT NULL,
bday DATE NOT NULL)
insert into students (first_name, last_name, bday)
values ('Marc',	'Benichou',	'02/11/1998'),
('Yoan',	'Cohen',	to_date('03/12/2010', 'DD/MM/YYYY')),
('Lea',	'Benichou', to_date('27/07/1987', 'DD/MM/YYYY')),
('Amelia',	'Dux',	to_date('07/04/1996', 'DD/MM/YYYY')),
('David',	'Grez',	to_date('14/06/2003', 'DD/MM/YYYY')),
('Omer',	'Simpson',	to_date('03/10/1980', 'DD/MM/YYYY'));
 insert into students (first_name, last_name, bday)
 values('Philip', 'Josolowitz', to_date('06/05/1983', 'DD/MM/YYYY'));

select * from students
select first_name, last_name from students
select first_name, last_name from students where student_id ='2'
select first_name, last_name from students where last_name = 'Benichou' and first_name = 'Marc'
select first_name, last_name from students where last_name = 'Benichou' or first_name = 'Marc'
select first_name, last_name from students where last_name like '%a%';
select first_name, last_name from students where first_name ilike 'a%';
select first_name, last_name from students where first_name ilike '%a';
SELECT first_name, last_name FROM students WHERE first_name LIKE '%a_';
select first_name, last_name from students where student_id in ('1', '3');
select * from students where bday >= ('1/01/2000') 