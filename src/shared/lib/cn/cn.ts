
type Mods = Record<string, string | boolean>

export const cn = (cls: string, additional:string[], mods?: Mods): string => {
	mods = mods ? mods : {}
	return [
		cls,
		...Object.keys(mods)
			.filter((key) => mods[key] === true),
		...additional
	].join(" ")
}