package hello.mars.controller;

import hello.mars.domain.Categorie;
import hello.mars.domain.Equipement;
import hello.mars.repository.EquipementRepository;
import hello.mars.repository.MissionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api-equipement")
public class EquipementController {

    private static final Logger log = LoggerFactory.getLogger(EquipementController.class);

    @Autowired
    private EquipementRepository equipementRepository;

    @RequestMapping(value = "/equipements", method = RequestMethod.GET)
    public ResponseEntity getAllEquipements() {
        log.debug("-----getAllEquipements --------");
        return Optional
                .ofNullable(equipementRepository.findAll())
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }


    @RequestMapping(value = "/equipement", method = RequestMethod.POST)
    public ResponseEntity createEquipement(@RequestBody Equipement equipement) {
        log.debug("-----createEquipement --------");
        return Optional
                .ofNullable(equipementRepository.save(equipement))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }


    @RequestMapping(value = "/equipement/{id}", method = RequestMethod.GET)
    public ResponseEntity getEquipementById(@PathVariable("id") Integer id) {
        log.debug("-----getEquipementById {} --------", id);
        return Optional
                .ofNullable(equipementRepository.findById(id))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

    @RequestMapping(value = "/equipement", method = RequestMethod.PUT)
    public ResponseEntity updateEquipement(@RequestBody Equipement equipement) {
        log.debug("-----updateEquipement--------");
        return Optional
                .ofNullable(equipementRepository.save(equipement))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

    @RequestMapping(value = "/equipement/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteEquipement(@PathVariable("id") Integer id) {
        log.debug("-----deleteEquipement id {}--------", id);
        try {
            equipementRepository.deleteById(id);
            return ResponseEntity.ok().build(); //200 OK
        } catch (Exception e) {
            log.error("-----Exception deleteEquipement id {}--------", id);
            e.printStackTrace();
            return ResponseEntity.notFound().build();  //404 Not found
        }
    }

    @RequestMapping(value = "/equipement-by-categorie", method = RequestMethod.POST)
    public ResponseEntity getEquiementsByCategorie(@RequestBody Categorie categorie) {
        log.debug("-----getEquiementsByCategorie --------");
        return Optional
                .ofNullable(equipementRepository.findAllByCategorie(categorie))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

}
