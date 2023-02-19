import { fetchAPI } from '../../../api/api';

export function initializeTimes(date) {
  return fetchAPI(new Date(date));
}
export function updateTimes(state, action) {
  if (action.type === 'SETTIMES') return initializeTimes(action.payload);
  return [...state];
}
