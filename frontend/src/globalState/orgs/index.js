import {action, observable} from "mobx";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:31510";

export const orgsState = observable({
        orgs: [],
        fetchOrgs(params) {
            axios
                .get("/orgs", {params})
                .then(response => {
                    this.orgs = response.data;
                    console.log(response.data)
                }).catch(e => {
                alert(e.message + ": " + e.response.data.message)
            });
        }
    },
    {
        orgs: observable,
        fetchOrgs: action
    });