export default function Button ({text , type="button" , onClick , className=""}){
    return(
        <>
            <button 
                className={`bg-black py-1 text-White  px-4 rounded-md border ${className}`}
                type={type}
                onClick={onClick}
            >
                {text}
            </button>
        </>
    )
}
