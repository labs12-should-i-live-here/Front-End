import React from 'react';
import Navbar from '../../components/Shared/Navbar';
import '../../scss/Landing.scss';

class Landing extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <div className="body">
                <Navbar />
                <div className='body'>
                <div className="title">LiveSafe</div>
                <div className="tag">Because Nobody wants to Deal with the Insurance Company</div>
                </div>
            </div>
        )
    }
}

export default Landing;