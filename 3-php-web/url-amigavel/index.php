<html>

<head>
	<title>Home</title>
	<meta charset="utf-8">
</head>

<body>

<header>
		<nav>
			<ul>
				<li><a href="home">Home</a></li>
				<li><a href="sobre_empresa">Sobre a Empresa</a></li>
				<li><a href="blog">Blog</a></li>
				<li><a href="contato">Contato</a></li>
			</ul>
		</nav>
	</header>

	<main>
		<?php
			$url = (isset($_GET['url'])) ? $_GET['url'] : 'home';
			$url = array_filter(explode('/', $url));
			/*var_dump($url);*/

			$file = 'pages/'.$url[0] . '.php';

			if (is_file($file)) {
			include $file;
			} else {
			include 'pages/404.php';
			}
		?>
		</main>
</body>

</html>