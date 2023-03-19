type HTMLElementCodeProps = {
    tag: HTMLElementTagNameMap,
    content: string,
}
export const generateHTMLElementCode = ({ tag, content }: HTMLElementCodeProps) => `
<${tag} class=".${tag}"> 
    ${content}
</${tag}>
`

export const reduceListToPropertiesObject = (fields: { string: { default: string } }) => (
    Object.entries(fields).reduce((acc, [key, value]) => {
        acc[key as keyof typeof fields] = value.default
        return acc;
    }, {} as Record<keyof typeof fields, string>)
)