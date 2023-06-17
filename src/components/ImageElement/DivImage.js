import { ImageToBase64 } from "../../lib/Lib";

export default function DivImage({ src, ...props }) {
  return <div className={props.className} {...props} style={{ backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundImage: `url(${ImageToBase64(src)})` }}></div>

}
