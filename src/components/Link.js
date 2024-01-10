export default function Link({ href, ...props }) {
    return <a href={href} className="underline" target="_blank" rel="noreferrer" {...props} />
}