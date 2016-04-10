'use strict';

angular.module('myApp.version', [
  'damefishyApp.version.interpolate-filter',
  'damefishyApp.version.version-directive'
])

.value('version', '0.1');
