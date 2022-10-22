import {action, observable} from "mobx";
import axios from "axios";


export const orgsState = observable({
        orgs: observable([]),
        response: {isError: null, message: ""},

        fetchOrgs(params) {
            axios
                .get("https://localhost:31510/orgs", {params})
                .then(response => {
                    this.orgs = response.data;
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },

        addOrgs(params) {
            axios
                .post("https://localhost:31510/orgs", params)
                .then(response => {
                    this.orgs = [response.data];
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },
        updateOrgs(params) {
            axios
                .put("https://localhost:31510/orgs", params)
                .then(response => {
                    this.orgs = [response.data];
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },
        getOrgById(pathVariable) {
            axios
                .get(`https://localhost:31510/orgs/${pathVariable}`)
                .then(response => {
                    this.orgs = [response.data];
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },
        deleteOrgById(pathVariable) {
            axios
                .delete(`https://localhost:31510/orgs/${pathVariable}`)
                .then(response => {
                    this.orgs = [response.data];
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },

        deleteOrgsByAnal(params) {
            axios
                .delete("https://localhost:31510/orgs/annualTurnover", {params})
                .then(response => {
                    this.orgs = response.data;
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },
        getFilteredOrgsByAnal(pathVar1, pathVar2) {
            axios
                .get(`https://localhost:31511/orgdirectory/filter/turnover/${pathVar1}/${pathVar2}`)
                .then(response => {
                    this.orgs = response.data;
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },
        getFilteredOrgsByEmployees(pathVar1, pathVar2) {
            axios
                .get(`https://localhost:31511/orgdirectory/filter/employees/${pathVar1}/${pathVar2}`)
                .then(response => {
                    this.orgs = response.data;
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },

        getOrgsGroupCntByAddress() {
            axios
                .get("https://localhost:31510/orgs/group-count/by-address")
                .then(response => {
                    console.log(response.data)
                    this.orgs = []
                    this.response = {isError: false, message: `Groups: ${response.data}`}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
            });
        },

        getOrgsWhereTypeGreaterThanGiven(params) {
            axios
                .get("https://localhost:31510/orgs/type", {params})
                .then(response => {
                    this.orgs = response.data;
                    this.response = {isError: false, message: "Request successful"}
                }).catch(e => {
                this.orgs = [];
                if (e.response.status === 400)
                    this.response = {isError: true, message: "Bad request"};
                if (e.response.status === 404)
                    this.response = {isError: true, message: "Not found"};
                if (e.response.status === 500)
                    this.response = {isError: true, message: "Server error"};
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