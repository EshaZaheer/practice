import { COUNTER_CHANGE } from './types';

export function changeCount(count) {
    return {
        payload: count,
        type: COUNTER_CHANGE
    }
}