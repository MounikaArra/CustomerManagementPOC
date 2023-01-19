package com.springboot.customer.service;

import com.springboot.customer.payload.CustomerDto;
import com.springboot.customer.response.CustomerResponse;
import com.springboot.customer.response.CustomersResponse;

public interface CustomerService {
	CustomerResponse createCustomer(CustomerDto customerDto);

	CustomersResponse getAllCustomer(int pageNo, int pageSize, String sortBy, String sortDir);

	CustomerResponse getCustomerById(long id);

	CustomerResponse updateCustomer(CustomerDto customerDto, long id);

    void deleteCustomerById(long id);
}
