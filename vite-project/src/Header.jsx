import title from 'vite-project/src/assets/Title.png'

function Header() {
    return (
        <>
            <div className="head1"><a href="#" className="hlabel">Player<br />Characters</a></div>
            <div className="head2"><a href="#" className="hlabel">Gunk<br />Master</a></div>
            <img src={title} alt="" className="logo"/>
            <div className="head3"><a href="#" className="hlabel">Rules<br />Compendium</a></div>
            <div className="head4"><a href="#" className="hlabel">My<br />Account</a></div>
        </>
    )
}

export default Header