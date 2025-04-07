export type TSetter<T> = (
	partial: T | Partial<T> | ((state: T) => T | Partial<T>),
	replace?: boolean | undefined
) => void
