<!DOCTYPE html>
<html lang="fr-FR">
    <head>
<?php include 'templates/head.html'?>
        <link rel="stylesheet" href="css/index.css">
        <title>Barbet Sacha</title>
    </head>

    <body>
        
        <header>
            <div id="langBox">
                <select name="langSelect" id="langSelect">
                    <option value="fr" selected>FR</option>
                    <option value="en">EN</option>
                </select>
            </div>

            <div id="themeBox">
                <label>
                    <input type="checkbox">
                    <span id="switchSlider"></span>
                </label>
            </div>
		</header>

        <main>
            <nav>
                <ul class="center">
                    <li>ACCUEIL</li>
                    <li>FORMATIONS</li>
                    <li>CARRIÈRE</li>
                    <li>PROJETS</li>
                    <li>ME CONTACTER</li>
                </ul>
                <a href="authors.php">CGU</a>
            </nav>

            <div id="contentBox" class="center">
                <section id="sectionMain">
                    <h1>Bienvenue sur le portfolio de Barbet Sacha</h1>
                </section>
            </div>
        </main>

        <footer>
            
        </footer>
    </body>
</html>