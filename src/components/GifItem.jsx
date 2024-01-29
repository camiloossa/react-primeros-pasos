
export const GifItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={url} alt={title} />
            <p>{(title.trim().length >= 1) ? title : 'No hay titulo' }</p>
        </div>
    )
}


