(function () {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$scope', '$q', 'dataservice', 'logger'];

    /* @ngInject */
    function PeopleController($scope, $q, dataservice, logger) {
        var vm = this;
        vm.title = 'People';

        activate();

        getPeople();

        function getPeople() {
            dataservice.getPeople()
                .then(function (people) {
                    vm.people = people;
                    logger.success('got some people');
                });
        }

        ////////////////

        function activate() {
            logger.info('Activated People View', [$scope, vm]);
        }
    }
})();
