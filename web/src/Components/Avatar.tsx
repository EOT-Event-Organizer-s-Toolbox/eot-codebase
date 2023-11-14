type AvatarProps = {
  user: { id: number; firstName: string; lastName: string, email: string } | null;
}
const Avatar = ({user}: AvatarProps) => {
 const avatarText = `${user?.firstName[0].toUpperCase()}${user?.firstName[1].toLowerCase()}`;
 return ( 
   <figure className="flex flex-row gap-2">
    {user && 
      <div className='flex h-8 w-8 text-[1em] items-center justify-center rounded-full bg-secondary'>
        <p className="text-white text-center">{avatarText}</p>
      </div>
    }
      <figcaption className="sr-only">
        {user ? 
          <p>Avatar for user: {user?.firstName} {user?.lastName}</p>  
          :
          <p>Avatar for user: Anonymous</p>
      }
      </figcaption>
  </figure>
 )
}

export default Avatar