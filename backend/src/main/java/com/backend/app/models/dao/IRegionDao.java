package com.backend.app.models.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.backend.app.models.entity.Region;

public interface IRegionDao extends JpaRepository<Region, Long> {
	
	

}
