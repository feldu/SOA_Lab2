import {action, observable} from "mobx";
import axios from "axios";


export const orgsState = observable({
        orgs: observable([]),

        fetchOrgs(params) {
            axios
                .get("http://localhost:31510/orgs", {params})
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },

        addOrgs(params) {
            axios
                .post("http://localhost:31510/orgs", params)
                .then(response => {
                    this.orgs = [response.data];
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        updateOrgs(params) {
            axios
                .put("http://localhost:31510/orgs", params)
                .then(response => {
                    this.orgs = [response.data];
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        getOrgById(pathVariable) {
            axios
                .get(`http://localhost:31510/orgs/${pathVariable}`)
                .then(response => {
                    this.orgs = [response.data];
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        deleteOrgById(pathVariable) {
            axios
                .delete(`http://localhost:31510/orgs/${pathVariable}`)
                .then(response => {
                    this.orgs = [response.data];
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },

        deleteOrgsByAnal(params) {
            axios
                .delete("http://localhost:31510/orgs/annualTurnover", {params})
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        getFilteredOrgsByAnal(pathVar1, pathVar2) {
            axios
                .get(`http://localhost:31511/orgdirectory/filter/turnover/${pathVar1}/${pathVar2}`)
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        getFilteredOrgsByEmployees(pathVar1, pathVar2) {
            axios
                .get(`http://localhost:31511/orgdirectory/filter/employees/${pathVar1}/${pathVar2}`)
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },

        getOrgsGroupCntByAddress() {
            axios
                .get("http://localhost:31510/orgs/group-count/by-address")
                .then(response => {
                    console.log(response.data)
                    alert(`Groups: ${response.data}`);
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },

        getOrgsWhereTypeGreaterThanGiven(params) {
            axios
                .get("http://localhost:31510/orgs/type", {params})
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },

    },
    {
        fetchOrgs: action,
        addOrgs: action,
        updateOrgs: action,
        getOrgByIdOrgsById: action,
        deleteOrgById: action,
        deleteOrgsByAnal: action,
        getFilteredOrgsByAnal: action,
        getFilteredOrgsByEmployees: action,
    });