package com.intern.admin.service;

import java.util.List;

import com.intern.admin.model.cartModel;

public interface CartService {

	public String deletecart(String id);

	public List<cartModel> getCartProducts(String id);

	public void addproduct(cartModel cartmodel);

	public cartModel getCartProductByID(String id);

	public List<cartModel> getitems(String uid);

}
