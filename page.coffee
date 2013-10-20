
app = angular.module 'test_angular_animation', ['ngAnimate']

app.controller 'mycontroller', ($scope,$timeout)->

	$scope.things = []


	add = $scope.add = (r)->
		if not r?
			r = Math.random()
		newthing = String(r).substr(2,5)
		$scope.things.push newthing

		$scope.things.sort()
	
	remove = $scope.remove = (x)->

		if x?
			i = $scope.things.indexOf x
		else
			# remove a random element
			i = Math.floor(Math.random()*$scope.things.length)			

		$scope.things.splice(i,1)


	$timeout ->
		$scope.h1 = true
	, 2000

	for i in [1..9]
		$timeout add, i * 200


