
import apiClient from "../config/api-client.ts";
import {Profile} from "../model/Profile.ts";

export const createProfile=(profile:Profile) =>{
    return apiClient.post<Profile>("/register", profile);
}