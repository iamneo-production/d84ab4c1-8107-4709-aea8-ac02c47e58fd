package com.intern.admin.service;

import com.intern.admin.model.ProductModel;

public interface ProductService {

	public ProductModel saveProduct(ProductModel data);

	public ProductModel getProductById(String id);

	public ProductModel updateProduct(ProductModel data);

	public String deleteProduct(String id);

}
