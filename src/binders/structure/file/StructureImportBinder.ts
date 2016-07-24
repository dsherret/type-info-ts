﻿import {ImportPartDefinition, StarImportPartDefinition} from "./../../../definitions";
import {StructureFactory} from "./../../../factories";
import {ImportStructure} from "./../../../structures";
import {StringUtils} from "./../../../utils";
import {ImportBinder} from "./../../base";
import {StructureBaseDefinitionBinder} from "./../base";

export class StructureImportBinder extends ImportBinder {
    constructor(private factory: StructureFactory, private structure: ImportStructure) {
        super(new StructureBaseDefinitionBinder(structure));
    }

    getFileName() {
        return "";
    }

    getModuleSpecifier() {
        return this.structure.moduleSpecifier || "";
    }

    getIsStarImport() {
        return !StringUtils.isNullOrWhiteSpace(this.structure.starImportName);
    }

    getStarImportName() {
        return this.structure.starImportName || "";
    }

    getDefaultImport() {
        if (!StringUtils.isNullOrWhiteSpace(this.structure.defaultImportName)) {
            return this.factory.getImportPartByImportName(this.structure.defaultImportName);
        }
        else {
            return null;
        }
    }

    getNamedImports() {
        return (this.structure.namedImports || []).map(n => this.factory.getNamedImportPart(n));
    }

    getStarImports() {
        return [] as StarImportPartDefinition[];
    }
}
