/**
 * Created by Siwar
 */
MarsApp.service('EquipementService', function ($rootScope, $http, environnement) {

    var uri = environnement.apiUrl + '/api-equipement/';
    return {
        getAllEquipement: function getAllEquipement() {
            return $http
                .get(uri + 'equipements')
                .then(function (response) {
                    return response;
                });
        },
        getEquipementById: function getEquipementById(id) {
            return $http
                .get(uri + 'equipement/' + id)
                .then(function (response) {
                    return response;
                });
        },
        createEquipement: function createEquipement(equip) {
            return $http
                .post(uri + 'equipement', equip)
                .then(function (response) {
                    return response;
                });
        },
        updateEquipement: function updateEquipement(equip) {
            return $http
                .put(uri + 'equipement', equip)
                .then(function (response) {
                    return response;
                });
        },
        deleteEquipementById: function deleteEquipementById(id) {
            return $http
                .delete(uri + 'equipement/' + id)
                .then(function (response) {
                    return response;
                });
        },
        getEquipementsByCategorie: function getEquipementsByCategorie(categ) {
            return $http
                .post(uri + 'equipement-by-categorie', categ)
                .then(function (response) {
                    return response;
                });
        }


    }
});
