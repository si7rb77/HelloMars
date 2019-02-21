MarsApp.controller('CategorieController', function ($scope, CategorieService) {

    $scope.categories = [];
    $scope.lockEdit = false;
    var initCategories = function () {
        var promise = CategorieService.getAllCategories();
        promise.then(
            function (res) {
                $scope.categories = res.data;
            },
            function (error) {
                console.log('failure create Categorie ', error)
            })
    };
    initCategories();

    $scope.saveCategorie = function () {
        if ($scope.categorie.id != null) {
            var promise = CategorieService.updateCategorie($scope.categorie);
            promise.then(
                function (res) {
                    initCategories();
                    $scope.categorie = null;
                },
                function (error) {
                    console.log('failure create Categorie ', error)
                })
        } else {
            var promise = CategorieService.createCategorie($scope.categorie);
            promise.then(
                function (res) {
                    $scope.categories.push(res.data);
                    $scope.categorie = null;
                },
                function (error) {
                    console.log('failure create Categorie ', error)
                })
        }

    }

    $scope.detailCategorie = function (categ) {
        $scope.categorie = categ;
        $scope.lockEdit = true;
    }

    $scope.updateCategorie = function (categ) {
        $scope.lockEdit = false;
        $scope.categorie = categ;
    }

    $scope.resetForm = function () {
        $scope.lockEdit = false;
        $scope.categorie = null;
    }

    $scope.deleteCategorie = function (categ) {

        var promise = CategorieService.deleteCategorieById(categ.id);
        promise.then(
            function (res) {
                initCategories();
            },
            function (error) {
                console.log('failure delete Categorie ', error)
            })
    }


});