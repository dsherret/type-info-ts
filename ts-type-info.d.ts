// auto-generated by generate-definition-file
declare module "ts-type-info" {
   class Type {
       name: string;
       properties: PropertyDefinition[];
       callSignatures: CallSignatureDefinition[];
   }

   class DecoratorDefinition {
       name: string;
       arguments: ArgumentDefinition[];
   }

   class NamedDefinition {
       name: string;
   }

   class DecoratedDefinition {
       decorators: DecoratorDefinition[];
   }

   class TypedDefinition {
       type: Type;
   }

   class ParameterDefinition {
       isRequired: boolean;
       isRestParameter: boolean;
       name: string;
       decorators: DecoratorDefinition[];
       type: Type;
   }

   class BasePropertyDefinition {
       name: string;
       type: Type;
   }

   class ScopedDefinition {
       scope: Scope;
   }

   class BaseClassPropertyDefinition extends BasePropertyDefinition {
       decorators: DecoratorDefinition[];
       scope: Scope;
   }

   class ClassPropertyDefinition extends BaseClassPropertyDefinition {
       isAccessor: boolean;
       isReadonly: boolean;
   }

   class ReturnTypedDefinition {
       returnType: Type;
   }

   class ParameteredDefinition {
       parameters: ParameterDefinition[];
   }

   class CallSignatureDefinition {
       minArgumentCount: number;
       typeParameters: TypeParameterDefinition[];
       parameters: ParameterDefinition[];
       returnType: Type;
   }

   class ArgumentDefinition {
       text: string;
   }

   class BaseMethodDefinition {
       name: string;
       decorators: DecoratorDefinition[];
       parameters: ParameterDefinition[];
       returnType: Type;
       scope: Scope;
   }

   class MethodDefinition extends BaseMethodDefinition {
   }

   class PropertyDefinition extends BasePropertyDefinition {
   }

   class StaticMethodDefinition extends BaseMethodDefinition {
   }

   class StaticPropertyDefinition extends BaseClassPropertyDefinition {
   }

   class TypeParameterDefinition {
       constraint: Type;
       name: string;
   }

   class ConstructorDefinition {
       parameters: ParameterDefinition[];
   }

   class ClassDefinition {
       baseClasses: ClassDefinition[];
       constructorDef: ConstructorDefinition;
       methods: MethodDefinition[];
       properties: ClassPropertyDefinition[];
       staticMethods: StaticMethodDefinition[];
       staticProperties: StaticPropertyDefinition[];
       typeParameters: TypeParameterDefinition[];
       name: string;
       decorators: DecoratorDefinition[];
   }

   class FileDefinition {
       name: string;
       classes: ClassDefinition[];
   }

   export enum Scope {
       public,
       protected,
       private
   }

   export function getFileInfo(fileNames: string[]): FileDefinition[];
}
