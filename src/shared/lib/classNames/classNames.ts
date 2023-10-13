type Mods = Record<string, boolean | string>;

// вернет строку классов,
// Аргументы: cls - гл класс, mods - объект, где ключ - название класса, значение - boolean флаг.
// Если true - класс добавляем, иначе удаляем
// 3-и1 аргумент additional - массив дополнительных классов
export function classNames(
  cls: string,
  mods: Mods = {},
  additional: string[] = [],
): string {
  return [
    cls,
    ...additional.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ]
    .join(' ');
}
