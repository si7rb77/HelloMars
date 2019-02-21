package hello.mars.domain;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "MISSIONS_EQUIPEMENTS")
public class EquipementMission implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @ManyToOne
    @JoinColumn(name = "EQUIPEMENT")
    private Equipement equipement;

    @ManyToOne
    @JsonIgnore
    @JoinColumn(name = "MISSION")
    private Mission mission;

    @Column(name = "NOMBRE")
    private Integer nombre;

    @Column(name = "POIDS_EQUIPEMENT")
    private Double poidsEquipement;

    public EquipementMission() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Equipement getEquipement() {
        return equipement;
    }

    public void setEquipement(Equipement equipement) {
        this.equipement = equipement;
    }

    public Mission getMission() {
        return mission;
    }

    public void setMission(Mission mission) {
        this.mission = mission;
    }

    public Integer getNombre() {
        return nombre;
    }

    public void setNombre(Integer nombre) {
        this.nombre = nombre;
    }

    public Double getPoidsEquipement() {
        return poidsEquipement;
    }

    public void setPoidsEquipement(Double poidsEquipement) {
        this.poidsEquipement = poidsEquipement;
    }

}
