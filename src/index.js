// dts-buddy FAILS in this combination
// try removing the export keyword for either `EVENTS` or `dispatchInit` and it will work

export const EVENTS = {
  init: 'tocinit',
};

/**
 * @param {HTMLElement} node
 * @param {string} detail
 * @returns {string}
 */
export function dispatchInit(node, detail) {
  node.dispatchEvent(new CustomEvent(EVENTS.init, { detail }));
  return detail;
}
