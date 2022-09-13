<?php 


session_start();
if(!isset($_SESSION['username'])){
	header('location:login.php');
}

?>


<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- =====BOX ICONS===== -->
        <link href='https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css' rel='stylesheet'>

        <!-- ===== CSS ===== -->
        <link rel="stylesheet" href="home.css">

        <!-- <HTA:APPLICATION
          APPLICATIONNAME="Run Exe or Batch files with Javascript and HTA"
          ID="MyHTMLapplication"
          VERSION="1.0"/> -->
    </head>

        <title>Landing Page Music for Mood</title>
    </head>
    <body>

         <!-- <div className="loader hidden">
            <img src="https://i.pinimg.com/originals/f9/16/55/f91655b438ef216cc2ccca1961eaa899.gif"alt="Loading..."/>
        </div> -->
        <!--===== HEADER =====-->
        <header class="l-header">
            <nav class="nav bd-grid">
                <div>
                    <a href="#" class="nav__logo"><img class="logo" src="images/logo.png"></a>
                </div>
                
                <div class="nav__toggle" id="nav-toggle">
                    <i class='bx bx-menu'></i>
                </div>

                <div class="nav__menu" id="nav-menu">
                    <div class="nav__close" id="nav-close">
                        <i class='bx bx-x'></i>
                    </div>

                    <ul class="nav__list">
                        <li class="nav__item"><a href="#home" id="page_active" class="nav__link" >Home</a></li>
                        <li class="nav__item"><a href="music.html" class="nav__link">Music Player</a></li>
                        <li class="nav__item"><a href="playlist.html" class="nav__link">Playlist</a></li>
                        <li class="nav__item"><a href="team.html" class="nav__link">Team</a></li>
                        <li class="nav__item"><a href="contact.html" class="nav__link">Contact</a></li>
                        <li class="nav__item"><a href="logout.php" class="nav__link">Logout</a></li>
                    </ul>
                </div>
            </nav>
        </header>

        <main class="l-main">
            <!--===== HOME =====-->
            <section class="home" id="home">
                <div class="home__container bd-grid">
                    <div class="home__img">
                        <img src="https://cdn.dribbble.com/users/102849/screenshots/4357693/untitled-1.gif" alt="" data-speed="-2" class="move">
                        <!-- <img src="https://i.pinimg.com/originals/f9/16/55/f91655b438ef216cc2ccca1961eaa899.gif" alt="" data-speed="-2" class="move"> -->
                        <!-- <img src="assets/img/img2.png" alt="" data-speed="2" class="move">
                        <img src="assets/img/img3.png" alt="" data-speed="2" class="move">
                        <img src="assets/img/img4.png" alt="" data-speed="-2" class="move">
                        <img src="assets/img/img7.png" alt="" data-speed="-2" class="move">
                        <img src="assets/img/img6.png" alt="" data-speed="2" class="move"> -->
                    </div>

                    <div class="home__data">
                        <h1 class="home__title">Welcome, <br><?php echo $_SESSION['username']; ?></h1>
                        <br><p class="home__description">Let's help discover the best music <br> based on your mood.</p>
                        <a href="../Run_Script.bat" class="home__button" style="cursor: pointer;">Get Started</a>
                    </div>
                </div>
            </section>
        </main>

        <!--===== GSAP =====-->
        <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js"></script>

        <!--===== MAIN JS =====-->
        <script src="home.js"></script>
            

        <script src="http://code.jquery.com/jquery-3.3.1.min.js" integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=" crossorigin="anonymous"></script>

        <!-- <script language="Javascript">
        function RunMe(){
            var xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
            var shell = new ActiveXObject("WScript.Shell");
            var path = '"file:C:/xampp/htdocs/emotion based music player/Run_Script.bat"';
            shell.run(path,1,false);
        }
        </script> -->

    </body>
</html>