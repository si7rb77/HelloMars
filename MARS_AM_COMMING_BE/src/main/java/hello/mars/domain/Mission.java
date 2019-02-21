package hello.mars.domain;

import org.hibernate.annotations.LazyCollection;
import org.hibernate.annotations.LazyCollectionOption;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "MISSIONS")
public class Mission implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "DATE_DEBUT")
    private LocalDate debut;

    @Column(name = "DATE_FIN")
    private LocalDate fin;

    @Column(name = "LIMITE_POIDS")
    private Double limitePoid;

    @Column(name = "NOMBRE_TOTAL")
    private Integer nombreTotal;

    @Column(name = "TOTAL_POID")
    private Double totalPoids;

    @OneToMany(mappedBy = "mission")
    private List<EquipementMission>  equipementList;

    public Mission() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDate getDebut() {
        return debut;
    }

    public void setDebut(LocalDate debut) {
        this.debut = debut;
    }

    public LocalDate getFin() {
        return fin;
    }

    public void setFin(LocalDate fin) {
        this.fin = fin;
    }

    public Double getLimitePoid() {
        return limitePoid;
    }

    public void setLimitePoid(Double limitePoid) {
        this.limitePoid = limitePoid;
    }

    public Integer getNombreTotal() {
        return nombreTotal;
    }

    public void setNombreTotal(Integer nombreTotal) {
        this.nombreTotal = nombreTotal;
    }

    public Double getTotalPoids() {
        return totalPoids;
    }

    public void setTotalPoids(Double totalPoids) {
        this.totalPoids = totalPoids;
    }

    public List<EquipementMission> getEquipementList() {
        return equipementList;
    }

    public void setEquipementList(List<EquipementMission> equipementList) {
        this.equipementList = equipementList;
    }
}
