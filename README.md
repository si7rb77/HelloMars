# HelloMars
Test technique for SEEMANTOV
### Description
This Project contains BackEnd application `Spring Boot`
application which expose APT Rest to be consumed by th Front Application which is an `AngularJS `
 I use MySQL as database where the init sql named ` initSqlForMarsApplication.sql `
### Prerequisites
Two run this project you should have  `Mysql`, `Node `, `Maven ` installed.
## Installation
0- The best way to get the source code is to clone it from GitHub.
```
git clone https://github.com/si7rb77/HelloMars.git
```
1- We should init the database via this cmd :
```
source initSqlForMarsApplication.sql
```
2- change the property of Mysql ` spring.datasource ` in the `MARS_AM_COMMING_BE\src\main\resources\application.properties `

3- after insatlling maven dependencies , run the `MARS_AM_COMMING_BE` via 
```
 mvn spring-boot:run
```
 
 4- We should run the AngularJS FrontEnd application to consume Rest exposed by the BE
 
 4.1- we should install the  ` http-server ` 
```
 npm install -g http-server
```
 4.2- gon under the  ` MARS_AM_COMMING_FE `  and launch the server via 
 
 ```
  http-server -o
```
 
 5- Now your browser is open , Enjoy you planififcation for the MARS journey.
 