import PropTypes from "prop-types";
import style from "./style.module.less";
export function PersonCard({person}) {
  return (
    <div className={style.item}>
      <img key={person.id}
           alt={"加载图片"}
           className={style.img}
           loading={"lazy"}
           src={person.src}/>
    </div>
  )
}

PersonCard.propTypes = {
  person: PropTypes.object
}
