
import { FaTwitter, FaTwitch, FaItchIo, FaPatreon, FaTumblr } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <a href="https://twitter.com/ddemoneclipse" target="_blank" className="icon">
                <span className="label">
                    <FaTwitter /> Twitter
                </span>
            </a>
            <a href="https://twitch.tv/darlingdemoneclipse" target="_blank" className="icon">
                <span className="label">
                    <FaTwitch /> Twitch
                </span>
            </a>
            <a href="https://darlingdemoneclipse.itch.io" target="_blank" className="icon">
                <span className="label">
                    <FaItchIo /> Itch.io
                </span>
            </a>
            <a href="https://www.patreon.com/DarlingDemonGames" target="_blank" className="icon">
                <span className="label">
                    <FaPatreon /> Patreon
                </span>
            </a>
            <a href="https://www.tumblr.com/darlingdemoneclipse" target="_blank" className="icon">
                <span className="label">
                    <FaTumblr /> Tumblr
                </span>
            </a>
        </footer>
    )
}

export default Footer