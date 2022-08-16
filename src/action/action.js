import { ADD_COUNT } from './type.js';

export function addCount(value) {
  return {
    type: ADD_COUNT,
    value,
  };
}
