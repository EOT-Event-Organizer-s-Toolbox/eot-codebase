type AvatarProps = {
  user: { id: number; firstName: string; lastName: string } | null;
}
const Avatar = ({user}: AvatarProps) => {
 const avatarText = `${user?.firstName[0].toUpperCase()}${user?.firstName[1].toLowerCase()}`;
 return ( 
   <figure className="flex flex-row gap-2">
      <div className='flex h-8 w-8 text-[1em] items-center justify-center rounded-full bg-secondary'>
        <p className="text-white text-center">{avatarText}</p>
      </div>
      <figcaption className="sr-only">
        <p>Logged in user: {user?.firstName} {user?.lastName}</p>
      </figcaption>
  </figure>
 )
}

export default Avatar