MarsApp.filter('priorityFilter', function () {
    return function (input) {
        if (typeof (input) === 'undefined') {
            return '--';
        }
         var priority = '';
        if (input === 1){
            priority = 'Priorité trés Eléve';
        }
        if (input === 2){
            priority = 'Priorité Eléve';
        }
        if (input === 3){
            priority = 'Priorité Modéré';
        }
        if (input === 4){
            priority = 'Priorité Faible';
        }
        if (input === 5){
            priority = 'Priorité Très Faible';
        }

        return priority;
    };
});
