create database if not exists yourCollege;

use yourCollege;
create table teacher(
	id int primary key,
    name varchar(30),
    subject varchar(50),
    salary int
);

insert into teacher
(id,name,subject,salary)
value
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"divya","physics",75000);
select * from teacher;

select * from teacher
where salary > 55000;

alter table teacher
change column salary ctc int;
select * from teacher;

set sql_safe_updates = 0;
update teacher
set ctc = (ctc * 125)/100;

alter table teacher
add column city varchar(30) default "Gurgaon";
select * from teacher;

alter table teacher 
drop column ctc;
select * from teacher;

---------------------------------------------------------------
create table student(
	roll_no int primary key,
    name int,
    city varchar(30),
    marks int
);

alter table student
modify column name varchar(30);

insert into student
(roll_no, name , city, marks)
values
(110,"adam","Delhi", 76),
(108,"bob","Mumbai",65),
(124,"casey","Pune",94),
(112,"duke","Pune",80);

select * from student
where marks > 75;

select distinct city from student;

select city from student
group by city;
select * from student;


select avg(marks) from student;
select * from student;

alter table student
add column grade char;
select * from student;

update student
set grade = "O"
where marks>=80;

update student
set grade = "A"
where marks>=70 and marks <80;

update student
set grade = "B"
where marks>=60 and marks <70;

select * from student;


