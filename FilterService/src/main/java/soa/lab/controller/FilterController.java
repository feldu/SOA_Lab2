package soa.lab.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import soa.lab.entity.Organization;
import soa.lab.service.FilterService;

import java.util.List;

@Slf4j
@RestController
@RequestMapping("/orgdirectory")
public class FilterController {
    private final FilterService filterService;

    @Autowired
    public FilterController(FilterService filterService) {
        this.filterService = filterService;
    }

    @GetMapping("/filter/turnover/{min-annual-turnover}/{max-annual-turnover}")
    public ResponseEntity<List<Organization>> filterOrgsByTurnover(@PathVariable("min-annual-turnover") Float min, @PathVariable("max-annual-turnover") Float max) {
        return new ResponseEntity<>(filterService.filterOrgsByTurnover(min, max), HttpStatus.OK);
    }

    @GetMapping("/filter/employees/{min-employees-count}/{max-employees-count}")
    public ResponseEntity<List<Organization>> filterOrgsByEmployeesCount(@PathVariable("min-employees-count") Float min, @PathVariable("max-employees-count") Float max) {
        return new ResponseEntity<>(filterService.filterOrgsByEmployeesCount(min, max), HttpStatus.OK);
    }
}
