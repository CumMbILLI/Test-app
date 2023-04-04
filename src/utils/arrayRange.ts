export const arrayRange = (start: number, finale: number, step: number) =>
  Array.from(
    { length: (finale - start) / step + 1 },
    (_, index) => start + index * step
  );
