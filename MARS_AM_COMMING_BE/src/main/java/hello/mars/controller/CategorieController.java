package hello.mars.controller;

import hello.mars.domain.Categorie;
import hello.mars.repository.CategorieRepository;
import hello.mars.repository.MissionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api-categorie")
public class CategorieController {

    private static final Logger log = LoggerFactory.getLogger(CategorieController.class);

    @Autowired
    private CategorieRepository categorieRepository;

    @RequestMapping(value = "/categories", method = RequestMethod.GET)
    public ResponseEntity getAllCategories() {
        log.debug("-----getAllCategories --------");
        return Optional
                .ofNullable(categorieRepository.findAll())
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

    @RequestMapping(value = "/categorie", method = RequestMethod.POST)
    public ResponseEntity createCategorie(@RequestBody Categorie categorie) {
        log.debug("-----createCategorie --------");
        return Optional
                .ofNullable(categorieRepository.save(categorie))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }


    @RequestMapping(value = "/categorie/{id}", method = RequestMethod.GET)
    public ResponseEntity getCategorieById(@PathVariable("id") Integer id) {
        log.debug("-----getCategorieById {} --------", id);
        return Optional
                .ofNullable(categorieRepository.findById(id))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

    @RequestMapping(value = "/categorie", method = RequestMethod.PUT)
    public ResponseEntity updateCategorie(@RequestBody Categorie categorie) {
        log.debug("-----updateCategorie--------");
        return Optional
                .ofNullable(categorieRepository.save(categorie))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

    @RequestMapping(value = "/categorie/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteCategorie(@PathVariable("id") Integer id) {
        log.debug("-----deleteCategorie id {}--------", id);
        try {
            categorieRepository.deleteById(id);
            return ResponseEntity.ok().build(); //200 OK
        } catch (Exception e) {
            log.error("-----Exception deleteCategorie id {}--------", id);
            e.printStackTrace();
            return ResponseEntity.notFound().build();  //404 Not found
        }
    }

}
