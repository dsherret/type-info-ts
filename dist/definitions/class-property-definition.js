var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ts = require("typescript");
var base_class_property_definition_1 = require("./base/base-class-property-definition");
var ClassPropertyDefinition = (function (_super) {
    __extends(ClassPropertyDefinition, _super);
    function ClassPropertyDefinition() {
        _super.apply(this, arguments);
    }
    ClassPropertyDefinition.isProperty = function (symbol) {
        return (symbol.getFlags() & 4) !== 0;
    };
    return ClassPropertyDefinition;
})(base_class_property_definition_1.BaseClassPropertyDefinition);
exports.ClassPropertyDefinition = ClassPropertyDefinition;

//# sourceMappingURL=class-property-definition.js.map
