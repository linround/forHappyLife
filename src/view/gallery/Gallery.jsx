import {createImageData} from "./data.js";
import style from "./style.module.less";
import {PersonCard} from "../../component/PersonCard/PersonCard.jsx";

/**
 * 在实际场景中，只会设置图片的宽度。高度会根据图片的宽高比自动计算。
 *
 * 在模拟的场景中
 * */
export function Gallery() {
  const imageData = createImageData();
  return (
    <div className={style.container}>
      {imageData.map((item) => {
          return (<PersonCard key={item.id} person={item}></PersonCard>)
        })}
    </div>
  )
}
