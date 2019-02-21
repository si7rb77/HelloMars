package hello.mars.repository;

import hello.mars.domain.Categorie;
import hello.mars.domain.Equipement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EquipementRepository extends JpaRepository<Equipement,Integer> {

    List<Equipement> findAllByCategorie(Categorie categorie);
}


