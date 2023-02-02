"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NotifTypes_1 = require("./classes/NotifTypes");
new NotifTypes_1.Email().enviar({ email: "victorsm9@hotmail.com" });
new NotifTypes_1.SMS().enviar({ telefone: "14998891700" });
//# sourceMappingURL=index.js.map