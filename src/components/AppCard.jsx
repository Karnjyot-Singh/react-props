import style from './AppCard.module.css';
import AppButton from './AppButton';

const AppCard = ({image, title, content, tags}) => {
  const imagePath = `/img/${image}`;

    return (
        <div className={style.card}>
            {/* Card Image */}
            <div className={style.image}>
              <img src={imagePath} alt=""/>
            </div>
            {/* Card content */}
            <div className={style.content}>
              <h5>{title}</h5>
              <div className={style.tags}>
                {tags.map((tag) => (
                  <span className={style.tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className='mb-1'>{content}</p>
              <AppButton />
            </div>
        </div>
    );
}


export default AppCard