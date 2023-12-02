package com.example.demo;

import com.google.cloud.spring.data.datastore.core.mapping.Entity;
import org.springframework.data.annotation.Id;

@Entity(name = "orders")
public class Order {
    @Id
    private Long id;
    private String googleId; // User's Google ID

    private int shirtQuantity;
    private boolean shirtWash;
    private boolean shirtIron;
    private boolean shirtPack;

    private int pantQuantity;
    private boolean pantWash;
    private boolean pantIron;
    private boolean pantPack;

    private int coatQuantity;
    private boolean coatWash;
    private boolean coatIron;
    private boolean coatPack;

    public Order() {
        // Default constructor required for JPA
    }

    // Getters and setters for ID
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    // Getters and setters for Google ID
    public String getGoogleId() {
        return googleId;
    }

    public void setGoogleId(String googleId) {
        this.googleId = googleId;
    }

    // Getters and setters for shirtQuantity
    public int getShirtQuantity() {
        return shirtQuantity;
    }

    public void setShirtQuantity(int shirtQuantity) {
        this.shirtQuantity = shirtQuantity;
    }

    // Getters and setters for shirtWash
    public boolean isShirtWash() {
        return shirtWash;
    }

    public void setShirtWash(boolean shirtWash) {
        this.shirtWash = shirtWash;
    }

    // Getters and setters for shirtIron
    public boolean isShirtIron() {
        return shirtIron;
    }

    public void setShirtIron(boolean shirtIron) {
        this.shirtIron = shirtIron;
    }

    // Getters and setters for shirtPack
    public boolean isShirtPack() {
        return shirtPack;
    }

    public void setShirtPack(boolean shirtPack) {
        this.shirtPack = shirtPack;
    }

    // Getters and setters for pantQuantity
    public int getPantQuantity() {
        return pantQuantity;
    }

    public void setPantQuantity(int pantQuantity) {
        this.pantQuantity = pantQuantity;
    }

    // Getters and setters for pantWash
    public boolean isPantWash() {
        return pantWash;
    }

    public void setPantWash(boolean pantWash) {
        this.pantWash = pantWash;
    }

    // Getters and setters for pantIron
    public boolean isPantIron() {
        return pantIron;
    }

    public void setPantIron(boolean pantIron) {
        this.pantIron = pantIron;
    }

    // Getters and setters for pantPack
    public boolean isPantPack() {
        return pantPack;
    }

    public void setPantPack(boolean pantPack) {
        this.pantPack = pantPack;
    }

    // Getters and setters for coatQuantity
    public int getCoatQuantity() {
        return coatQuantity;
    }

    public void setCoatQuantity(int coatQuantity) {
        this.coatQuantity = coatQuantity;
    }

    // Getters and setters for coatWash
    public boolean isCoatWash() {
        return coatWash;
    }

    public void setCoatWash(boolean coatWash) {
        this.coatWash = coatWash;
    }

    // Getters and setters for coatIron
    public boolean isCoatIron() {
        return coatIron;
    }

    public void setCoatIron(boolean coatIron) {
        this.coatIron = coatIron;
    }

    // Getters and setters for coatPack
    public boolean isCoatPack() {
        return coatPack;
    }

    public void setCoatPack(boolean coatPack) {
        this.coatPack = coatPack;
    }
}
