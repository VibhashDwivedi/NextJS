import Link from "next/link";

export default function Hobbie({params})
{
    console.log(params);
    return(
        <div className="min-h-screen">
        <h1>
            Hobbies
        </h1>
        <Link href={`/users/${params.user}/hobbies/wrestling`}>
       <div>wrestling</div>
        </Link>
        <Link href={'/users/user/hobbies/boxing'}>
      <div>Boxing</div>
        </Link>
        <Link href={'/users/user/hobbies/martial'}>
       <div>Martial Arts</div>
        </Link>
       
       
        </div>
    )
}