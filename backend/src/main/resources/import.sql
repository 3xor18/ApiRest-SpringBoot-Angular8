/* Populate tabla clientes */

INSERT INTO regiones (id, nombre) VALUES (1, 'Sudamérica');
INSERT INTO regiones (id, nombre) VALUES (2, 'Centroamérica');
INSERT INTO regiones (id, nombre) VALUES (3, 'Norteamérica');
INSERT INTO regiones (id, nombre) VALUES (4, 'Europa');
INSERT INTO regiones (id, nombre) VALUES (5, 'Asia');
INSERT INTO regiones (id, nombre) VALUES (6, 'Africa');
INSERT INTO regiones (id, nombre) VALUES (7, 'Oceanía');
INSERT INTO regiones (id, nombre) VALUES (8, 'Antártida');

INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(1, 'Andrés', 'Guzmán', 'profesor@bolsadeideas.com', '2018-01-01','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(2, 'Mr. John', 'Doe', 'john.doe@gmail.com', '2018-01-02','2.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(4, 'Linus', 'Torvalds', 'linus.torvalds@gmail.com', '2018-01-03','3.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(4, 'Rasmus', 'Lerdorf', 'rasmus.lerdorf@gmail.com', '2018-01-04','4.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(4, 'Erich', 'Gamma', 'erich.gamma@gmail.com', '2018-02-01','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(3, 'Richard', 'Helm', 'richard.helm@gmail.com', '2018-02-10','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(3, 'Ralph', 'Johnson', 'ralph.johnson@gmail.com', '2018-02-18','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(3, 'John', 'Vlissides', 'john.vlissides@gmail.com', '2018-02-28','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(3, 'Dr. James', 'Gosling', 'james.gosling@gmail.com', '2018-03-03','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(5, 'Magma', 'Lee', 'magma.lee@gmail.com', '2018-03-04','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(6, 'Tornado', 'Roe', 'tornado.roe@gmail.com', '2018-03-05','1.jpg');
INSERT INTO clientes (region_id, nombre, apellido, email, create_at,foto) VALUES(7, 'Jade', 'Doe', 'jane.doe@gmail.com', '2018-03-06','1.jpg');

/* Creamos algunos usuarios con sus roles */
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('3xor','$2a$10$C3Uln5uqnzx/GswADURJGOIdBqYrly9731fnwKDaUdBkt/M3qvtLq',1, '3xor', 'oldsystem','profesor@gmail.com');
INSERT INTO `usuarios` (username, password, enabled, nombre, apellido, email) VALUES ('admin','$2a$10$RmdEsvEfhI7Rcm9f/uZXPebZVCcPC7ZXZwV51efAvMAp1rIaRAfPK',1, 'John', 'Doe','jhon.doe@bolsadeideas.com');

INSERT INTO `roles` (nombre) VALUES ('ROLE_USER');
INSERT INTO `roles` (nombre) VALUES ('ROLE_ADMIN');

INSERT INTO `usuarios_roles` (usuario_id, role_id) VALUES (1, 1);
INSERT INTO `usuarios_roles` (usuario_id, role_id) VALUES (2, 2);
INSERT INTO `usuarios_roles` (usuario_id, role_id) VALUES (2, 1);

INSERT INTO productos (nombre,precio,create_at) VALUES ('Panasonic LCD',20000,'2018-02-10');
INSERT INTO productos (nombre,precio,create_at) VALUES ('MAC i400',30000,'2018-02-10');
INSERT INTO productos (nombre,precio,create_at) VALUES ('Iphone',32000,'2018-02-10');
INSERT INTO productos (nombre,precio,create_at) VALUES ('Mouse lg',5000,'2018-02-10');
INSERT INTO productos (nombre,precio,create_at) VALUES ('Hard Disk kindond',1000,'2018-02-10');
INSERT INTO productos (nombre,precio,create_at) VALUES ('USB 4gb',500,NOW());

INSERT INTO facturas(descripcion,observacion,cliente_id,create_at)VALUES ('Factura Equipos de Oficina',null,1,now());
INSERT INTO facturas_items(cantidad,factura_id,producto_id)VALUES(1,1,1);
INSERT INTO facturas_items(cantidad,factura_id,producto_id)VALUES(2,1,4);
INSERT INTO facturas_items(cantidad,factura_id,producto_id)VALUES(1,1,5);
INSERT INTO facturas_items(cantidad,factura_id,producto_id)VALUES(1,1,6);


INSERT INTO facturas(descripcion,observacion,cliente_id,create_at)VALUES ('Factura Bicicleta','Nota Importante',1,now());
INSERT INTO facturas_items(cantidad,factura_id,producto_id)VALUES(3,2,4);