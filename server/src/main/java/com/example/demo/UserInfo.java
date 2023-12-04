package com.example.demo;

import com.google.cloud.spring.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name = "UserInfo")
public class UserInfo {
  @Id
  Long id;
  String googleId;
  String name;
  String phone;
  String zipcode;
  String address;

  public UserInfo(String googleId, String name, String phone, String zipcode, String address) {
    this.googleId = googleId;
    this.name = name;
    this.phone = phone;
    this.zipcode = zipcode;
    this.address = address;
  }

  public long getId() {
    return this.id;
  }
  
  public void setId(Long id) {
  	this.id=id;
  }
  
  public String getGoogleId() {
  	return this.googleId;
  }
  
  public void setGoogleId(String googleId) {
  	this.googleId=googleId;
  }

  public String getName() {
  	return this.name;
  }

  public void setName(String name) {
  	this.name=name;
  }

  public String getPhone() {
    return this.phone;
  }

  public void setPhone(String phone) {
    this.phone=phone;
  }

  public String getZipcode() {
    return this.zipcode;
  }

  public void setZipcode(String zipcode) {
    this.zipcode=zipcode;
  }

  public String getAddress() {
    return this.address;
  }

  public void setAddress(String address) {
    this.address=address;
  }

  @Override
  public String toString() {
    return "{" +
        "id:" + this.id +
        ", googleId:'" + this.googleId + '\'' +
        ", name:'" + this.name + '\'' +
            ", phone:'" + this.phone + '\'' +
            ", zipcode:'" + this.zipcode + '\'' +
            ", address:'" + this.address + '\'' +
        '}';
  }
}