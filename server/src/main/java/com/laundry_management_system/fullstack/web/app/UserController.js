package com.example.demo;

import java.util.ArrayList;
import java.util.List;
import org.springframework.web.bind.annotation.*;
import org.springframework.beans.factory.annotation.Autowired;

@RestController
public class UserController {
  private final UserRepository userRepository;

  @Autowired
  public UserController(UserRepository userRepository) {
    this.userRepository = userRepository;
  }

  @PostMapping("/saveUser")
  @CrossOrigin(origins = "*")
  public String saveUser(@RequestBody User user) {
    if (user == null) {
      return "The user data is invalid";
    }
    this.userRepository.save(user);
    return "User saved successfully";
  }

  @GetMapping("/findAllUsers")
  @ResponseBody
  @CrossOrigin(origins = "*")
  public List<User> findAllUsers() {
    Iterable<User> users = this.userRepository.findAll();
    List<User> userList = new ArrayList<>();
    users.forEach(userList::add);
    return userList;
  }
}
