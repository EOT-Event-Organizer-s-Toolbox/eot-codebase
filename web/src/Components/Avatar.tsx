const Avatar = () => {
 return ( 
   <figure className="flex flex-row gap-2">
      <div className='flex h-8 w-8 text-[1em] items-center justify-center rounded-full bg-secondary'>
        <p className="text-white text-center">Mi</p>
      </div>
      <figcaption className="sr-only">
        <p>UserName Goes here for screenreaders</p>
      </figcaption>
  </figure>
 )
}

export default Avatar