package com.intern.admin.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.intern.admin.model.ProductModel;
import com.intern.admin.repository.ProductRepository;

@Service
public class ProductServiceImpl implements ProductService {
	
	@Autowired
	ProductRepository productrepository;
	
	public ProductModel saveProduct(ProductModel product) {
        return productrepository.save(product);
    }

	    public ProductModel getProductById(String id) {
	        return productrepository.findById(id).orElse(null);
	    }
	    
	   public String deleteProduct(String id) {
	    	//ProductModel porduct
	       productrepository.deleteById(id);
	        return "product removed !! " + id;
	    }

	    public ProductModel updateProduct(ProductModel data) {
	        ProductModel productmodel = productrepository.findById(data.getProductId()).orElse(null);
	        productmodel.setProductId(data.getProductId());
	        productmodel.setImageUrl(data.getImageUrl());
		      productmodel.setProductName(data.getProductName());
		      productmodel.setPrice(data.getPrice());
		      productmodel.setDescription(data.getDescription());
		      productmodel.setQuantity(data.getQuantity());
	        return productrepository.save(productmodel);
	    }
}
