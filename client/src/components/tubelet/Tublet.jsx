

function Tublet(params) {

    return (
        <><div className="col-xl-3 col-lg-4 col-md-6">
            <div className="gen-carousel-movies-style-2 movie-grid style-2">
                <div className="gen-movie-contain">
                    <div className="gen-movie-img">
                        <img src="images/background/asset-36.jpg" alt="single-video-image" />
                        <div className="gen-movie-add">
                            <div className="wpulike wpulike-heart">
                                <div className="wp_ulike_general_className">
                                    <a href="#" className="sl-button text-white"><i
                                        className="far fa-heart"></i></a>
                                </div>
                            </div>
                            <ul className="menu bottomRight">
                                <li className="share top">
                                    <i className="fa fa-share-alt"></i>
                                    <ul className="submenu">
                                        <li><a href="#" className="facebook"><i
                                            className="fab fa-facebook-f"></i></a>
                                        </li>
                                        <li><a href="#" className="facebook"><i
                                            className="fab fa-instagram"></i></a>
                                        </li>
                                        <li><a href="#" className="facebook"><i
                                            className="fab fa-twitter"></i></a></li>
                                    </ul>
                                </li>
                            </ul>
                            <div className="video-actions--link_add-to-playlist dropdown">
                                <a className="dropdown-toggle" href="#" data-toggle="dropdown"><i
                                    className="fa fa-plus"></i></a>
                                <div className="dropdown-menu">
                                    <a className="login-link" href="#">Sign in to add
                                        this video to a playlist.</a>
                                </div>
                            </div>
                        </div>
                        <div className="gen-movie-action">
                            <a href="single-videos.html" className="gen-button">
                                <i className="fa fa-play"></i>
                            </a>
                        </div>
                    </div>
                    <div className="gen-info-contain">
                        <div className="gen-movie-info">
                            <h3><a href="single-videos.html">War Hands</a></h3>
                        </div>
                        <div className="gen-movie-meta-holder">
                            <ul>
                                <li>2 weeks</li>
                                <li>
                                    <a href="animation.html"><span>Animation</span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div></>
    )
}

export default Tublet;