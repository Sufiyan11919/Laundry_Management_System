package com.example.demo;

import java.util.Date;
import java.util.List;

import com.google.common.collect.Lists;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.shell.standard.ShellComponent;
import org.springframework.shell.standard.ShellMethod;
import java.time.LocalDateTime;

@ShellComponent
@SpringBootApplication
public class DemoApplication {
  @Autowired
  UserInfoRepository userInfoRepository;

  public static void main(String[] args) {
     SpringApplication.run(DemoApplication.class, args);
  }

}
