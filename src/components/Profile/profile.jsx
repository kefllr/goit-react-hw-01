import css from './Profile.module.css'

const Profile = (props) => {
    return(
        <div className={css.profileBox}>
  <div className={css.profileImgBox}>
    <img
     className={css.profileImg}   
      src={props.image}
      alt="User avatar"
    />
    <p className={css.userName}>{props.name}</p>
    <p className={css.userinfo}>{props.tag}</p>
    <p className={css.userinfo}>{props.location}</p>
  </div>

  <ul className={css.statsList}>
    <li className={css.statsitem}>
      <span className={css.statsText}>Followers: </span>
      <span className={css.statsNum}>{props.stats.followers}</span>
    </li>
    <li className={css.statsitem}>
      <span className={css.statsText}>Views: </span>
      <span className={css.statsNum}>{props.stats.views}</span>
    </li>
    <li className={css.statsitem}>
      <span className={css.statsText}>Likes: </span>
      <span className={css.statsNum}>{props.stats.likes}</span>
    </li>
  </ul>
</div>

        );
}
export default Profile;