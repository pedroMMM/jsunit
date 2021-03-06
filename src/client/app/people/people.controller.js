(function () {
    'use strict';

    angular
        .module('app.people')
        .controller('PeopleController', PeopleController);

    PeopleController.$inject = ['$q', '$state', 'dataservice', 'logger'];

    /* @ngInject */
    function PeopleController($q, $state, dataservice, logger) {
        var vm = this;
        vm.title = 'People';
        vm.people = [];
        vm.gotoPerson = gotoPerson;

        activate();

        getPeople();

        ////////////////

        function activate() {
            logger.info('Activated People View');
        }

        function getPeople() {
            dataservice.getPeople()
                .then(function (people) {
                    vm.people = people;
                    logger.success('got some people');
                });
        }

        function gotoPerson(p) {
            $state.go('person', {
                id: p.id
            });
            logger.info('went to person: ' + p.id);
        }

    }
})();
