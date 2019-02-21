MarsApp.controller('EquipementController', function( $scope, EquipementService, CategorieService) {

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

    $scope.equipements = [];
    $scope.lockEdit = false;
    var initEquipements = function () {
        var promise = EquipementService.getAllEquipement();
        promise.then(
            function (res) {
                $scope.equipements = res.data;
            },
            function (error) {
                console.log('failure init Equipement ', error)
            })
    };
    initEquipements();

    $scope.saveEquipement = function () {
        if ($scope.equipement.id != null) {
            var promise = EquipementService.updateEquipement($scope.equipement)
            promise.then(
                function (res) {
                    initEquipements();
                    $scope.equipement = null;
                },
                function (error) {
                    console.log('failure update ', error)
                })
        } else {
            var promise = EquipementService.createEquipement($scope.equipement);
            promise.then(
                function (res) {
                    $scope.equipements.push(res.data);
                    $scope.equipement = null;
                },
                function (error) {
                    console.log('failure create ', error)
                })
        }

    }

    $scope.detailEquipement = function (equip) {
        $scope.equipement = equip;
        $scope.lockEdit = true;
    }

    $scope.updateEquipement = function (equip) {
        $scope.lockEdit = false;
        $scope.equipement = equip;
    }

    $scope.resetForm = function () {
        $scope.lockEdit = false;
        $scope.equipement = null;
    }

    $scope.deleteEquipement = function (equip) {

        var promise = EquipementService.deleteEquipementById(equip.id);
        promise.then(
            function (res) {
                initEquipements();
            },
            function (error) {
                console.log('failure delete ', error)
            })
    }


});