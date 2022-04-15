package com.intern.admin.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.intern.admin.model.OrderModel;
import com.intern.admin.repository.CartRepository;
import com.intern.admin.repository.OrderRepository;

@Service
public class OrderServiceImpl implements OrderService{
    @Autowired
    private OrderRepository orderRepository;
    @Autowired
    private CartRepository cartRepository;
    
    @Override
    public List<OrderModel>getUserOrders(String userId){
        List<OrderModel> orderlist=orderRepository.findUserId(userId);
        return orderlist;
    }

    @Override
    public OrderModel getItemonCart(String cartItemId) {
        return null;
    }

	@Override
	public void saveCartToOrder(OrderModel orderitem) {
		orderRepository.save(orderitem);
	}

	@Override
	public void placeOrder(OrderModel ordermodel) {
		orderRepository.save(ordermodel);
		
	}
}
