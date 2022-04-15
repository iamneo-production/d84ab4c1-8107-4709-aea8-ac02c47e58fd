package com.intern.admin.model;


import javax.persistence.*;
 
@Entity
@Table(name="product")
public class ProductModel {
	@Id
	@Column(name = "id", unique = true, nullable = false)
	private String productId;
	@Column(name = "imageUrl")
	private String imageUrl;
	@Column(name = "productname", nullable = false)
	private String productName;
	@Column(name = "price", nullable = false)
	private String price;
	@Column(name = "description")
	private String description;
	@Column(name = "quantity")
	private String quantity;
	public ProductModel() {
		
	}
	public ProductModel(String productId, String imageUrl, String productName, String price, String description,
			String quantity) {
		super();
		this.productId = productId;
		this.imageUrl = imageUrl;
		this.productName = productName;
		this.price = price;
		this.description = description;
		this.quantity = quantity;
	}
	public String getProductId() {
		return productId;
	}
	public void setProductId(String productId) {
		this.productId = productId;
	}
	public String getImageUrl() {
		return imageUrl;
	}
	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getPrice() {
		return price;
	}
	public void setPrice(String price) {
		this.price = price;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getQuantity() {
		return quantity;
	}
	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}
}
