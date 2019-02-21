/**
 * Created by Siwar
 */
MarsApp.service('CategorieService', function ($rootScope, $http, environnement) {

    var uri = environnement.apiUrl + '/api-categorie/';
    return {
        getAllCategories: function getAllCategories() {
            return $http
                .get(uri + 'categories')
                .then(function (response) {
                    return response;
                });


        },
        getCategorieById: function getCategorieById(id) {
            return $http
                .get(uri + 'categorie/'+id)
                .then(function (response) {
                    return response;
                });
        },
        createCategorie: function createCategorie(categorie) {
            return $http
                .post(uri + 'categorie', categorie)
                .then(function (response) {
                    return response;
                });
        },
        updateCategorie: function updateCategorie(categorie) {
            return $http
                .put(uri + 'categorie', categorie)
                .then(function (response) {
                    return response;
                });
        },
        deleteCategorieById: function deleteCategorieById(id) {
            return $http
                .delete(uri + 'categorie/'+id)
                .then(function (response) {
                    return response;
                });
        }

    }
});