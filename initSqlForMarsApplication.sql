CREATE DATABASE  IF NOT EXISTS `mars` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `mars`;
-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: mars
-- ------------------------------------------------------
-- Server version	5.7.24-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CATEGORIES`
--

DROP TABLE IF EXISTS `CATEGORIES`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CATEGORIES` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `PRIORITY` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CATEGORIES`
--
-- ORDER BY:  `ID`

LOCK TABLES `CATEGORIES` WRITE;
/*!40000 ALTER TABLE `CATEGORIES` DISABLE KEYS */;
INSERT INTO `CATEGORIES` (`ID`, `DESCRIPTION`, `NAME`, `PRIORITY`) VALUES (1,'Protéine Desc','Protéine',1),(2,'lipide description','Lipide',2),(3,'Glucide description','Glucide',1),(4,'eau desc','Eau',1),(5,'hygiène desc','Hygiène',3),(7,'vêtement','Vêtement',4),(8,'Flacon air','Air',1),(9,'Matériel desc','Matériel',2);
/*!40000 ALTER TABLE `CATEGORIES` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `EQUIPEMENTS`
--

DROP TABLE IF EXISTS `EQUIPEMENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `EQUIPEMENTS` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `POIDS` double DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `categorie` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FKrw9d8lh1jo7ok7lpqjgdh9ncs` (`categorie`),
  CONSTRAINT `FKrw9d8lh1jo7ok7lpqjgdh9ncs` FOREIGN KEY (`categorie`) REFERENCES `CATEGORIES` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `EQUIPEMENTS`
--
-- ORDER BY:  `ID`

LOCK TABLES `EQUIPEMENTS` WRITE;
/*!40000 ALTER TABLE `EQUIPEMENTS` DISABLE KEYS */;
INSERT INTO `EQUIPEMENTS` (`ID`, `POIDS`, `DESCRIPTION`, `NAME`, `categorie`) VALUES (1,0.1,'Protéine poudre pour manger','Poudre',1),(2,0.35,'shampoing pour laver les cheveux','Shampoing',5),(3,0.5,'Pontalon desc','Pontalon',7),(4,0.15,'T-shirt','T-shirt',7),(5,0.7,'Flacon air','Flacon',8),(6,0.2,'Radio Desc','Radio',9),(7,1,'Lipide liquide desc','Lipide liquide',2),(8,0.2,'Sucre desc','Sucre',3),(9,0.2,'Flacon Eau','Flacon Eau',4),(10,0.08,'Gants','Gants',7);
/*!40000 ALTER TABLE `EQUIPEMENTS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MISSIONS`
--

DROP TABLE IF EXISTS `MISSIONS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MISSIONS` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `DATE_DEBUT` date DEFAULT NULL,
  `DESCRIPTION` varchar(255) DEFAULT NULL,
  `DATE_FIN` date DEFAULT NULL,
  `LIMITE_POIDS` double DEFAULT NULL,
  `NAME` varchar(255) DEFAULT NULL,
  `NOMBRE_TOTAL` int(11) DEFAULT NULL,
  `TOTAL_POID` double DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MISSIONS`
--
-- ORDER BY:  `ID`

LOCK TABLES `MISSIONS` WRITE;
/*!40000 ALTER TABLE `MISSIONS` DISABLE KEYS */;
INSERT INTO `MISSIONS` (`ID`, `DATE_DEBUT`, `DESCRIPTION`, `DATE_FIN`, `LIMITE_POIDS`, `NAME`, `NOMBRE_TOTAL`, `TOTAL_POID`) VALUES (13,'2015-05-05','Mon premier mision','2025-05-05',5000,'Premier mission',115,1823.25),(14,'2008-12-12','Mission 2','2020-09-09',300,'Mission 2',73,23.95);
/*!40000 ALTER TABLE `MISSIONS` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `MISSIONS_EQUIPEMENTS`
--

DROP TABLE IF EXISTS `MISSIONS_EQUIPEMENTS`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `MISSIONS_EQUIPEMENTS` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `NOMBRE` int(11) DEFAULT NULL,
  `POIDS_EQUIPEMENT` double DEFAULT NULL,
  `EQUIPEMENT` int(11) DEFAULT NULL,
  `MISSION` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`),
  KEY `FK3ryk5kkbkd7q1dw7ep3h7vml4` (`EQUIPEMENT`),
  KEY `FKeevxwcef4kwmtvechiofr2s5p` (`MISSION`),
  CONSTRAINT `FK3ryk5kkbkd7q1dw7ep3h7vml4` FOREIGN KEY (`EQUIPEMENT`) REFERENCES `EQUIPEMENTS` (`ID`),
  CONSTRAINT `FKeevxwcef4kwmtvechiofr2s5p` FOREIGN KEY (`MISSION`) REFERENCES `MISSIONS` (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `MISSIONS_EQUIPEMENTS`
--
-- ORDER BY:  `ID`

LOCK TABLES `MISSIONS_EQUIPEMENTS` WRITE;
/*!40000 ALTER TABLE `MISSIONS_EQUIPEMENTS` DISABLE KEYS */;
INSERT INTO `MISSIONS_EQUIPEMENTS` (`ID`, `NOMBRE`, `POIDS_EQUIPEMENT`, `EQUIPEMENT`, `MISSION`) VALUES (19,5,1750,2,13),(20,100,70,5,13),(21,5,2.5,3,13),(22,5,0.75,4,13),(23,20,2,1,14),(24,15,5.25,2,14),(25,18,2.6999999999999997,4,14),(26,20,14,5,14);
/*!40000 ALTER TABLE `MISSIONS_EQUIPEMENTS` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-02-22  1:23:32
