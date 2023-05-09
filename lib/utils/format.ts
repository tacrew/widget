export function decimal2percent(v: string) {
    return parseFloat((Number(v) * 100).toFixed(2))
}