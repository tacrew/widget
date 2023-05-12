export function decimal2percent(v?: string) {
    return v ? parseFloat((Number(v) * 100).toFixed(2)) : ''
}