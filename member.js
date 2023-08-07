function skillsMember() {
  return {
    restrict: 'E',
    templateUrl: 'templates/skills-member.html',
    scope: {
      member: '='
    },
    link: function(scope, element, attrs) {
      scope.member = scope.member || {};
      scope.member.skills = scope.member.skills || [];
    }
  }
}