package soa.lab.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class Location {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "x")
    @NotNull
    private Integer x;

    @Column(name = "y")
    @NotNull
    private Float y;

    @Column(name = "name")
    @NotNull
    @NotEmpty
    private String name;
}
