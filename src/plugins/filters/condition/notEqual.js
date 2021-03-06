import * as C from '../../../i18n/constants';
import { registerCondition, getCondition } from '../conditionRegisterer';
import { CONDITION_NAME as CONDITION_EQUAL } from './equal';

export const CONDITION_NAME = 'neq';

/**
 * @param {object} dataRow The object which holds and describes the single cell value.
 * @param {Array} inputValues An array of values to compare with.
 * @returns {boolean}
 */
export function condition(dataRow, inputValues) {
  return !getCondition(CONDITION_EQUAL, inputValues)(dataRow);
}

registerCondition(CONDITION_NAME, condition, {
  name: C.FILTERS_CONDITIONS_NOT_EQUAL,
  inputsCount: 1,
  showOperators: true
});
