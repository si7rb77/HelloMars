package hello.mars.repository;

import hello.mars.domain.EquipementMission;
import hello.mars.domain.Mission;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EquipementMissionRepository extends JpaRepository<EquipementMission,Integer> {

    void deleteAllByMission(Mission mission);
}


