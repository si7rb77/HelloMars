/**
 * Created by Siwar
 */
MarsApp.service('MissionService', function ($rootScope, $http, environnement) {

    var uri = environnement.apiUrl + '/api-mission/';
    return {
        getAllMissions: function getAllMissions() {
            return $http
                .get(uri + 'missions')
                .then(function (response) {
                    return response;
                });


        },
        getMissiontById: function getMissionById(id) {
            return $http
                .get(uri + 'mission/' + id)
                .then(function (response) {
                    return response;
                });
        },
        createMission: function createMission(mission) {
            return $http
                .post(uri + 'mission/', mission)
                .then(function (response) {
                    return response;
                });
        },
        updateMission: function updateMission(mission) {
            return $http
                .put(uri + 'mission/', mission)
                .then(function (response) {
                    return response;
                });
        },
        deleteMissionById: function deleteMissionById(id) {
            return $http
                .delete(uri + 'mission/' + id)
                .then(function (response) {
                    return response;
                });
        }

    }
});
