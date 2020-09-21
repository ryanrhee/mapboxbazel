"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const decamelize_1 = __importDefault(require("decamelize"));
const polyline_1 = __importDefault(require("@mapbox/polyline"));
console.log(decamelize_1.default('OneTwoThree', '-'));
console.log(polyline_1.default.decode('asdf'));
//# sourceMappingURL=index.js.map