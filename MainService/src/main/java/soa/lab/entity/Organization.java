package soa.lab.entity;

import lombok.Data;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import javax.validation.constraints.DecimalMin;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@Entity
public class Organization {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    @NotNull
    @NotEmpty
    private String name;

    @OneToOne
    @JoinColumn(name = "coordinates_id", referencedColumnName = "id")
    @NotNull
    private Coordinates coordinates;

    @Column(name = "creation_date")
    @NotNull
    @CreatedDate
    private java.time.ZonedDateTime creationDate;

    @Column(name = "annual_turnover")
    @NotNull
    @DecimalMin(value = "0", inclusive = false)
    private Float annualTurnover;

    @Column(name = "type")
    private OrganizationType type;

    @OneToOne
    @JoinColumn(name = "address_id", referencedColumnName = "id")
    private Address officialAddress;
}
