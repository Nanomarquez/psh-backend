export function getChangeCount(a: string[], b: string[]): { changeCount: number, repeatedIds: string[] } {
  const aSet = new Set(a);
  const bSet = new Set(b);

  const differences = new Set([...aSet].filter((x) => !bSet.has(x)));
  differences.forEach((x) => bSet.has(x) && differences.delete(x));

  const repeatedIds = [...aSet].filter((x) => bSet.has(x));

  return {
    changeCount: differences.size,
    repeatedIds,
  };
}