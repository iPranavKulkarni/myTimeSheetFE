import { config } from "../envVariables";
const url = config.url.API_URL;
export function getAllData() {
    return fetch(url + '/api/timesheetdatas/getAllData/', {
        method: 'GET'
    })
        .then(res => res.json())
}
export function getEmployess() {
    return fetch(url + '/api/timesheetdatas/getEmployees/', {
        method: 'GET'
    })
        .then(res => res.json())
}
export function getProjects() {
    return fetch(url + '/api/timesheetdatas/getProjects/', {
        method: 'GET'
    })
        .then(res => res.json())
}
export function getHours() {
    return fetch(url + '/api/timesheetdatas/getHours/', {
        method: 'GET'
    })
        .then(res => res.json())
}
export function getDescriptions() {
    return fetch(url + '/api/timesheetdatas/getDescriptions/', {
        method: 'GET'
    })
        .then(res => res.json())
}

export function addAllData(currentUser) {
    return fetch(url + '/api/timesheetdatas/addAllData', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser)
    })
        .then(res => res.json())
}
