package com.intern.admin.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

@Entity
@Table(name="cart")
public class cartModel {
	@Id
	@GeneratedValue(generator = "uuid")
    @GenericGenerator(name = "uuid", strategy = "uuid2")
	private String cartid;
	private String productName;
	private int quantity;
	private String price;
	private String userid;
	
	public cartModel() {
		
	}

	public String getCartid() {
		return cartid;
	}

	public void setCartid(String cartid) {
		this.cartid = cartid;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getUserid() {
		return userid;
	}

	public void setUserid(String userid) {
		this.userid = userid;
	}

	@Override
	public String toString() {
		return "cartModel [cartid=" + cartid + ", productName=" + productName + ", quantity=" + quantity + ", price="
				+ price + ", userid=" + userid + "]";
	}

	public cartModel(String productName, int quantity, String price, String userid) {
		super();
		this.productName = productName;
		this.quantity = quantity;
		this.price = price;
		this.userid = userid;
	}


	
	
}
