export const convertToComponent = (svg: string, iconName: string) => {
    let newSvg = `export default (p: { class?: string }) => (`
    const attrs =
        `class={p.class} data-phosphor-icon="${iconName}" aria-hidden="true" width="1em" height="1em" pointer-events="none" display="inline-block"`
    newSvg += svg.replace("<svg", `<svg ${attrs}`)
    newSvg += ")"
    return newSvg
}
