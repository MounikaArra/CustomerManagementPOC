package com.springboot.customer.payload;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Data;
import lombok.ToString;

@ToString
@Data
public class CustomerDto {
	private long id;

	@NotEmpty
	@Size(min = 2, message = " first name should have at least 2 characters")
	private String firstName;

	
	@NotEmpty
	private String lastName;

	@NotEmpty
	@Size(min = 3, message = "city should have at least 3 characters")
	private String city;

	private String description;

	private String phone;
}
