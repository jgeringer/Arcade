<!DOCTYPE html>
<html ng-app="ArcadeControls">
<head>
	<title>Arcade Controls</title>
	<?php include 'head.php'; ?>
</head>

<body ng-controller="MainController">

	<div class="outer-container">

	<header>
		<i class="fa fa-2x fa-navicon"></i>
		<img src="/assets/img/icons/icon-hyperspin.png" />
		<h1>Hyperspin</h1>
	</header>

	<nav>
		<div>
		<ol class="game-grid">
			<li ng-repeat="x in games | orderBy: 'game' " ng-click="showControls(x.game)">
				<a href="#" data-game="{{x.game}}">
					<img ng-src="{{x.iconpath}}" />
					<!--{{error}}-->
				</a>
			</li>
		</ol>

	</div>
	</nav>

	<div class="controls-container">
		<div class="controls">
			<img src="/assets/img/controls/controls.png" />
		</div>

		<div class="lines">

			<div ng-class="{active: button.buttonp1coin}" class="button-p1-coin">
				<span>{{button.buttonp1coin}}</span>
			</div>

			<div ng-class="{active: button.buttonp1start}" class="button-p1-start">
				<span>{{button.buttonp1start}}</span>
			</div>

			<div ng-class="{active: button.buttonadmin1}" class="button-admin1">
				<span>{{button.buttonadmin1}}</span>
			</div>

			<div ng-class="{active: button.buttonadmin2}" class="button-admin2">
				<span>{{button.buttonadmin2}}</span>
			</div>

			<div ng-class="{active: button.buttonadmin3}" class="button-admin3">
				<span>{{button.buttonadmin3}}</span>
			</div>

			<div ng-class="{active: button.button1}" class="button-1">
				<span>{{button.button1}}</span>
			</div>

			<div ng-class="{active: button.button2}" class="button-2">
				<span>{{button.button2}}</span>
			</div>

			<div ng-class="{active: button.button3}" class="button-3">
				<span>{{button.button3}}</span>
			</div>

			<div ng-class="{active: button.button4}" class="button-4">
				<span>{{button.button4}}</span>
			</div>

			<div ng-class="{active: button.button5}" ng-class="{active: button.button1}" class="button-5">
				<span>{{button.button5}}</span>
			</div>

			<div ng-class="{active: button.button6}" class="button-6">
				<span>{{button.button6}}</span>
			</div>

		</div>

		<img src="/assets/img/controls/controls-background-lr.jpg" />
	</div>

	</div>

</body>
</html>
