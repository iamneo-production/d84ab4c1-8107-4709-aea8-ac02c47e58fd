package com.intern.admin.controller;

import java.util.Iterator;
import java.util.List;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intern.admin.model.OrderModel;
import com.intern.admin.model.cartModel;
import com.intern.admin.repository.OrderRepository;
import com.intern.admin.service.CartService;
import com.intern.admin.service.OrderService;

@RestController
@RequestMapping("/order")
@CrossOrigin("*")
public class OrderController {
	
	@Autowired
	private OrderRepository orderRepository;
    
	@Autowired
    public OrderService orderService;

	@Autowired
	private CartService cartservice;
	
	@GetMapping(value = "/admin/orders")
	public List<OrderModel> getAllOrders() {
		return orderRepository.findAll();
	}
	
    @GetMapping("/orders/{userId}")
    public ResponseEntity<List<OrderModel>> getUserProducts(@PathVariable String userId){
        List<OrderModel>orderlist=orderService.getUserOrders(userId);
        return new ResponseEntity<List<OrderModel>>(orderlist, HttpStatus.OK);
    }
    
    @PostMapping("/saveOrder/{uid}")
    public String saveProductString(@PathVariable String uid) {
    	List<cartModel> clist=cartservice.getitems(uid);
    	Iterator<cartModel> iterator=clist.iterator();
    	while(iterator.hasNext()) {
    	cartModel cm=iterator.next();
    	cartModel cartitem=cartservice.getCartProductByID(cm.getCartid());
    	OrderModel orderitem=new OrderModel();
    	orderitem.setPrice(cartitem.getPrice());
    	orderitem.setProductName(cartitem.getProductName());
    	orderitem.setQuantity(cartitem.getQuantity());
    	orderitem.setUserId(cartitem.getUserid());
    	int total=Integer.parseInt(cartitem.getPrice())*cartitem.getQuantity();
    	String totalprice=String.valueOf(total);
    	orderitem.setTotalPrice(totalprice);
    	String status="Order Placed";
    	orderitem.setStatus(status);
    	Random rd = new Random();
    	orderitem.setOrderId(String.valueOf(rd.nextInt()));
    	orderService.saveCartToOrder(orderitem);
    	}
    	return "Cart Item added to Order!!!";
    }
    
    @PostMapping("/placeOrder")
    public String placeOrder(@RequestBody OrderModel ordermodel) {
    	orderService.placeOrder(ordermodel);
    	return "Order Placed!!!";
    }
    
    
}
