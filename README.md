# HCI-Final-Project

To run the code in browser, a few steps need to be done first:
1. Make sure node.js and npm are installed
2. install mysql and mysql workbench
3. In the mysql workbench, create a database named "mydb" and run the following sql in it:
    CREATE TABLE users(
        id int NOT NULL AUTO_INCREMENT,
        username varchar(255),
        password varchar(255),
        PRIMARY KEY (id)
    );
    CREATE TABLE scores(
        id int NOT NULL,
        score int,
        PRIMARY KEY (id)
    );
4. run the command "npm install in the root directory of the HCI-FINAL-PROJECT folder
5. change the password variable in database.js line 11 to the password of root user that was set when setting up mysql
6. run the command "node database.js"
7. open a browser and navigate to localhost at the specified port
