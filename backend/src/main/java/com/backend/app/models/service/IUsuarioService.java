package com.backend.app.models.service;

import com.backend.app.models.entity.Usuario;

public interface IUsuarioService {

	public Usuario findByUsername(String username);
}
