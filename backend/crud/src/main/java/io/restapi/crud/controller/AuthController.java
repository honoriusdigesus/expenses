package io.restapi.crud.controller;

import io.restapi.crud.dto.ProfileDTO;
import io.restapi.crud.io.ProfileRequest;
import io.restapi.crud.io.ProfileResponse;
import io.restapi.crud.service.impl.ProfileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@Slf4j
@RequiredArgsConstructor
public class AuthController {

    private final ModelMapper modelMapper;
    private final ProfileService profileService;

    @PostMapping("/register")
    @ResponseStatus(HttpStatus.CREATED)
    @CrossOrigin("*")
    public ProfileResponse createProfile(@Valid @RequestBody ProfileRequest userRequest) {
        log.info("[AuthController] API POST: Create profile {}", userRequest);
        ProfileDTO userDTO = modelMapper.map(userRequest, ProfileDTO.class);
        return modelMapper.map(profileService.createProfile(userDTO), ProfileResponse.class);
    }
}
