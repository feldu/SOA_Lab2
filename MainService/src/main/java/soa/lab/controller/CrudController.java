package soa.lab.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import soa.lab.dto.OrganizationDTO;
import soa.lab.entity.Organization;
import soa.lab.service.OrganizationService;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/")
public class CrudController {
    private final OrganizationService organizationService;

    @Autowired
    public CrudController(OrganizationService organizationService) {
        this.organizationService = organizationService;
    }

    @GetMapping("/orgs")
    public ResponseEntity<List<Organization>> getOrgs() {
        return new ResponseEntity<>(organizationService.getOrgs(), HttpStatus.OK);
    }

    @PostMapping("/orgs")
    public ResponseEntity<Organization> addOrg(@RequestBody OrganizationDTO orgDTO) {
        //todo: ex handling (IllegalArgumentException, ConstraintViolationException, PropertyValueException, ...)
        Organization org = new Organization(orgDTO);
        return new ResponseEntity<>(organizationService.addOrg(org), HttpStatus.OK);
    }

    @PutMapping("/orgs")
    public ResponseEntity<Organization> updateOrg(@RequestBody OrganizationDTO orgDTO) {
        Organization orgUpd = new Organization(orgDTO);
        return new ResponseEntity<>(organizationService.updateOrg(orgDTO.getId(), orgUpd), HttpStatus.OK);
    }

    @GetMapping("/orgs/{id}")
    public ResponseEntity<Organization> getOrgById(@PathVariable Long id) {
        return new ResponseEntity<>(organizationService.getOrgById(id), HttpStatus.OK);
    }

    @DeleteMapping("/orgs/{id}")
    public ResponseEntity<Organization> deleteOrgById(@PathVariable Long id) {
        return new ResponseEntity<>(organizationService.deleteOrgById(id), HttpStatus.OK);
    }
}