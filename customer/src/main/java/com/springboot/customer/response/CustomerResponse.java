package com.springboot.customer.response;

import java.util.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CustomerResponse {

	private Long id;

	private String firstName;

	private String lastName;

	private String city;

	private Date createAt;

	private Date updatedAt;
	
	private String description;
	
	private String phone;

}
