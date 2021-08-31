import React from 'react';
import Bookmarks from './Bookmarks';


class Bookmark extends React.Component {

// passProps = () => {
//     test = this.props.
// }

    render() {
console.log(this.props);
        return (
            <>
                <Bookmarks bookmarkedJobs={this.props.bookmarkedJobs} bookmarkHandler={this.props.bookmarkHandler} />
            </>
        )
    }
}

export default Bookmark;