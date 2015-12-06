var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var definitions_1 = require("./../../definitions");
var utils_1 = require("./../../utils");
var DecoratedDefinition = (function () {
    function DecoratedDefinition() {
    }
    DecoratedDefinition.prototype.fillDecorators = function (symbol) {
        this._decorators = [];
        if (symbol.valueDeclaration != null && symbol.valueDeclaration.decorators != null) {
            for (var _i = 0, _a = symbol.valueDeclaration.decorators; _i < _a.length; _i++) {
                var decorator = _a[_i];
                this._decorators.push(new definitions_1.DecoratorDefinition(decorator));
            }
        }
    };
    Object.defineProperty(DecoratedDefinition.prototype, "decorators", {
        get: function () {
            return this._decorators;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        utils_1.Serializable
    ], DecoratedDefinition.prototype, "decorators", null);
    return DecoratedDefinition;
})();
exports.DecoratedDefinition = DecoratedDefinition;

//# sourceMappingURL=decorated-definition.js.map
