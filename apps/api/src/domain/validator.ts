export interface Validator<T> {
  validate(entry: T): void;
}
