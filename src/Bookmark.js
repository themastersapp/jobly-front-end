import React from 'react';
import Bookmarks from './Bookmarks';


class Bookmark extends React.Component {

    render() {
// console.log(this.props);
        return (
            <>
                <Bookmarks bookmarkedJobs={this.props.bookmarkedJobs} bookmarkHandler={this.props.bookmarkHandler} extractApplication={this.props.extractApplication} retrieveProfile={this.props.retrieveProfile} applicationHandler={this.props.applicationHandler}/>
            
            </>
        )
    }
}

export default Bookmark;