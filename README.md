# HelloMars
Test technique for SEEMANTOV

This Project contains BAckEnd apllication 
```
# Spring Boot 
```
aplication wich expose APT Rest to be consumeb by th Front Application wich is on 
```
# AngularJS 
```
, I use MySQL as database where the init sql named 
```
# initSqlForMarsApplication.sql 
```
Two run this job you should have 
```
# Mysql
```
```
# Node 
```
```
# Maven 
```  
installed.

1- We should init the database via this cmd :
```
source initSqlForMarsApplication.sql
```
2- change the prperty of Mysql   
```
# spring.datasource
```  
 in the 
```
MARS_AM_COMMING_BE\src\main\resources\application.properties
```

3- after insatlleing maven dependency , run the MARS_AM_COMMING_BE via 
```
 mvn spring-boot:run
```
 
 4- We should run the AnfularJS FrontEnd application to consume Rest exposed by the BE
 4.1- whe shoud install the http-server
```
 npm install -g http-server
```
 4.2- gon under the MARS_AM_COMMING_FE and launch the server via 
 
 ```
  http-server -o
```
 
 5- your browser is oppen now, Enjoy you planififcation for the MARS journey.
 