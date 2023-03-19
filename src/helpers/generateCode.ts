type HTMLElementCodeProps = {
    tag: HTMLElementTagNameMap,
    content: string,
}
export const generateHTMLElementCode = ({ tag, content }: HTMLElementCodeProps) => `
<${tag} class=".${tag}"> 
    ${content}
</${tag}>
`