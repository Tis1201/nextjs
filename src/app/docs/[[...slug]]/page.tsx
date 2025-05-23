export default function Doc({
    params,
                                  } : {
    params: {slug?: string[]};
}){
    const slug =  params.slug || [];
    if(slug.length === 2){
        return (
            <h1>
                Viewing docs for feature {slug[0]} and concept {slug[1]}
            </h1>
        )
    }else if(slug.length ===1){
        return (
            <h1>
                Viewing docs for feature {slug[0]}
            </h1>
        )
    }
    return <h1>Doc home page</h1>
}
