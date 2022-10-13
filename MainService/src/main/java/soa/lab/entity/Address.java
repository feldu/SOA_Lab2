package soa.lab.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

@Data
@Entity
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "zip_code")
    @NotNull
    @Size(max = 30)
    private String zipCode;

    @OneToOne
    @JoinColumn(name = "town_id", referencedColumnName = "id")
    @NotNull
    private Location town;
}
