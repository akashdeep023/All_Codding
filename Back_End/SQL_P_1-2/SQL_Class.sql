CREATE DATABASE college;
use college;
CREATE TABLE student(
	rollno INT,
    name VARCHAR(30),
    age INT
);
INSERT INTO student
VALUES
(101,"adam",12),
(102,"bob",14);
SELECT * FROM student;
-------------------------------------
create database if not exists instagram;
drop database if exists instagram;
show databases;
use college;
show tables;
-------------------------------------------------------------------
-------------------------------------------------------------------
create database if not exists instagram;

use instagram;

create table user(
	id int,
    age int,
    name varchar(30) not null,
    email varchar(50) unique,
    followers int default 0,
    following int default 0,
    constraint check (age>=13),
    primary key (id)
);

insert into user
(id,age,name,email,followers,following)
values
(1,14,"adam","adam@yahoo.in",123,145),
(2,15,"bob","bob123@gmail.com",200,200),
(3,16,"casey","casey@email.com",300,306),
(4,17,"donald","donal@gmail.com",200,105);

insert into user
(id,age,name,email,followers,following)
values
(5,14,"eva","eva@yahoo.in",123,145),
(6,16,"jack","jack01@gmail.com",200,200);
insert into user			
(id,age,name,email)
values
(7,18,"pop","jk11@gmail.com");
--------------------------
insert into user			
(id,age,email)
values
(2,18,"bob123@gmail.com");			
-------------------------------

select id, name, email from user;
select * from user;
select	 distinct age from user;
------------------------------------------------------------------
select * from user
where followers >=200;
select name, followers from user
where followers >=200;
select name, age from user
where age + 1 =18;

select name, age, followers from user
where age>15 and followers>200;
select name, age, followers from user
where age>15 or followers>200;
select name, age, followers from user
where age between 15 and 17;
select name, email, followers from user
where email in ("bob123@gmail.com","abc@gamil.com","donal@gmail.com");
select name ,followers,following from user
where name in ("bob","casey","jack","adam","boby","frhan");
select name ,followers,following from user
where name not in ("bob","casey","jack","adam","boby","frhan");

select name,age,followers from user
limit 3;
select name,age,followers from user
where age>15 and followers>=200
limit 2;

select name,age ,followers from user
order by followers;
select name,age ,followers from user
order by followers asc;
select name,age ,followers from user
order by followers desc;

select max(followers) from user;
select max(age) from user;
select min(followers) from user;
select min(age) from user;
select count(followers) from user
where age between 15 and 16;
select avg(age) from user;
select sum(following) from user;

use instagram;
select age, count(id) from user
group by age;
select age, max(followers), count(id) from user
group by age;
---------------------------------
select name, age, max(followers) from user
group by age;
--------------------------------

select age, max(followers) ,count(id) from user
group by age
having max(followers)>=100;

select age, max(followers) ,count(id) from user
group by age
having max(followers)>=100
order by age desc;

set sql_safe_updates = 0;

update user
set followers = 600
where age = 16;
select * from user;

update user
set followers =1000, following = 101
where followers = 0;
select * from user;

create table company(
	id int,
    name varchar(50),
    age int
);
insert into company
(id, name,age)
values
(121,"akash",23),
(122,"ashu",22),
(123,"sagar",24),
(124,"bharat",22),
(125,"saurav",26);
select * from company;

delete from company
where age = 22;
select*from company;

alter table user
add column city varchar(25) default "delhi";
select*from user;

alter table user
drop column name;
select*from user;

alter table user
rename to instaUser;
select *from instaUser;
alter table instaUser
rename to user;
select *from user;

alter table user
change column followers subs int default 0;
select*from user;

alter table user
modify subs int default 5;

insert into user
(id, age,email,following)
value
(8,19,"vish@gmail.com" ,120);
select *from user;

truncate table company;
select * from company;
drop table company;
select * from company;





create table post(
	id int primary key,
	content varchar(100),
    user_id int,
    foreign key (user_id) references user(id)
);
use instagram;

insert into post
(id,content,user_id)
values
(101,"Hi, i'm a codder",1),
(105,"Hi, i'm a buisness man",3);

select * from post;
select id, content from post;

drop table post;

-------------------------------------------------------------------
-------------------------------------------------------------------


