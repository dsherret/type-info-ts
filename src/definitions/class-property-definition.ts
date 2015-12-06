import * as ts from "typescript";
import {BaseClassPropertyDefinition} from "./base/base-class-property-definition";

export class ClassPropertyDefinition extends BaseClassPropertyDefinition {
    static isProperty(symbol: ts.Symbol) {
        return (symbol.getFlags() & ts.SymbolFlags.Property) !== 0;
    }
}
