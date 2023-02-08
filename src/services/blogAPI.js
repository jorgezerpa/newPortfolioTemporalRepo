import axios from "axios"
const BASE = 'https://api-portfolio.zerpacode.com'

export const getProjects = async() => {
    const { data } = await axios.get(`${BASE}/projects`)
    return data
}
export const getQuickProjects = async() => {
    const { data } = await axios.get(`${BASE}/quick-projects`)
    return data
}
export const getTestimonies = async() => {
    const { data } = axios.get(`${BASE}/testimonies`)
    return data
}
export const getProfile = async() => {
    const { data } = axios.get(`${BASE}/profile`)
    return data
}
