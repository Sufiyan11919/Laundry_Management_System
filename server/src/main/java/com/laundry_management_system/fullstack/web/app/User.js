package com.example.demo;

import com.google.cloud.spring.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name = "users") // Entity name set to "users"
public class User {
  @Id
  private Long id;

  private String name;
  private String phone;
  private String zipcode;
  private String address;
  private String googleId;

  // Default constructor (required for JPA)
  public User() {}

  // Constructor with parameters
  public User(String name, String phone, String zipcode, String address, String googleId) {
    this.name = name;
    this.phone = phone;
    this.zipcode = zipcode;
    this.address = address;
    this.googleId = googleId;
  }

  // Getters and setters
  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getPhone() {
    return phone;
  }

  public void setPhone(String phone) {
    this.phone = phone;
  }

  public String getZipcode() {
    return zipcode;
  }

  public void setZipcode(String zipcode) {
    this.zipcode = zipcode;
  }

  public String getAddress() {
    return address;
  }

  public void setAddress(String address) {
    this.address = address;
  }

  public String getGoogleId() {
    return googleId;
  }

  public void setGoogleId(String googleId) {
    this.googleId = googleId;
  }

  // toString method
  @Override
  public String toString() {
    return "User{" +
            "id=" + id +
            ", name='" + name + '\'' +
            ", phone='" + phone + '\'' +
            ", zipcode='" + zipcode + '\'' +
            ", address='" + address + '\'' +
            ", googleId='" + googleId + '\'' +
            '}';
  }
}
