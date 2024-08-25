import Link from "next/link";

export default function UserPage({params})
{
   console.log(params);
   return(
    <div className="min-h-screen">
        <h1>
            User {params.user}
            <Link href={'/users/'+params.user+'/hobbies'}>
            <div>Go to hobbies</div></Link>
        </h1>
    </div>
   )
}