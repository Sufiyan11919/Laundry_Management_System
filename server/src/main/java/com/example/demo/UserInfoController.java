package com.example.demo;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/UserInfo")
public class UserInfoController {
  private final UserInfoRepository userInfoRepository;

  public UserInfoController(UserInfoRepository userInfoRepository) {
    this.userInfoRepository = userInfoRepository;
  }

  @PostMapping("/saveUserInfo")
  @CrossOrigin(origins = "*")
  public String saveUserInfo(@RequestBody UserInfo userInfo) {
    if (userInfo == null) {
      return "The userInfo are invalid";
    }
    this.userInfoRepository.save(userInfo);
    return "success";
  }

}