/* jshint -W117,-W030 */
describe('PeopleController', function () {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function () {
        module('app.people', bard.fakeToastr); //removed bard because it creates a empty $state & added bard.fateToastr to stop toastr
        bard.inject('$controller', '$log', '$q', '$rootScope');

        var ds = {
            getPeople: function () {
                return $q.when(people);
            }
        };

        controller = $controller('PeopleController', {
            dataservice: ds
        });
    });

    it('hello test', function () {
        expect('hello').to.equal('hello');
    });

    it('controller should exist', function () {
        expect(controller).to.exist;
    });

    it('should have empty people array before activation', function () {
        expect(controller.people).to.exist;
    });

    describe('after activation', function () {

        beforeEach(function () {
            bard.inject('$state');
            $rootScope.$apply();
        });

        it('should have people', function () {
            expect(controller.people).to.have.length.above(0);
        });

        it('should have mock people', function () {
            expect(controller.people).to.have.length(people.length);
        });

        it('selecting a person triggers state change', function () {
            controller.gotoPerson({
                id: 3
            });
            $rootScope.$apply();
            expect($state.current.name).to.be.equals('person');
            expect($state.is('person')).true;
        });

    });

});
