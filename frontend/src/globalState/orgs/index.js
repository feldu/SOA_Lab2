import {action, observable} from "mobx";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:31510";

export const orgsState = observable({
        orgs: observable([]),

        fetchOrgs(params) {
            axios
                .get("/orgs", {params})
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },

        addOrgs(params) {
            axios
                .post("/orgs", params)
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        updateOrgs(params) {
            axios
                .put("/orgs", params)
                .then(response => {
                    this.orgs = [response.data];
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        getOrgById(pathVariable) {
            axios
                .get(`/orgs/${pathVariable}`)
                .then(response => {
                    this.orgs = [response.data];
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },
        deleteOrgById(pathVariable) {
            axios
                .delete(`/orgs/${pathVariable}`)
                .then(response => {
                    this.orgs = [response.data];
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        },

        deleteOrgsByAnal(params) {
            axios
                .delete("/orgs/annualTurnover", {params})
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
    });