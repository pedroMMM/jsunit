/* jshint -W117,-W030 */
describe.only('PeopleController', function () {
    var controller;
    var people = mockData.getMockPeople();

    beforeEach(function () {
        bard.appModule('app.people');
        bard.inject('$controller', '$log', '$q', '$rootScope', 'dataservice');
    });

    it('hello test', function () {
        expect('hello').to.equal('hello');
    });

    it('hello test - will not pass', function () {
        expect('hello').to.equal('bye');
    });

});
