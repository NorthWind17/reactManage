import React from 'react';
import { Route, Link } from 'react-router-dom';
import videoR from './videoR';
import videoV from './videoV';
import videoF from './videoF';

function Video() {
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li>
                        <Link to="/video/videoR">React教程</Link>
                    </li>
                    <li>
                        <Link to="/video/videoV">videoV教程</Link>
                    </li>
                    <li>
                        <Link to="/video/videoF">videoF教程</Link>
                    </li>
                </ul>
            </div>
            <div className="videoContent">
                <div>
                    <h3>视频教程</h3>
                </div>
                <Route path="/video/videoR/" component={videoR} />
                <Route path="/video/videoV/" component={videoV} />
                <Route path="/video/videoF/" component={videoF} />
            </div>
        </div>
    );
}
export default Video;
