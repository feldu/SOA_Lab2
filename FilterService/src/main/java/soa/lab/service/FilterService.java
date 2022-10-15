package soa.lab.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;
import soa.lab.entity.Organization;
import soa.lab.exception.DataNotFoundException;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class FilterService {
    private final WebClient localApiClient;

    @Autowired
    public FilterService(WebClient localApiClient) {
        this.localApiClient = localApiClient;
    }


    public List<Organization> filterOrgsByTurnover(Float min, Float max) {
        Organization[] responseBody = getOrganizationsFromMainService();
        return Arrays.stream(responseBody).filter(o -> o.getAnnualTurnover() >= min && o.getAnnualTurnover() <= max).collect(Collectors.toList());
    }

    public List<Organization> filterOrgsByEmployeesCount(Float min, Float max) {
        Organization[] responseBody = getOrganizationsFromMainService();
        return Arrays.stream(responseBody).filter(o -> o.getEmployeesCount() >= min && o.getEmployeesCount() <= max).collect(Collectors.toList());
    }

    private Organization[] getOrganizationsFromMainService() {
        Organization[] responseBody = localApiClient.get()
                .uri("/orgs")
                .accept(MediaType.APPLICATION_JSON)
                .retrieve()
                .bodyToMono(Organization[].class)
                .block();
        if (responseBody == null)
            throw new DataNotFoundException("Organizations not found");
        return responseBody;
    }
}