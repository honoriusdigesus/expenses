package io.restapi.crud.service.impl;

import io.restapi.crud.dto.ProfileDTO;
import io.restapi.crud.entity.ProfileEntity;
import io.restapi.crud.repository.ProfileRepository;
import io.restapi.crud.service.interfaces.IProfileRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
@Slf4j
@RequiredArgsConstructor
public class ProfileService implements IProfileRepository {

    private final ProfileRepository profileRepository;
    private final ModelMapper modelMapper;

    /**
     * @param profileDTO 
     * @return
     */
    @Override
    public ProfileDTO createProfile(ProfileDTO profileDTO) {
        log.info("[ProfileService] Create profile {}", profileDTO);
        ProfileEntity profileEntity = modelMapper.map(profileDTO, ProfileEntity.class);
        profileEntity.setProfileId(UUID.randomUUID().toString());
        return modelMapper.map(profileRepository.save(profileEntity), ProfileDTO.class);
    }
}
