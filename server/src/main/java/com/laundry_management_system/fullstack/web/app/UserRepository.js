package com.example.demo;

import java.util.List;
import com.google.cloud.spring.data.datastore.repository.DatastoreRepository;

public interface UserRepository extends DatastoreRepository<User, Long> {

  // Find users by name
  List<User> findByName(String name);

  // Find users by zipcode

}
