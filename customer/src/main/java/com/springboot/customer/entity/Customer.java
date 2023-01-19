package com.springboot.customer.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "customers")
public class Customer {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "firstName", nullable = false)
    private String firstName;

    @Column(name = "lastName", nullable = false)
    private String lastName;

    @Column(name = "city", nullable = false)
    private String city;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "phone", nullable = false)
    private String phone;

    @Column(name = "createAt", nullable = false)
    private Date createAt;

    @Column(name = "updatedAt", nullable = false)
    private Date updatedAt;

}
