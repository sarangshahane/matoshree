<header class="kopa-header-04">
	<div class="bottom-header style-04">
		<div class="container">
			<div class="pull-left">
				<h1 class="kopa-logo">
					<a href="index.php">
						<img src="img/matoshree-logo.png" alt="matoshree-logo">
					</a>
				</h1>
			</div>
			<div class="pull-right">
				<nav class="kopa-main-menu style-04">
					<ul>
						<li class="<?php if( isset( $pageTitle ) && $pageTitle == "Home" ){ ?>current-menu-item <?php } ?>">
							<a href="index.php">Home</a>
						</li>
						
						<li class="<?php if( isset( $pageTitle ) && $pageTitle == "About" || $pageTitle == "Professors" ){ ?>current-menu-item <?php } ?>">
							<a href="about.php">About</a>
							<ul>
								<li><a href="about.php">About US</a></li>
								<li><a href="professors.php">Professors</a></li>
							</ul>
						</li>
						
						<li class="<?php if( isset( $pageTitle ) && $pageTitle == "Dpharm" ){ ?>current-menu-item <?php } ?>">
							<a href="#">Academics</a>
							<ul>
								<li><a href="dpharm.php">D-Pharm</a></li>
							</ul>
						</li>
						
						<li class="<?php if( isset( $pageTitle ) && $pageTitle == "Contact" ){ ?>current-menu-item <?php } ?>" >
							<a href="contact.php">Contact</a>
						</li>
						
					</ul>
				</nav>
				<div class="kopa-hamburger-menu">
					<i class="fa fa-bars"></i>
				</div>
			</div>
		</div>
	</div>
</header>
<!-- On scroll Menu -->
<div id="kopa-menu-scroll">
    <div class="kopa-close-menu-scroll">
        <span>close x</span>
    </div>
    <div class="top-menu-scroll">
    	<div class="kopa-social-links style-03">
		    <ul class="clearfix">
		        <li><span>Social</span></li>
		        <li><a href="#" class="fa fa-twitter"></a></li>
		        <li><a href="#" class="fa fa-google-plus"></a></li>
		        <li><a href="#" class="fa fa-rss"></a></li>
		    </ul>
		</div>
        <ul class="kopa-menu-click">
            <li ><a href="index.php">Home</a></li> <!-- class="menu-item-has-children" -->
            <li class="menu-item-has-children">
            	<a href="#">About</a>
				<ul>
					<li><a href="about.php">About US</a></li>
					<li><a href="professors.php">Professors</a></li>
				</ul>
            </li>
            <li class="menu-item-has-children">
				<a href="#">Academics</a>
				<ul>
					<li><a href="dpharm.php">D-Pharm</a></li>
				</ul>
			</li>
            <li><a href="contact.php">Contact</a></li>
        </ul>
    </div>
    <!-- <form>
    	<button type="submit" class="btn"><i class="fa fa-search"></i></button>
        <input type="text" placeholder="Search courses">
    </form>
    <div class="widget kopa-widget-banner">
    	<div class="widget-content module-banner-01">
    		<ul class="kopa-banner">
	        	<li>
	        		<span>100%</span>
	        		<div>
	        			<h4>MONEY BACK GUARANTEE</h4>
	        			<p>No hassles, no question asked!</p>
	        		</div>
	        	</li>
	        	<li>
	        		<h4>EARN UP TO <span>35%</span></h4>
	        		<p>Sign up our affiliate program</p>
	        	</li>
	        </ul>
    	</div>
    </div> -->
</div>