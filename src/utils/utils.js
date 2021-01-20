export function hasChildren(item) {
  const { sub: children } = item;

  if (children === undefined) {
    return false;
  }

  if (children.constructor !== Array) {
    return false;
  }

  if (children.length === 0) return false;

  return true;
}