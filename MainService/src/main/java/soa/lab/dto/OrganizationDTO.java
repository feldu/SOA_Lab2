package soa.lab.dto;

import lombok.Data;

@Data
public class OrganizationDTO {
    private long id;
    private String name;
    private CoordinatesDTO coordinates;
    private java.time.ZonedDateTime creationDate;
    private Float annualTurnover;
    private String type;
    private AddressDTO officialAddress;
}
