\COPY grocery_items(name, price, section) FROM './grocery.csv' DELIMITER ',' CSV HEADER

INSERT INTO shoppers (name) VALUES ('Aldrich');
INSERT INTO shoppers (name) VALUES ('Joshua');
INSERT INTO shoppers (name) VALUES ('Carol');
INSERT INTO shoppers (name) VALUES ('Steven');
INSERT INTO shoppers (name) VALUES ('Rachel');
INSERT INTO shoppers (name) VALUES ('Wallace');


INSERT INTO orders (shopper_id) VALUES (1);
INSERT INTO orders (shopper_id) VALUES (2);
INSERT INTO orders (shopper_id) VALUES (2);
INSERT INTO orders (shopper_id) VALUES (2);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (3);
INSERT INTO orders (shopper_id) VALUES (4);
INSERT INTO orders (shopper_id) VALUES (4);
INSERT INTO orders (shopper_id) VALUES (4);
INSERT INTO orders (shopper_id) VALUES (4);
INSERT INTO orders (shopper_id) VALUES (5);
INSERT INTO orders (shopper_id) VALUES (6);
INSERT INTO orders (shopper_id) VALUES (6);
INSERT INTO orders (shopper_id) VALUES (6);


INSERT INTO order_list (grocery_id, order_id) VALUES (38, 1);
INSERT INTO order_list (grocery_id, order_id) VALUES (23, 1);

INSERT INTO order_list (grocery_id, order_id) VALUES (12, 2);
INSERT INTO order_list (grocery_id, order_id) VALUES (7, 2);
INSERT INTO order_list (grocery_id, order_id) VALUES (15, 2);
INSERT INTO order_list (grocery_id, order_id) VALUES (33, 2);

INSERT INTO order_list (grocery_id, order_id) VALUES (16, 3);
INSERT INTO order_list (grocery_id, order_id) VALUES (34, 3);
INSERT INTO order_list (grocery_id, order_id) VALUES (24, 3);

INSERT INTO order_list (grocery_id, order_id) VALUES (12, 4);
INSERT INTO order_list (grocery_id, order_id) VALUES (34, 4);
INSERT INTO order_list (grocery_id, order_id) VALUES (36, 4);
INSERT INTO order_list (grocery_id, order_id) VALUES (7, 4);
INSERT INTO order_list (grocery_id, order_id) VALUES (18, 4);
INSERT INTO order_list (grocery_id, order_id) VALUES (27, 4);

INSERT INTO order_list (grocery_id, order_id) VALUES (37, 5);
INSERT INTO order_list (grocery_id, order_id) VALUES (29, 5);
INSERT INTO order_list (grocery_id, order_id) VALUES (12, 5);
INSERT INTO order_list (grocery_id, order_id) VALUES (27, 5);

INSERT INTO order_list (grocery_id, order_id) VALUES (1, 6);
INSERT INTO order_list (grocery_id, order_id) VALUES (30, 6);
INSERT INTO order_list (grocery_id, order_id) VALUES (34, 6);
INSERT INTO order_list (grocery_id, order_id) VALUES (5, 6);

INSERT INTO order_list (grocery_id, order_id) VALUES (18, 7);
INSERT INTO order_list (grocery_id, order_id) VALUES (23, 7);
INSERT INTO order_list (grocery_id, order_id) VALUES (10, 7);
INSERT INTO order_list (grocery_id, order_id) VALUES (3, 7);

INSERT INTO order_list (grocery_id, order_id) VALUES (21, 8);
INSERT INTO order_list (grocery_id, order_id) VALUES (29, 8);
INSERT INTO order_list (grocery_id, order_id) VALUES (15, 8);
INSERT INTO order_list (grocery_id, order_id) VALUES (5, 8);

INSERT INTO order_list (grocery_id, order_id) VALUES (14, 9);
INSERT INTO order_list (grocery_id, order_id) VALUES (33, 9);
INSERT INTO order_list (grocery_id, order_id) VALUES (1, 9);
INSERT INTO order_list (grocery_id, order_id) VALUES (17, 9);

INSERT INTO order_list (grocery_id, order_id) VALUES (19, 10);
INSERT INTO order_list (grocery_id, order_id) VALUES (26, 10);
INSERT INTO order_list (grocery_id, order_id) VALUES (41, 10);
INSERT INTO order_list (grocery_id, order_id) VALUES (2, 10);

INSERT INTO order_list (grocery_id, order_id) VALUES (24, 11);
INSERT INTO order_list (grocery_id, order_id) VALUES (14, 11);
INSERT INTO order_list (grocery_id, order_id) VALUES (3, 11);
INSERT INTO order_list (grocery_id, order_id) VALUES (38, 11);

INSERT INTO order_list (grocery_id, order_id) VALUES (11, 12);
INSERT INTO order_list (grocery_id, order_id) VALUES (27, 12);
INSERT INTO order_list (grocery_id, order_id) VALUES (19, 12);
INSERT INTO order_list (grocery_id, order_id) VALUES (29, 12);

INSERT INTO order_list (grocery_id, order_id) VALUES (39, 13);
INSERT INTO order_list (grocery_id, order_id) VALUES (20, 13);
INSERT INTO order_list (grocery_id, order_id) VALUES (8, 13);
INSERT INTO order_list (grocery_id, order_id) VALUES (5, 13);

INSERT INTO order_list (grocery_id, order_id) VALUES (25, 14);
INSERT INTO order_list (grocery_id, order_id) VALUES (7, 14);
INSERT INTO order_list (grocery_id, order_id) VALUES (31, 14);
INSERT INTO order_list (grocery_id, order_id) VALUES (28, 14);
