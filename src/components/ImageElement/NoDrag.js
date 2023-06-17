import "./styleNoDrag.css";

export default function NoDrag({ src, alt, ...props }) {
  return <img src={src} alt={alt} className={props ? `no-drag-image ${props.className}` : "no-drag-image"} {...props} />
}
