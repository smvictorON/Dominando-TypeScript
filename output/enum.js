"use strict";
var Permission;
(function (Permission) {
    Permission[Permission["ADMIN"] = 5] = "ADMIN";
    Permission[Permission["USER"] = 6] = "USER";
    Permission[Permission["READONLY"] = 7] = "READONLY";
})(Permission || (Permission = {}));
console.log(Permission.ADMIN);
console.log(Permission.USER);
console.log(Permission.READONLY);
//# sourceMappingURL=enum.js.map