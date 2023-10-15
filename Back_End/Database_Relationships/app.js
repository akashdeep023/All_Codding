//------------------------------------Mongo Relationships--------------------------------------------
//------------------------------------One to Few(in Detail)-----------------------------------------------------
//One to Many  /  Approach 1 (one to few)----------
//Store the child document inside parent--------

//------------------------------------One to Few(implementation)-----------------------------------------------------
//in user.js----------

//------------------------------------One to Many(implementation)-----------------------------------------------------
// One to Many  /  Approach 2 ---------------
//Store a reference to the child document inside parent----------

//------------------------------------One to Many(in Detail)-----------------------------------------------------
//in customer.js

//------------------------------------using Populate-----------------------------------------------------
//in customer.js

//------------------------One to Squillions(million ya billion)(in Detail)-------------------------------------------
//One to Many   /  Approach 3 (one to squillions)----------
//Store a reference to the parent document inside child----- (oposite - one to many / Approach -2)
//in posts.js

//---------------------------------------Reading Docs--------------------------------------------------
//https://www.mongodb.com/blog/post/6-rules-of-thumb-for-mongodb-schema-design
//Database denormalization rules of thumb: Your guide through the rainbow----- read
//Intermediate: Two-way referencing------ read
//and extra time than read all----------