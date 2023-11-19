import { User } from "../types";

type AvatarProps = {
  user: User | null
}
const Avatar = ({user}: AvatarProps) => {
 const avatarText = `${user?.firstName[0].toUpperCase()}${user?.firstName[1].toLowerCase()}`;
 if (!user) {
  console.log('no user');
   return null;
 }
 return ( 
   <figure className="flex flex-row gap-2">
    {user && 
      <div className='flex h-9 w-9 text-[1em] font-bold items-center justify-center rounded-full bg-dark'>
        <p className="text-primary text-center">{avatarText}</p>
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