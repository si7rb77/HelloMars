MarsApp.controller('DashboardController', function ($scope, HomeService, MissionService, CategorieService) {
    var initMissions = function () {
        var promise = MissionService.getAllMissions();
        promise.then(
            function (res) {
                $scope.missions = res.data;
            },
            function (error) {
                console.log('failure', error)
            })
    };
    initMissions();
    var initCategories = function () {
        var promise = CategorieService.getAllCategories();
        promise.then(
            function (res) {
                $scope.categories = res.data;
            },
            function (error) {
                console.log('failure ', error)
            })
    };
    initCategories();

    $scope.initCharts = function (mission) {
        var piedata = [];
            angular.forEach( mission.equipementList, function (eq) {
                piedata.push({
                    name: eq.equipement.categorie.name,
                    y: ( eq.nombre/ mission.nombreTotal * 100 )
                });
            });

        Highcharts.chart('containerPie', {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: 'Pourcentage Equipement Par Catégorie'
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.y:.1f}%</b>'
            },
            plotOptions: {
                pie: {
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.y:.1f} %',
                        style: {
                            color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                        },
                        connectorColor: 'silver'
                    }
                }
            },
            series: [{
                name: 'Pourentage',
                data: piedata
            }]
        });

        var nbrEquipCategData = [];
        var poidsCategData = [];
        var categoriePriority1 = [];
        var categoriePriority2 = [];
        var categoriePriority3 = [];
        var categoriePriority4 = [];
        var categoriePriority5 = [];
        angular.forEach($scope.categories, function (cat) {
            var nbr = 0;
            var piods = 0;
            angular.forEach(mission.equipementList, function (eqmis) {
                if (cat.id === eqmis.equipement.categorie.id) {
                    nbr = nbr + eqmis.nombre;
                    piods = piods = eqmis.poidsEquipement;
                }
            });
            nbrEquipCategData.push([cat.name, nbr])
            poidsCategData.push([cat.name, piods])
        });
        var priority1 = 0;
        var priority2 = 0;
        var priority3 = 0;
        var priority4 = 0;
        var priority5 = 0;
        angular.forEach(mission.equipementList, function (eqmis) {
            if (eqmis.equipement.categorie.priority === 1) {
                priority1++;
            }
            if (eqmis.equipement.categorie.priority === 2) {
                priority2++;
            }
            if (eqmis.equipement.categorie.priority === 3) {
                priority3++;
            }
            if (eqmis.equipement.categorie.priority === 4) {
                priority4++;
            }
            if (eqmis.equipement.categorie.priority === 5) {
                priority5++;
            }
        });
        categoriePriority1.push(['Trés Elévé', priority1])
        categoriePriority5.push(['Trés Faible', priority5])
        categoriePriority4.push(['Faible', priority4])
        categoriePriority3.push(['Modéré', priority3])
        categoriePriority2.push(['Elévé', priority2])

        Highcharts.chart('nbrequicategoriecontainer', {
            title: {
                text: 'Nombre Equipement par Catégorie'
            },
            yAxis: [
                {
                    title: {
                        text: 'Nombre Equipements'
                    }
                }
            ],
            series: [{
                name: 'Nombre',
                data: nbrEquipCategData
            }
            ]
        });

        Highcharts.chart('poidsequicategoriecontainer', {
            title: {
                text: 'Poids Equipement par Catégorie'
            },
            yAxis: [
                {
                    title: {
                        text: 'Poids Equipements'
                    }
                }
            ],
            series: [{
                name: 'Poids(kg)',
                data: poidsCategData
            }
            ]
        });

        Highcharts.chart('prioritycategoriecontainer', {
            chart: {
                zoomType: 'x',
                alignTicks: false,
                type: 'column'
            },
            title: {
                text: 'Nombre Equipements par Priorité'
            },
            yAxis: [
                {
                    title: {
                        text: 'Nombre Equipements'
                    }
                }
            ],
            series: [{
                name: 'Trés Elévé',
                color: 'red',
                data: categoriePriority1
            }, {
                name: 'Elévé',
                color: 'orange',
                data: categoriePriority2
            }, {
                name: 'Modéré',
                color: 'yellow',
                data: categoriePriority3
            }, {
                name: 'Faible',
                color: 'green',
                data: categoriePriority4
            }, {
                name: 'Trés Faible',
                color: 'blue',
                data: categoriePriority5
            }
            ]
        });

    }
});