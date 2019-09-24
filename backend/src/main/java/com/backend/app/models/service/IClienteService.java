package com.backend.app.models.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import com.backend.app.models.entity.Cliente;
import com.backend.app.models.entity.Factura;
import com.backend.app.models.entity.Producto;
import com.backend.app.models.entity.Region;

public interface IClienteService {
	public Cliente findOne(Long id);
	public List<Cliente> findAll();
	public Page<Cliente> findAll(Pageable pageable);
	public Cliente save(Cliente cliente);
	public void delete(Long id);
	public List<Region> finAllRegiones();
	public  Factura findFacturaById(Long id);
	public Factura savefactura(Factura factura);
	public void deleteFacturaById(Long id);

	public List<Producto> findProductoByNombre(String term);
}
