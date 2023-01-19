package com.springboot.customer.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springboot.customer.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
