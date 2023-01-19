package com.springboot.customer.response;

import java.util.Set;

import com.springboot.customer.entity.Role;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserResponse {

	private long id;
	private String name;
	private String username;
	private String email;
	private Set<Role> roles;
}
