package soa.lab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import soa.lab.entity.Organization;
import soa.lab.exception.DataNotFoundException;
import soa.lab.repository.OrganizationRepository;

import java.util.List;

@Service
public class OrganizationService {
    private final OrganizationRepository organizationRepository;

    @Autowired
    public OrganizationService(OrganizationRepository organizationRepository) {
        this.organizationRepository = organizationRepository;
    }

    public List<Organization> getOrgs() {
        return organizationRepository.findAll();
    }

    public Organization getOrgById(Long id) {
        return organizationRepository.findById(id).orElseThrow(() -> new DataNotFoundException(String.format("Organization with id %d not found", id)));
    }

    public Organization addOrg(Organization org) {
        return organizationRepository.save(org);
    }

    public Organization updateOrg(Long id, Organization orgUpd) {
        return organizationRepository.findById(id)
                .map(org -> {
                    org.setName(orgUpd.getName());
                    org.getCoordinates().setX(orgUpd.getCoordinates().getX());
                    org.getCoordinates().setY(orgUpd.getCoordinates().getY());
                    org.setCreationDate(orgUpd.getCreationDate());
                    org.setAnnualTurnover(orgUpd.getAnnualTurnover());
                    org.setType(orgUpd.getType());
                    org.getOfficialAddress().getTown().setX(orgUpd.getOfficialAddress().getTown().getX());
                    org.getOfficialAddress().getTown().setY(orgUpd.getOfficialAddress().getTown().getY());
                    org.getOfficialAddress().getTown().setName(orgUpd.getOfficialAddress().getTown().getName());
                    org.getOfficialAddress().setZipCode(orgUpd.getOfficialAddress().getZipCode());
                    return organizationRepository.save(org);
                })
                .orElseGet(() -> {
                    orgUpd.setId(id);
                    return organizationRepository.save(orgUpd);
                });
    }

    public Organization deleteOrgById(Long id) {
        Organization organization = getOrgById(id);
        organizationRepository.deleteById(id);
        return organization;
    }
}
