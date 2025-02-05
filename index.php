<?php
include 'config.php';
$section = isset($_GET['section']) ? $_GET['section'] : 'privileges';
$products = json_decode(file_get_contents('../api/data/products.json'), true);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>KOSMOSTIMES - IP: kosmostimes.ddns.net 1.16-1.20</title>
    <!-- Иконка вкладки -->
    <link rel="icon" href="img/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
<?php include 'includes/header.php'; ?>
<main>
    <h1>KOSMOSTIMES</h1>
    <p>IP: kosmostimes.ddns.net 1.16-1.20</p>

    <!-- Меню выбора разделов -->
    <div class="tabs">
        <a href="index.php?section=privileges" class="tab" data-section="privileges">Привилегии</a>
        <a href="index.php?section=cases" class="tab" data-section="cases">Кейсы</a>
    </div>

    <!-- Отображение товаров -->
    <section class="products" id="product-section">
        <?php foreach ($products[$section] as $product): ?>
            <div class="product">
                <h2><?= htmlspecialchars($product['name']); ?></h2>
                <p class="price"><?= htmlspecialchars($product['price']); ?> ₽</p>
                <p><?= htmlspecialchars($product['description']); ?></p>
                <button>Купить</button>
            </div>
        <?php endforeach; ?>
    </section>
</main>
<?php include 'includes/footer.php'; ?>
<script src="script.js"></script>
</body>
</html>
