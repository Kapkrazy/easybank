import './Article.css'
function Article({src, author, title, content}) {
  return (
    <div className="article-card-wrapper">
        <div>
            <img src={src} alt="" />
        </div>
        <div className="card-content">
            <p className='author'>By {author}</p>
            <h3 className='title'>{title}</h3>
            <p className='content'>{content}</p>
        </div>
    </div>
  )
}

export default Article