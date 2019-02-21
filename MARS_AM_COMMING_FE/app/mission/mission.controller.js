MarsApp.controller('MissionController', function ($scope, MissionService, CategorieService, EquipementService, $filter) {

    $scope.missions = [];
    $scope.lockEdit = false;
    $scope.mission = {};

    var initMissions = function () {
        var promise = MissionService.getAllMissions();
        promise.then(
            function (res) {
                $scope.missions = res.data;
            },
            function (error) {
                console.log('failure getting all', error)
            })
    };
    initMissions();

    $scope.saveMission = function () {
        var mission = angular.copy($scope.mission);
        mission.debut = $filter('date')($scope.mission.debut, "yyyy-MM-dd");
        mission.fin = $filter('date')($scope.mission.fin, "yyyy-MM-dd");
        if (mission.id != null) {
            var promise = MissionService.updateMission(mission)
            promise.then(
                function (res) {
                    initMissions();
                    reset();
                },
                function (error) {
                    console.log('failure update ', error)
                })
        } else {
            var promise = MissionService.createMission(mission);
            promise.then(
                function (res) {
                    initMissions();
                    reset();
                },
                function (error) {
                    console.log('failure create ', error)
                })
        }

    }

    $scope.showLimitesPoidsMsg = false;
    var controlePoidsFunction = function () {
        if ($scope.mission.totalPoids > $scope.mission.limitePoid) {
            $scope.showLimitesPoidsMsg = true;
        } else {
            $scope.showLimitesPoidsMsg = false;
        }
    }
    $scope.controlLimite = function () {
        controlePoidsFunction();
    }

    $scope.detailMission = function (mission) {
        $scope.mission = mission;
        $scope.mission.debut = new Date(mission.debut);
        $scope.mission.fin = new Date(mission.fin);
        $scope.lockEdit = true;
    }

    $scope.updateMission = function (mission) {
        $scope.lockEdit = false;
        $scope.mission = mission;
        $scope.mission.debut = new Date(mission.debut);
        $scope.mission.fin = new Date(mission.fin);
    }
    var reset = function () {
        $scope.lockEdit = false;
        $scope.mission = {};
        $scope.equip = {};
        $scope.mission.equipementList = [];
        $scope.mission.nombreTotal = 0;
        $scope.mission.totalPoids = 0;
        $scope.showLimitesPoidsMsg = false;
    }
    $scope.resetForm = function () {
        reset();
    }

    $scope.deleteMission = function (mission) {

        var promise = MissionService.deleteMissionById(mission.id);
        promise.then(
            function (res) {
                initMissions();
            },
            function (error) {
                console.log('failure delete ', error)
            })
    }


    ////////// Equipement Management ////////////////
    $scope.mission.equipementList = [];
    $scope.equip = {};
    $scope.mission.nombreTotal = 0;
    $scope.mission.totalPoids = 0;

    $scope.addEquipement = function () {

        $scope.equip.poidsEquipement = $scope.equip.equipement.poids * $scope.equip.nombre;
        $scope.mission.nombreTotal = $scope.mission.nombreTotal + $scope.equip.nombre;

        $scope.mission.totalPoids = $scope.mission.totalPoids + $scope.equip.poidsEquipement;

        $scope.mission.equipementList.push($scope.equip);
        $scope.equip = {};
        controlePoidsFunction();
    }

    $scope.removeEquipement = function (index) {
        var equip = $scope.mission.equipementList[index];
        $scope.mission.nombreTotal = $scope.mission.nombreTotal - equip.nombre;

        $scope.mission.totalPoids = $scope.mission.totalPoids - equip.poidsEquipement;

        $scope.mission.equipementList.splice(index, 1);
        controlePoidsFunction()
    }

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


    $scope.getEquiementByCategorie = function (categ) {

        var promise = EquipementService.getEquipementsByCategorie(categ);
        promise.then(
            function (res) {
                $scope.equipementsReferentiel = res.data;
            },
            function (error) {
                console.log('failure getEquiementByCategori ', error)
            })
    }


});