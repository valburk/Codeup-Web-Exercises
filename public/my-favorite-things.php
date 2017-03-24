<?php

$favs = [ 'cats', 'boys', 'chinese food', 'netflix', 'driving' ];


?>
<!DOCTYPE html>
<html>
<head>
    <title>Codeup!</title>
</head>
<body>
    <?php foreach ($favs as $fav) { ?>

        <li> <?php echo $fav; ?> </li>
    <?php } ?>
</h1>
</body>
</html>