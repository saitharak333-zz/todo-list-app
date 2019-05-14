# todo-list-app 
Need Three connections to be opened.
One for Node server.
One for Tomcat server (Spring Boot).
One for Mysql server.

1. REACT APP
  
        cd /applicaton/frontend/todolist/
        npm install
        npm start 
    
2. Spring Boot Service

        cd /pro
        ./mvnw spring-boot:run
    
3. MySQL Server
        
        brew services start mysql
        mysql -uroot
        CREATE DATABASE test;
        CREATE USER IF NOT EXISTS 'tharak'@'localhost' IDENTIFIED BY 'sai';
        GRANT ALL PRIVILEGES ON test.* TO 'tharak'@'localhost';
    