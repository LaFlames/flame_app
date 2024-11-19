export const classNames = (
  cls: string,
  mods?: Record<string, boolean>,
  additional?: string[],
) => {
  return [
    cls,
    ...(additional || []),
    ...Object.entries(mods || {})
      .filter(([_, value]) => Boolean(value))
      .map(([key, _]) => key),
  ].join(" ");
};
