package com.springboot.customer.service.impl;

import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.springboot.customer.entity.Customer;
import com.springboot.customer.exception.ResourceNotFoundException;
import com.springboot.customer.payload.CustomerDto;
import com.springboot.customer.repository.CustomerRepository;
import com.springboot.customer.response.CustomerResponse;
import com.springboot.customer.response.CustomersResponse;
import com.springboot.customer.service.CustomerService;

@Service
public class customerServiceImpl implements CustomerService {

    private CustomerRepository customerRepository;

    private ModelMapper mapper;

    public customerServiceImpl(CustomerRepository customerRepository, ModelMapper mapper) {
          this.customerRepository = customerRepository;
          this.mapper = mapper;
    }

    @Override
    public CustomerResponse createCustomer(CustomerDto customerDto) {

        // convert DTO to entity
        Customer customer = mapToEntity(customerDto);
        customer.setCreateAt(new Date());
        customer.setUpdatedAt(new Date());
        Customer newPost = customerRepository.save(customer);

        // convert entity to DTO
        CustomerResponse postResponse = mapToResponse(newPost);
        return postResponse;
    }

    @Override
    public CustomersResponse getAllCustomer(int pageNo, int pageSize, String sortBy, String sortDir) {

        Sort sort = sortDir.equalsIgnoreCase(Sort.Direction.ASC.name()) ? Sort.by(sortBy).ascending()
                : Sort.by(sortBy).descending();

        // create Pageable instance
        Pageable pageable = PageRequest.of(pageNo, pageSize, sort);

        Page<Customer> customers = customerRepository.findAll(pageable);

        // get content for page object
        List<Customer> listOfCustomers = customers.getContent();

        List<CustomerResponse> content= listOfCustomers.stream().map(post -> mapToResponse(post)).collect(Collectors.toList());

        CustomersResponse postResponse = new CustomersResponse();
        postResponse.setContent(content);
        postResponse.setPageNo(customers.getNumber());
        postResponse.setPageSize(customers.getSize());
        postResponse.setTotalElements(customers.getTotalElements());
        postResponse.setTotalPages(customers.getTotalPages());
        postResponse.setLast(customers.isLast());
        return postResponse;
    }

    @Override
    public CustomerResponse getCustomerById(long id) {
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer", "id", id));
        System.out.println("Cutomer is "+ customer.toString());
        
        return mapToResponse(customer);
    }

    @Override
    public CustomerResponse updateCustomer(CustomerDto customerDto, long id) {
        // get post by id from the database
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer", "id", id));

        customer.setFirstName(customerDto.getFirstName());
        customer.setLastName(customerDto.getLastName());
        customer.setCity(customerDto.getCity());
        customer.setDescription(customerDto.getDescription());
        customer.setUpdatedAt(new Date());
        Customer updatedPost = customerRepository.save(customer);
        return mapToResponse(updatedPost);
    }

    @Override
    public void deleteCustomerById(long id) {
        // get post by id from the database
        Customer customer = customerRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Customer", "id", id));
        customerRepository.delete(customer);
    }

    // convert DTO to entity
    private Customer mapToEntity(CustomerDto customerDto){
        Customer customer = mapper.map(customerDto, Customer.class);
        return customer;
    }
    
    
    // convert DTO to response
    private CustomerResponse mapToResponse(Customer newPost){
    	CustomerResponse customer = mapper.map(newPost, CustomerResponse.class);
        return customer;
    }
    
}
