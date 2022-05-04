package com.intern.admin.service;


import java.util.List;


import com.intern.admin.model.OrderModel;

public interface OrderService {
    
	public List<OrderModel> getUserOrders(String userId);
    
	public OrderModel getItemonCart(String cartItemId);

	public void saveCartToOrder(OrderModel orderitem);

	public void placeOrder(OrderModel ordermodel);

	
}
