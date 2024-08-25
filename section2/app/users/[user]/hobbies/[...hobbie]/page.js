export default function Userhobbie({params})
{
    console.log(params);
    return(
     <div className="min-h-screen">
         <h1>
                User {params.user}
          </h1>
          <h1>
                Hobbie {params.hobbie[0]}
          </h1>
     </div>
    )
}