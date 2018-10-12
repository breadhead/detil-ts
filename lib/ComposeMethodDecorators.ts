export  default (decorators: MethodDecorator[]): MethodDecorator =>
  // tslint:disable-next-line:ban-types
  <T>(target: Object, propertyKey: string | symbol, originalDescriptor: TypedPropertyDescriptor<T>) =>
    decorators.reduce(
      (descriptor, decorator) => decorator(target, propertyKey, descriptor),
      originalDescriptor,
    )
