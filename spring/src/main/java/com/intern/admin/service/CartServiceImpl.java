package com.intern.admin.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intern.admin.model.cartModel;
import com.intern.admin.repository.CartRepository;
import com.intern.admin.repository.ProductRepository;

@Service
public class CartServiceImpl implements CartService {

	@Autowired
	CartRepository cartrepository;
	
	@Autowired
	ProductRepository productrepository;
	
	@Transactional
	public String deletecart(String id) {
       cartrepository.deleteById(id);
        return "cart removed !! ";
    }

	@Transactional
	public List<cartModel> getCartProducts(String id) {
		// TODO Auto-generated method stub
		return cartrepository.getCartProducts(id);
	}

	public void addproduct(cartModel cartmodel) {
		cartrepository.save(cartmodel);
		//return "Saved SuccessFully";
	}

	public cartModel getCartProductByID(String id) {
		return cartrepository.getById(id);
	}
	
	@Override
	public List<cartModel> getitems(String userId){
		List<cartModel> cartlist=cartrepository.getCartProducts(userId);
		return cartlist;
	}

}
