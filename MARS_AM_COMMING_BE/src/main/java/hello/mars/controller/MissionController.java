package hello.mars.controller;

import hello.mars.domain.EquipementMission;
import hello.mars.domain.Mission;
import hello.mars.repository.EquipementMissionRepository;
import hello.mars.repository.MissionRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api-mission")
public class MissionController {

    private static final Logger log = LoggerFactory.getLogger(MissionController.class);

    @Autowired
    private MissionRepository missionRepository;

    @Autowired
    private EquipementMissionRepository equipementMissionRepository;

    @RequestMapping(value = "/missions", method = RequestMethod.GET)
    public ResponseEntity getAllMissions() {
        log.debug("-----getAllMissions --------");
        return Optional
                .ofNullable(missionRepository.findAll())
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }


    @Transactional
    @RequestMapping(value = "/mission", method = RequestMethod.POST)
    public ResponseEntity createMission(@RequestBody Mission mission) {
        log.debug("-----createMission --------");

        if (mission != null) {
            Mission newMission = missionRepository.save(mission);
            if (mission.getEquipementList() != null && !mission.getEquipementList().isEmpty()) {
                mission.getEquipementList().forEach(em -> {
                    em.setMission(newMission);

                    EquipementMission m = equipementMissionRepository.save(em);

                });
            }

            return ResponseEntity.ok().body(newMission);

        }

        return ResponseEntity.badRequest().build();  //403 Bad request
    }


    @RequestMapping(value = "/mission/{id}", method = RequestMethod.GET)
    public ResponseEntity getMissionById(@PathVariable("id") Integer id) {
        log.debug("-----getMissionById {} --------", id);
        return Optional
                .ofNullable(missionRepository.findById(id))
                .map(ns -> ResponseEntity.ok().body(ns)) //200 OK
                .orElseGet(() -> ResponseEntity.notFound().build());  //404 Not found
    }

    @Transactional
    @RequestMapping(value = "/mission", method = RequestMethod.PUT)
    public ResponseEntity updateMission(@RequestBody Mission mission) {
        log.debug("-----updateMission--------");
        if (mission != null) {
            Mission newMission = missionRepository.save(mission);
            if (mission.getEquipementList() != null && !mission.getEquipementList().isEmpty()) {
                List<EquipementMission> lst = mission.getEquipementList();
                equipementMissionRepository.deleteAllByMission(mission);
                lst.forEach(em -> {
                    em.setMission(newMission);
                    EquipementMission m = equipementMissionRepository.save(em);
                });
            }

            return ResponseEntity.ok().body(newMission);

        }
        return ResponseEntity.badRequest().build();  //403 Bad request
    }

    @Transactional
    @RequestMapping(value = "/mission/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteMission(@PathVariable("id") Integer id) {
        log.debug("-----deleteMission id {}--------", id);
        try {
            if (id != null) {
                Mission mission = missionRepository.findById(id).get();
                if (mission.getEquipementList() != null && !mission.getEquipementList().isEmpty()) {
                    equipementMissionRepository.deleteAllByMission(mission);
                }
                missionRepository.deleteById(id);
                return ResponseEntity.ok().build();
            }
            return ResponseEntity.notFound().build();

        } catch (Exception e) {
            log.error("-----Exception deleteMission id {}--------", id);
            e.printStackTrace();
            return ResponseEntity.badRequest().build();  //404 Not found
        }
    }

}
