<?php
require __DIR__ .  '/testdb.php';
echo $dbc->getAttribute(PDO::ATTR_CONNECTION_STATUS) . "\n";