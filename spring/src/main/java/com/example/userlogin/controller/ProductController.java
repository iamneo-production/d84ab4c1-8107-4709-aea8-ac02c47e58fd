package com.intern.admin.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intern.admin.model.ProductModel;
import com.intern.admin.repository.ProductRepository;
import com.intern.admin.service.ProductService;


@RestController
@RequestMapping("/products")
@CrossOrigin("*")
public class ProductController {

	@Autowired
	private ProductRepository productRepository;
	
	@Autowired
	private ProductService service;
	
	
	@GetMapping("/admin")
	public List<ProductModel> getProduct() {
		return productRepository.findAll();
	}
	
	
	@GetMapping("/home")
	public List<ProductModel> getHomeProduct() {
		return productRepository.findAll();
	}
	
	@PostMapping("/admin/addProduct")
    public ProductModel productSave(@RequestBody ProductModel data) {
        return service.saveProduct(data);
    }
 
	@GetMapping("/admin/productEdit/{id}")
    public ProductModel productEditData(@PathVariable String id) {
        return service.getProductById(id);
    }
 
	@PostMapping("/admin/productEdit/{id}")
	public ProductModel productEditSave(@RequestBody ProductModel data) {
        return service.updateProduct(data);
    }
	@GetMapping("/admin/findProduct/{id}")
	public ResponseEntity<ProductModel> productFind(@PathVariable String id){
		try{
			ProductModel data=service.getProductById(id);
			return new ResponseEntity<ProductModel>(data, HttpStatus.OK);
		}
		catch(NoSuchElementException e){
			return new ResponseEntity<ProductModel>(HttpStatus.NOT_FOUND);
		}
	}
 
 
  @GetMapping("/admin/delete/{id}")
    public String productDelete(@PathVariable String id) {
        return service.deleteProduct(id);
    }

}
	


