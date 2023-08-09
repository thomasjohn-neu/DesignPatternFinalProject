package com.inventory.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.inventory.model.PurchaseOrder;
import com.inventory.repository.ProductPORepository;
import com.inventory.repository.ProductRepository;
import com.inventory.repository.OrderRepository;
import com.inventory.designpattern.strategy.OrderStrategy;
import com.inventory.designpattern.strategy.InventoryStrategy;

@RestController
@RequestMapping("/purchaseOrder")
public class OrderController {

	@Autowired
	private ProductRepository productRepo;

	@Autowired
	private OrderRepository orderRepo;

	@Autowired
	private ProductPORepository productPORepo;

	@GetMapping("/getAll")
	public List<PurchaseOrder> getAll() {
		return orderRepo.getPurchaseOrders();
	}
	
	@GetMapping("/getPurchaseOrder/{id}")
	public PurchaseOrder getPurchaseOrder(@PathVariable int id) {
		return orderRepo.getPurchaseOrderbyID(id);
	}
	
	@PutMapping("/update")
	public void update(@RequestBody PurchaseOrder purchaseOrder) {
		InventoryStrategy strategy = new InventoryStrategy(new OrderStrategy(orderRepo, purchaseOrder));
		strategy.executeUpdate();
	}
	
	@DeleteMapping("/delete/{id}")
	public void deletebyID(@PathVariable int id) {
		InventoryStrategy strategy = new InventoryStrategy(new OrderStrategy(orderRepo, id));
		strategy.executeDelete();
	}

	@PostMapping("/save")
	public void save(@RequestBody PurchaseOrder purchaseOrder) {
		int id = orderRepo.save(purchaseOrder);
		PurchaseOrder insertedPO = orderRepo.getPurchaseOrderbyID(id);
		InventoryStrategy strategy = new InventoryStrategy(new OrderStrategy
				(orderRepo, productPORepo, productRepo, insertedPO ,purchaseOrder));
		strategy.executeAdd();
	}
}
