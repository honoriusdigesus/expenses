package io.restapi.crud.service.interfaces;

import io.restapi.crud.dto.ProfileDTO;

public interface IProfileRepository {
    ProfileDTO createProfile(ProfileDTO profileDTO);
}
