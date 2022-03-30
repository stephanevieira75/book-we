/**
 * This utility function is used to determine if a value should be displayed or not.
 *
 * @param value ValueType
 * @param notDisplayedMessage NotDisplayedValueType
 * @returns ValueType | NotDisplayedValueType
 */
export function shouldDiplayValue<ValueType, NotDisplayedValueType>(
  value: ValueType,
  notDisplayedMessage: NotDisplayedValueType
): ValueType | NotDisplayedValueType {
  return value ? value : notDisplayedMessage;
}
