const getClassList = (classList: DOMTokenList | undefined): string[] => {
  const _classList = classList as DOMTokenList;

  return Object.values(_classList);
};

export { getClassList };
