// https://thispointer.com/add-property-to-an-object-in-javascript-6-ways/
export const definePropertyDynamically = (
  _object: any,
  _propertyName: any,
  _propertyValue: any
) => {
  var config = {
    value: _propertyValue,
    writable: true,
    enumerable: true,
    configurable: true,
  }
  Object.defineProperty(_object, _propertyName, config)
}
