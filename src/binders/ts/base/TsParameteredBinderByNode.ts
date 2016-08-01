﻿import {TsNode} from "./../../../compiler";
import {BaseParameterDefinitionConstructor, BaseParameterDefinition} from "./../../../definitions";
import {TsFactory} from "./../../../factories";
import {ParameteredBinder} from "./../../base";

export interface TsParameterBinderByNodeConstructor<ParameterType extends BaseParameterDefinition> {
    new(factory: TsFactory, node: TsNode): { bind(def: ParameterType): void; };
}

export class TsParameteredBinderByNode<ParameterType extends BaseParameterDefinition> extends ParameteredBinder<ParameterType> {
    constructor(
        private readonly factory: TsFactory,
        private readonly node: TsNode,
        private readonly paramDefinition: BaseParameterDefinitionConstructor<ParameterType>,
        private readonly paramBinder: TsParameterBinderByNodeConstructor<ParameterType>
    ) {
        super();
    }

    getParameters() {
        return this.node.getParameters().map(param => {
            const paramDefinition = new this.paramDefinition();
            const paramBinder = new this.paramBinder(this.factory, param);

            paramBinder.bind(paramDefinition);

            return paramDefinition;
        });
    }
}
