-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 29, 2025 at 09:15 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sodalicious_db`
--
CREATE DATABASE IF NOT EXISTS `sodalicious_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `sodalicious_db`;

-- --------------------------------------------------------

--
-- Table structure for table `activity_logs`
--

DROP TABLE IF EXISTS `activity_logs`;
CREATE TABLE `activity_logs` (
  `id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `action` varchar(255) NOT NULL,
  `action_type` varchar(50) DEFAULT NULL,
  `entity_type` varchar(50) DEFAULT NULL,
  `entity_id` int(11) DEFAULT NULL,
  `details` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`details`)),
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `activity_logs`
--

INSERT INTO `activity_logs` (`id`, `user_id`, `action`, `action_type`, `entity_type`, `entity_id`, `details`, `created_at`) VALUES
(1, 1, 'Logged in', 'login', 'user', 1, '{\"ip\": \"192.168.1.100\", \"browser\": \"Chrome\"}', '2025-11-29 19:00:54'),
(2, 2, 'Viewed dashboard', 'view', 'dashboard', NULL, '{\"section\": \"sales\"}', '2025-11-29 19:00:54'),
(3, 3, 'Adjusted inventory for Café Latte', 'update', 'product', 2, '{\"change\": 10}', '2025-11-29 19:00:54'),
(4, 1, 'Completed order ORD-1764441862268', 'create', 'order', 1, '{\"total\": 826.00}', '2025-11-29 19:00:54');

-- --------------------------------------------------------

--
-- Table structure for table `inventory_logs`
--

DROP TABLE IF EXISTS `inventory_logs`;
CREATE TABLE `inventory_logs` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `user_id` int(11) DEFAULT NULL,
  `log_type` varchar(50) NOT NULL,
  `quantity_changed` int(11) NOT NULL,
  `previous_quantity` int(11) DEFAULT NULL,
  `new_quantity` int(11) DEFAULT NULL,
  `reason` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `inventory_logs`
--

INSERT INTO `inventory_logs` (`id`, `product_id`, `user_id`, `log_type`, `quantity_changed`, `previous_quantity`, `new_quantity`, `reason`, `created_at`) VALUES
(1, 2, 3, 'order_deduction', -8, 48, 40, 'Sold in ORD-1764441862268', '2025-11-29 17:00:54'),
(2, 4, 3, 'order_deduction', -1, 41, 40, 'Sold in ORD-1764441862268', '2025-11-29 17:00:54'),
(3, 3, 3, 'restock', 10, 35, 45, 'Inventory officer restocked', '2025-11-29 16:00:54'),
(4, 1, 3, 'restock', 5, 35, 40, 'Inventory officer restocked', '2025-11-29 15:00:54'),
(5, 1, 3, 'restock', 100, 1034, 1134, 'aaaaaaa', '2025-11-29 19:38:17');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `order_number` varchar(50) NOT NULL,
  `cashier_id` int(11) NOT NULL,
  `customer_name` varchar(255) DEFAULT NULL,
  `total_amount` decimal(12,2) NOT NULL,
  `payment_method` varchar(50) DEFAULT NULL,
  `order_status` varchar(50) DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `order_number`, `cashier_id`, `customer_name`, `total_amount`, `payment_method`, `order_status`, `created_at`, `updated_at`) VALUES
(1, 'ORD-1764441862268', 2, 'aaa', 826.00, 'cash', 'completed', '2025-11-29 17:00:54', '2025-11-29 19:00:54'),
(2, 'ORD-1764441900000', 1, 'Walk-in Customer', 450.00, 'cash', 'completed', '2025-11-29 18:00:54', '2025-11-29 19:00:54'),
(3, 'ORD-1764441950000', 1, 'Customer B', 600.00, 'gcash', 'pending', '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(4, 'ORD-1764444284508', 1, 'aaaa', 421.20, 'cash', 'pending', '2025-11-29 19:24:44', '2025-11-29 19:24:44'),
(5, 'ORD-1764445353935', 1, 'NEO CUIZON', 394.20, 'cash', 'pending', '2025-11-29 19:42:33', '2025-11-29 19:42:33'),
(6, 'ORD-1764445366782', 1, 'Walk-in Customer', 81.00, 'cash', 'pending', '2025-11-29 19:42:46', '2025-11-29 19:42:46');

-- --------------------------------------------------------

--
-- Table structure for table `order_items`
--

DROP TABLE IF EXISTS `order_items`;
CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `unit_price` decimal(10,2) NOT NULL,
  `subtotal` decimal(12,2) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `order_items`
--

INSERT INTO `order_items` (`id`, `order_id`, `product_id`, `quantity`, `unit_price`, `subtotal`, `created_at`) VALUES
(1, 1, 2, 8, 65.00, 520.00, '2025-11-29 19:00:54'),
(2, 1, 4, 1, 70.00, 70.00, '2025-11-29 19:00:54'),
(3, 1, 12, 1, 65.00, 65.00, '2025-11-29 19:00:54'),
(4, 1, 14, 1, 70.00, 70.00, '2025-11-29 19:00:54'),
(5, 2, 1, 5, 55.00, 275.00, '2025-11-29 19:00:54'),
(6, 2, 21, 3, 50.00, 150.00, '2025-11-29 19:00:54'),
(7, 2, 3, 1, 65.00, 65.00, '2025-11-29 19:00:54'),
(8, 3, 5, 2, 70.00, 140.00, '2025-11-29 19:00:54'),
(9, 3, 22, 4, 55.00, 220.00, '2025-11-29 19:00:54'),
(10, 3, 29, 2, 65.00, 130.00, '2025-11-29 19:00:54'),
(11, 4, 1, 6, 65.00, 390.00, '2025-11-29 19:24:44'),
(12, 5, 1, 3, 45.00, 135.00, '2025-11-29 19:42:33');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `category` varchar(100) NOT NULL,
  `price` decimal(10,2) NOT NULL,
  `description` text DEFAULT NULL,
  `stock_quantity` int(11) DEFAULT 0,
  `reorder_level` int(11) DEFAULT 10,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`id`, `name`, `category`, `price`, `description`, `stock_quantity`, `reorder_level`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Americano', 'Hot Coffee', 55.00, 'Classic Italian espresso with hot water', 1131, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:42:33'),
(2, 'Café Latte', 'Hot Coffee', 65.00, 'Smooth espresso with steamed milk', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(3, 'Cappuccino', 'Hot Coffee', 65.00, 'Espresso with equal parts milk and foam', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(4, 'Caramel Macchiato', 'Hot Coffee', 70.00, 'Rich espresso with caramel and steamed milk', 40, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(5, 'Mocha', 'Hot Coffee', 70.00, 'Espresso, steamed milk, and chocolate', 40, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(6, 'Espresso', 'Hot Coffee', 45.00, 'Pure concentrated espresso shots', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(7, 'Cortado', 'Hot Coffee', 50.00, 'Balanced espresso and steamed milk', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(8, 'Macchiato', 'Hot Coffee', 55.00, 'Espresso marked with a touch of milk foam', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(9, 'Flat White', 'Hot Coffee', 70.00, 'Silky smooth espresso with velvety microfoam', 40, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(10, 'Long Black', 'Hot Coffee', 55.00, 'Double espresso with hot water', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(11, 'Iced Americano', 'Iced Coffee', 55.00, 'Chilled espresso with ice water', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(12, 'Iced Latte', 'Iced Coffee', 65.00, 'Cold espresso with iced milk', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(13, 'Iced Cappuccino', 'Iced Coffee', 65.00, 'Chilled cappuccino with ice', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(14, 'Iced Caramel', 'Iced Coffee', 70.00, 'Caramel macchiato served over ice', 40, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(15, 'Iced Mocha', 'Iced Coffee', 70.00, 'Cold chocolate espresso drink', 40, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(16, 'Cold Brew', 'Iced Coffee', 60.00, 'Smooth slow-brewed cold coffee', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(17, 'Iced Cortado', 'Iced Coffee', 55.00, 'Balanced iced espresso and milk', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(18, 'Iced Macchiato', 'Iced Coffee', 60.00, 'Espresso marked with cold milk foam', 40, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(19, 'Affogato', 'Iced Coffee', 65.00, 'Vanilla ice cream topped with hot espresso', 40, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(20, 'Iced Flat White', 'Iced Coffee', 70.00, 'Silky cold espresso with ice milk', 40, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(21, 'Vanilla Cola', 'Sodas', 50.00, 'Classic vanilla flavored cola', 45, 15, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(22, 'Strawberry Fizz', 'Sodas', 55.00, 'Refreshing strawberry soda', 32, 15, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(23, 'Lemon Splash', 'Sodas', 50.00, 'Tangy lemon carbonated drink', 28, 15, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(24, 'Mango Paradise', 'Sodas', 60.00, 'Fresh mango flavored beverage', 25, 15, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(25, 'Berry Blast', 'Sodas', 60.00, 'Mixed berry carbonated drink', 22, 15, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(26, 'Mango Juice', 'Juices', 65.00, 'Fresh mango juice blend', 18, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(27, 'Berry Smoothie', 'Juices', 70.00, 'Mixed berry smoothie', 22, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(28, 'Orange Juice', 'Juices', 55.00, 'Fresh squeezed orange juice', 30, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(29, 'Pineapple Juice', 'Juices', 60.00, 'Tropical pineapple juice', 25, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(30, 'Watermelon Punch', 'Juices', 60.00, 'Refreshing watermelon juice', 20, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(31, 'Matcha Latte', 'Specialty', 75.00, 'Green matcha latte', 20, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(32, 'Bubble Tea Taro', 'Specialty', 85.00, 'Creamy taro bubble tea', 15, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(33, 'Boba Milk Tea', 'Specialty', 80.00, 'Classic milk tea with tapioca pearls', 18, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(34, 'Thai Tea', 'Specialty', 75.00, 'Sweet Thai iced tea', 25, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(35, 'Pistachio Latte', 'Specialty', 80.00, 'Creamy pistachio espresso drink', 15, 8, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(36, 'Croissant', 'Food', 85.00, 'Buttery French croissant', 20, 5, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(37, 'Chocolate Cake', 'Food', 120.00, 'Rich chocolate layer cake', 10, 3, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(38, 'Blueberry Muffin', 'Food', 90.00, 'Fresh blueberry muffin', 15, 5, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(39, 'Cheese Danish', 'Food', 95.00, 'Sweet cheese-filled danish pastry', 12, 4, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(40, 'Almond Cookie', 'Food', 60.00, 'Crispy almond butter cookie', 25, 10, 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `role` enum('cashier','manager','inventory_officer') NOT NULL DEFAULT 'cashier',
  `password_hash` varchar(255) DEFAULT NULL,
  `is_active` tinyint(1) DEFAULT 1,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `name`, `role`, `password_hash`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'cashier@sodalicious.com', 'Cassandra Silva', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(2, 'manager@sodalicious.com', 'Marcus Johnson', 'manager', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(3, 'inventory@sodalicious.com', 'Isabella Chen', 'inventory_officer', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54'),
(4, 'cashier2@sodalicious.com', 'Dante Rodriguez', 'cashier', '$2b$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcg7b3XeKeUxWdeS86E36P4/KFm', 1, '2025-11-29 19:00:54', '2025-11-29 19:00:54');

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_daily_sales`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `v_daily_sales`;
CREATE TABLE `v_daily_sales` (
`sale_date` date
,`order_count` bigint(21)
,`total_sales` decimal(34,2)
,`product_variety` bigint(21)
,`total_items_sold` decimal(32,0)
,`avg_order_value` decimal(13,2)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_orders_detailed`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `v_orders_detailed`;
CREATE TABLE `v_orders_detailed` (
`id` int(11)
,`order_number` varchar(50)
,`cashier_id` int(11)
,`cashier_name` varchar(255)
,`customer_name` varchar(255)
,`total_amount` decimal(12,2)
,`payment_method` varchar(50)
,`order_status` varchar(50)
,`created_at` timestamp
,`item_count` bigint(21)
,`total_qty` decimal(32,0)
);

-- --------------------------------------------------------

--
-- Stand-in structure for view `v_product_stock`
-- (See below for the actual view)
--
DROP VIEW IF EXISTS `v_product_stock`;
CREATE TABLE `v_product_stock` (
`id` int(11)
,`name` varchar(255)
,`category` varchar(100)
,`price` decimal(10,2)
,`stock_quantity` int(11)
,`reorder_level` int(11)
,`stock_status` varchar(6)
,`sales_last_7_days` bigint(21)
);

-- --------------------------------------------------------

--
-- Structure for view `v_daily_sales`
--
DROP TABLE IF EXISTS `v_daily_sales`;

DROP VIEW IF EXISTS `v_daily_sales`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_daily_sales`  AS SELECT cast(`o`.`created_at` as date) AS `sale_date`, count(distinct `o`.`id`) AS `order_count`, sum(`o`.`total_amount`) AS `total_sales`, count(distinct `oi`.`product_id`) AS `product_variety`, sum(`oi`.`quantity`) AS `total_items_sold`, round(avg(`o`.`total_amount`),2) AS `avg_order_value` FROM (`orders` `o` left join `order_items` `oi` on(`o`.`id` = `oi`.`order_id`)) WHERE `o`.`order_status` = 'completed' GROUP BY cast(`o`.`created_at` as date) ;

-- --------------------------------------------------------

--
-- Structure for view `v_orders_detailed`
--
DROP TABLE IF EXISTS `v_orders_detailed`;

DROP VIEW IF EXISTS `v_orders_detailed`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_orders_detailed`  AS SELECT `o`.`id` AS `id`, `o`.`order_number` AS `order_number`, `o`.`cashier_id` AS `cashier_id`, `u`.`name` AS `cashier_name`, `o`.`customer_name` AS `customer_name`, `o`.`total_amount` AS `total_amount`, `o`.`payment_method` AS `payment_method`, `o`.`order_status` AS `order_status`, `o`.`created_at` AS `created_at`, count(`oi`.`id`) AS `item_count`, sum(`oi`.`quantity`) AS `total_qty` FROM ((`orders` `o` left join `users` `u` on(`o`.`cashier_id` = `u`.`id`)) left join `order_items` `oi` on(`o`.`id` = `oi`.`order_id`)) GROUP BY `o`.`id`, `o`.`order_number`, `o`.`cashier_id`, `u`.`name`, `o`.`customer_name`, `o`.`total_amount`, `o`.`payment_method`, `o`.`order_status`, `o`.`created_at` ;

-- --------------------------------------------------------

--
-- Structure for view `v_product_stock`
--
DROP TABLE IF EXISTS `v_product_stock`;

DROP VIEW IF EXISTS `v_product_stock`;
CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `v_product_stock`  AS SELECT `p`.`id` AS `id`, `p`.`name` AS `name`, `p`.`category` AS `category`, `p`.`price` AS `price`, `p`.`stock_quantity` AS `stock_quantity`, `p`.`reorder_level` AS `reorder_level`, CASE WHEN `p`.`stock_quantity` <= `p`.`reorder_level` THEN 'LOW' WHEN `p`.`stock_quantity` <= `p`.`reorder_level` * 1.5 THEN 'MEDIUM' ELSE 'OK' END AS `stock_status`, (select count(0) from (`order_items` `oi` join `orders` `o` on(`oi`.`order_id` = `o`.`id`)) where `oi`.`product_id` = `p`.`id` and `o`.`created_at` >= current_timestamp() - interval 7 day) AS `sales_last_7_days` FROM `products` AS `p` WHERE `p`.`is_active` = 1 ;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_action_type` (`action_type`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indexes for table `inventory_logs`
--
ALTER TABLE `inventory_logs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_product_id` (`product_id`),
  ADD KEY `idx_user_id` (`user_id`),
  ADD KEY `idx_log_type` (`log_type`),
  ADD KEY `idx_created_at` (`created_at`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `order_number` (`order_number`),
  ADD KEY `idx_order_number` (`order_number`),
  ADD KEY `idx_cashier_id` (`cashier_id`),
  ADD KEY `idx_created_at` (`created_at`),
  ADD KEY `idx_order_status` (`order_status`);

--
-- Indexes for table `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idx_order_id` (`order_id`),
  ADD KEY `idx_product_id` (`product_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `idx_category` (`category`),
  ADD KEY `idx_name` (`name`),
  ADD KEY `idx_stock` (`stock_quantity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD KEY `idx_email` (`email`),
  ADD KEY `idx_role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `activity_logs`
--
ALTER TABLE `activity_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `inventory_logs`
--
ALTER TABLE `inventory_logs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `activity_logs`
--
ALTER TABLE `activity_logs`
  ADD CONSTRAINT `activity_logs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `inventory_logs`
--
ALTER TABLE `inventory_logs`
  ADD CONSTRAINT `inventory_logs_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `inventory_logs_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE SET NULL;

--
-- Constraints for table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`cashier_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `order_items`
--
ALTER TABLE `order_items`
  ADD CONSTRAINT `order_items_ibfk_1` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `order_items_ibfk_2` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
