package com.example.demo;

import org.springframework.data.repository.CrudRepository;
import java.util.List;

public interface OrderRepository extends CrudRepository<Order, Long> {

    List<Order> findByGoogleId(String googleId);


}
