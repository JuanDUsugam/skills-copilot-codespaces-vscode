function skillsMember(){
    return{
        restrict: 'E',
        templateUrl: 'templates/skills-member.html',
        controller: 'SkillsMemberCtrl',
        controllerAs: 'skillsMemberCtrl',
        brindToController: true,
        scope: {
            member: '='
        }   
    };
}