package com.backend.app.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.backend.app.models.entity.Factura;

public interface IFacturaDao extends CrudRepository<Factura, Long> {

}
