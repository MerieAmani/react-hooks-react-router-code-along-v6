function UserCard({ user }) {
  return (
    <article>
      <h2>{user.name}</h2>
      <Link to={`/user/${user.id}`}>View Profile</Link>
    </article>
  );
};

export default UserCard;